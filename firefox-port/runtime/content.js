/* RoValra Firefox compatibility layer, GPL-3.0-or-later. */
// Firefox MV3 content fetches obey the Roblox page's CSP. Only the two
// declared RoValra hosts use the privileged transport; Roblox stays on-page.
async function RoValraFirefoxFetch(input,init) {
  const url=new URL(input instanceof Request?input.url:String(input),location.href);
  if(url.protocol!=='https:' || !['apis.rovalra.com','www.rovalra.com'].includes(url.hostname))return fetch(input,init);
  const request=new Request(input,init);
  if(request.signal.aborted)throw new DOMException('Request aborted','AbortError');
  const body=['GET','HEAD'].includes(request.method)?null:Array.from(new Uint8Array(await request.arrayBuffer()));
  if(body?.length>8*1024*1024)throw new Error('RoValra request exceeds the transport size limit');
  const response=await browser.runtime.sendMessage({action:'rovalraFirefoxFetch',url:request.url,
    method:request.method,headers:Object.fromEntries(request.headers),body,cache:request.cache});
  if(request.signal.aborted)throw new DOMException('Request aborted','AbortError');
  if(!response?.ok)throw new Error(response?.error||'RoValra background request failed');
  return new Response([204,205,304].includes(response.status)||request.method==='HEAD'?null:new Uint8Array(response.body),
    {status:response.status,statusText:response.statusText,headers:response.headers});
}

// Keep object event payloads readable by Roblox's MAIN-world scripts.
function RoValraFirefoxCustomEvent(type, options = {}) {
  const detail = options.detail;
  return new CustomEvent(type, {
    ...options,
    detail: /^rovalra/i.test(type) && detail !== null && typeof detail === "object"
      ? cloneInto(detail, window)
      : detail,
  });
}
RoValraFirefoxCustomEvent.prototype = CustomEvent.prototype;

// Workers created in a content script inherit page-origin restrictions in
// Firefox. Run the same packaged worker in the extension's background context.
function RoValraFirefoxWorker() {
  const port = browser.runtime.connect({ name: "rovalraFirefoxMeshWorker" });
  const listeners = { message: new Set(), error: new Set() };
  const worker = {
    onmessage: null, onerror: null,
    postMessage: (data) => port.postMessage(data),
    terminate: () => port.disconnect(),
    addEventListener: (type, listener) => listeners[type]?.add(listener),
    removeEventListener: (type, listener) => listeners[type]?.delete(listener),
  };
  port.onMessage.addListener((message) => {
    const type = message.error ? 'error' : 'message';
    const event = message.error ? { message: message.error } : { data: message.data };
    worker[`on${type}`]?.(event);
    for (const listener of listeners[type]) listener(event);
  });
  port.onDisconnect.addListener(() => {
    if (port.error) worker.onerror?.({ message: port.error.message });
  });
  return worker;
}

// Firefox does not expose session storage to content scripts on all supported
// versions. Use the background's real session area, never persistent local data.
const RoValraFirefoxStorage = (() => {
  const listeners = new Set();
  const session = {};
  for (const method of ["get", "set", "remove", "clear", "getBytesInUse"]) {
    session[method] = (value, callback) => {
      if (typeof value === "function") { callback = value; value = undefined; }
      const pending = browser.runtime.sendMessage({
        action: "rovalraFirefoxSession", method, value,
      }).then((response) => {
        if (!response?.ok) throw new Error(response?.error || "Session storage unavailable");
        return response.value;
      });
      if (callback) pending.then(callback, (error) => console.error(error));
      return pending;
    };
  }
  const notify = (changes, area) => {
    for (const listener of listeners) {
      try { listener(changes, area); } catch (error) { console.error(error); }
    }
  };
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area !== "session") notify(changes, area);
  });
  browser.runtime.onMessage.addListener((message) => {
    if (message.action === "rovalraFirefoxSessionChanged") notify(message.changes, "session");
    return false;
  });
  const onChanged = {
    addListener: (listener) => listeners.add(listener),
    removeListener: (listener) => listeners.delete(listener),
    hasListener: (listener) => listeners.has(listener),
  };
  return new Proxy(chrome.storage, {
    get: (target, key) => key === "session" ? session : key === "onChanged" ? onChanged : target[key],
  });
})();
