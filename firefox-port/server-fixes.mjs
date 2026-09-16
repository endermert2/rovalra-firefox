import * as walk from 'acorn-walk';
import {functions,normalizedHash,edits,parseJS} from './adapter.mjs';

export function repairServers(source,contracts) {
  const nodes=functions(source),changes=[];
  function replace(name,transform) {
    const matches=nodes.get(name);
    if(matches?.length!==1)throw new Error(`Server function ${name} changed; review required`);
    const node=matches[0],original=source.slice(node.start,node.end);
    if(normalizedHash(original)!==contracts.serverFunctions[name])throw new Error(`Server function ${name} changed; review required`);
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
  replace('getPlaceIdFromUrl6',()=>`function getPlaceIdFromUrl6() { return getPlaceIdFromUrl() || ""; }`);
  for(const name of ['createServerCardFromRobloxApi','createServerCardFromApi','createModernServerCard']) {
    replace(name,text=>once(text,'serverItem.dataset.rovalraServerid = serverId;',
      'serverItem.dataset.rovalraServerid = serverId; serverItem.dataset.placeid = String(placeId || getPlaceIdFromUrl() || "");'));
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
  let queues=0;
  walk.simple(parseJS(source),{Property(node) {
    if(node.key.name==='uptimeBatch' && node.value.type==='NewExpression' && node.value.callee.name==='Set') {
      changes.push({...node.value.callee,text:'Map'});queues++;
    }
  }});
  if(queues!==2)throw new Error('Server queue layout changed; review required');
  return edits(source,changes);
}
