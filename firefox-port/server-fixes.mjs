import * as walk from 'acorn-walk';
import {functions,normalizedHash,edits,parseJS} from './adapter.mjs';

export function repairServers(source,contracts) {
  const nodes=functions(source),changes=[];
  function replace(name,transform) {
    const matches=nodes.get(name);
    if(matches?.length!==1)throw new Error(`Server function ${name} changed; review required`);
    const node=matches[0],original=source.slice(node.start,node.end);
    if(normalizedHash(original)!==contracts.serverFunctions[name])throw new Error(`Server function ${name} changed; review required (reviewed upstream: ${contracts.upstreamVersion}). Update the adapter and reviewed contracts together; do not bypass this check.`);
    changes.push({...node,text:transform(original)});
  }
  function once(text,before,after) {
    if(text.split(before).length!==2)throw new Error('Server patch changed; review required');
    return text.replace(before,after);
  }
  replace('enhanceServer',text=>{
    text=once(text,'processUptimeBatch: processUptimeBatch2','processUptimeBatch: processUptimeBatch2 = processUptimeBatch');
    text=once(text,'uptimeBatch.add(serverId)','uptimeBatch.set(serverId, server.dataset.placeid || getPlaceIdFromUrl())');
    return once(text,'() => processUptimeBatch2()','() => processUptimeBatch2(context)');
  });
  replace('processUptimeBatch',()=>`function processUptimeBatch(context = _state) {
    const groups = new Map();
    for (const [serverId, placeId] of context.uptimeBatch) {
      if (!placeId) continue;
      if (!groups.has(String(placeId))) groups.set(String(placeId), []);
      groups.get(String(placeId)).push(serverId);
    }
    context.uptimeBatch.clear();
    return Promise.all([...groups].map(([placeId, ids]) => fetchServerUptime(
      placeId, ids, context.serverLocations, context.serverUptimes, context.serverStatuses
    ).catch(() => {})));
  }`);
  // Upstream 2.6.12 now uses the shared, subplace-aware URL helper itself.
  for(const name of ['createServerCardFromRobloxApi','createServerCardFromApi','createModernServerCard']) {
    replace(name,text=>once(text,'serverItem.dataset.rovalraServerid = serverId,',
      'serverItem.dataset.placeid = String(placeId || getPlaceIdFromUrl() || ""), serverItem.dataset.rovalraServerid = serverId,'));
  }
  replace('fetchServerUptime',text=>{
    text=once(text,'!response.servers || response.servers.length === 0','!Array.isArray(response?.servers)');
    return once(text,', !getServerRegion(id) && !serverStatuses[id] && displayServerFullStatus(el3)','');
  });
  replace('fetchAndDisplayRegion',text=>{
    text=once(text,'serverStatuses[serverId] = "inactive"','serverStatuses[serverId] = "unconfirmed"');
    // Missing place information or a failed request cannot establish fullness.
    // Keep the explicit status === 22 full-server handling below unchanged.
    const fallback='!serverLocations3[serverId] && !serverStatuses[serverId] && displayServerFullStatus(server)';
    if(text.split(fallback).length!==3)throw new Error('Server status fallback changed; review required');
    return text.replaceAll(fallback,'!serverLocations3[serverId] && !serverStatuses[serverId] && displayInactivePlaceStatus(server)');
  });
  // A join probe is an eligibility check, not an authoritative server list.
  // In particular, subplaces can reject a direct join while listing live servers.
  replace('displayInactivePlaceStatus',()=>`function displayInactivePlaceStatus(server) {
    if (!server) return;
    updateInfoElement(getOrCreateDetailsContainer(server), "Inactive", "",
      "Server availability unconfirmed", true);
  }`);
  // callRobloxApi independently broadcasts status 5 before the region renderer
  // handles its response. Preserve the card in that event listener too.
  replace('attachGlobalListeners2',text=>once(text,
    'serverElement?.dataset.rovalraAddedByFilter === "true" && serverElement.remove();',
    'serverElement && displayInactivePlaceStatus(serverElement);'));
  // Listing and join eligibility are separate. Do not discard listed servers
  // before rendering merely because a metadata join probe was unsuccessful.
  replace('renderAndAppendServers',text=>once(text,
    'let activeServers = [];\n    for (let s of servers)\n      await isServerActive2(placeId, s.id || s.server_id) && activeServers.push(s);',
    'let activeServers = servers.filter(server => server && (server.id || server.server_id));'));
  replace('fetchServerRegion2',text=>{
    const request=once(once(text,'async function fetchServerRegion2(placeId, serverId, options = {})',
      'async function request()'),'if (!response.ok) throw new Error("API Error");',`
      if (response.status === 429) {
        const retryAfter = response.headers.get("Retry-After");
        const seconds = retryAfter === null ? NaN : Number(retryAfter);
        const delay = Number.isFinite(seconds) ? seconds * 1000 : Date.parse(retryAfter) - Date.now();
        probe.retryAfter = Date.now() + Math.max(1000, Number.isFinite(delay) ? delay : 5000);
        return unavailable();
      }
      if (!response.ok) throw new Error("API Error");`);
    return `async function fetchServerRegion2(placeId, serverId, options = {}) {
      const probe = fetchServerRegion2;
      const unavailable = () => ({status: 0, message: "Server details temporarily unavailable"});
      probe.pending ||= new Map();
      probe.recent ||= new Map();
      const key = JSON.stringify([String(placeId), serverId, !!options.isPrivate, options.accessCode, options.linkCode]);
      if (probe.pending.has(key)) return probe.pending.get(key);
      for (const [id, entry] of probe.recent) if (entry.expires <= Date.now()) probe.recent.delete(id);
      if (probe.recent.has(key)) return probe.recent.get(key).value;
      if (Date.now() < (probe.retryAfter || 0)) return unavailable();
      ${request}
      const task = (probe.queue || Promise.resolve()).then(async () => {
        // Queued work must check again after an earlier request receives 429.
        if (Date.now() < (probe.retryAfter || 0)) return unavailable();
        const wait = (probe.lastStarted || 0) + 250 - Date.now();
        if (wait > 0) await new Promise(resolve => setTimeout(resolve, wait));
        probe.lastStarted = Date.now();
        const value = await request();
        probe.recent.set(key, {value, expires: Date.now() + 10000});
        if (probe.recent.size > 256) probe.recent.delete(probe.recent.keys().next().value);
        return value;
      });
      probe.queue = task.catch(() => {});
      probe.pending.set(key, task);
      try { return await task; } finally { probe.pending.delete(key); }
    }`;
  });
  let queues=0;
  walk.simple(parseJS(source),{Property(node) {
    if(node.key.name==='uptimeBatch' && node.value.type==='NewExpression' && node.value.callee.name==='Set') {
      changes.push({...node.value.callee,text:'Map'});queues++;
    }
  }});
  if(queues!==2)throw new Error('Server queue layout changed; review required');
  return edits(source,changes);
}
