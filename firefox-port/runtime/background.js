/* RoValra Firefox compatibility layer, GPL-3.0-or-later. */
(() => {
  const sessionMethods = new Set(["get", "set", "remove", "clear", "getBytesInUse"]);
  const launchMethods = new Set([
    "joinGameInstance", "joinPrivateGame", "joinMultiplayerGame",
    "followPlayerIntoGame", "editGameInStudio", "openProtocolUrl", "navigateToDeepLink",
  ]);
  function isRobloxSender(sender) {
    try {
      const url = new URL(sender.url);
      return sender.id === browser.runtime.id &&
        ["https:", "http:"].includes(url.protocol) &&
        (url.hostname === "roblox.com" || url.hostname.endsWith(".roblox.com"));
    } catch { return false; }
  }
  browser.runtime.onConnect.addListener((port) => {
    if (port.name !== 'rovalraFirefoxMeshWorker' || !isRobloxSender(port.sender)) {
      port.disconnect();
      return;
    }
    const worker = new Worker(browser.runtime.getURL('firefox/mesh-worker.js'));
    const post = (message) => { try { port.postMessage(message); } catch { worker.terminate(); } };
    port.onMessage.addListener((data) => {
      if (!Array.isArray(data) || !['patchRBF', 'RBFDeformerSolveAsync'].includes(data[1])) {
        post({ error: 'Invalid mesh worker operation' });
        return;
      }
      worker.postMessage(data);
    });
    worker.onmessage = event => post({ data: event.data });
    worker.onerror = event => post({ error: event.message || 'Mesh worker failed' });
    port.onDisconnect.addListener(() => worker.terminate());
  });
  // This function is serialized by scripting.executeScript. It must be standalone.
  function launchInPage(method, args, fallbackUrl) {
    const launcher = method === "navigateToDeepLink"
      ? window.Roblox?.DeepLinkService : window.Roblox?.GameLauncher;
    if (method === "joinMultiplayerGame") window.__rovalra_skipNextLaunch = true;
    if (launcher && typeof launcher[method] === "function") {
      launcher[method](...args);
      return true;
    }
    if (fallbackUrl && /^roblox(?:-player|-studio)?:/i.test(fallbackUrl)) {
      window.location.href = fallbackUrl;
      return true;
    }
    throw new Error("Roblox game launcher is not available on this page");
  }
  browser.runtime.onMessage.addListener((message, sender) => {
    if(message.action==='rovalraFirefoxFetch') {
      return (async()=>{
        if(!isRobloxSender(sender))return {ok:false,error:'Invalid RoValra request sender'};
        try {
          const url=new URL(message.url);
          if(url.protocol!=='https:' || url.username || url.password ||
            !['apis.rovalra.com','www.rovalra.com'].includes(url.hostname) ||
            !['GET','HEAD','POST','PUT','PATCH','DELETE'].includes(message.method)) {
            return {ok:false,error:'RoValra request destination or method is not allowed'};
          }
          const body=message.body;
          if(body!==null && (!Array.isArray(body)||body.length>8*1024*1024||body.some(b=>!Number.isInteger(b)||b<0||b>255))) {
            return {ok:false,error:'Invalid RoValra request body'};
          }
          const headers=new Headers();
          const allowed=new Set(['accept','content-type','authorization','x-rovalra-user-agent','x-api-key','roblox-id','x-requested-with']);
          for(const [key,value]of Object.entries(message.headers||{}))if(allowed.has(key.toLowerCase()))headers.set(key,value);
          // Do not forward Roblox cookies or follow redirects with a bearer token.
          const response=await fetch(url.href,{method:message.method,headers,
            body:body===null?undefined:new Uint8Array(body),credentials:'omit',redirect:'error',
            cache:message.cache==='no-store'?'no-store':'default',signal:AbortSignal.timeout(20000)});
          const chunks=[];let size=0;
          if(response.body)for await(const chunk of response.body){
            size+=chunk.length;if(size>8*1024*1024)throw new Error('Response too large');chunks.push(chunk);
          }
          const bytes=new Uint8Array(size);let offset=0;
          for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.length;}
          return {ok:true,status:response.status,statusText:response.statusText,
            headers:Object.fromEntries(response.headers),body:Array.from(bytes)};
        }catch{return {ok:false,error:'RoValra background request failed (network, timeout, or redirect)'};}
      })();
    }
    if (message.action === "rovalraFirefoxMainScript") {
      if (!isRobloxSender(sender) || !sender.tab?.id ||
          message.path !== "public/Assets/data/globe_initializer.js") {
        return Promise.resolve({ success: false, error: "Invalid packaged script request" });
      }
      return browser.scripting.executeScript({
        target: { tabId: sender.tab.id, frameIds: [sender.frameId ?? 0] },
        world: "MAIN", files: [message.path],
      }).then(() => ({ success: true }), (error) => ({ success: false, error: error.message }));
    }
    if (message.action === "rovalraFirefoxSession") {
      if (!isRobloxSender(sender) || !sessionMethods.has(message.method)) {
        return Promise.resolve({ ok: false, error: "Invalid session request" });
      }
      const args = message.method === "clear" ? [] : [message.value];
      return browser.storage.session[message.method](...args)
        .then((value) => ({ ok: true, value }), (error) => ({ ok: false, error: error.message }));
    }
    if (message.action === "rovalraFirefoxLaunch") {
      if (!isRobloxSender(sender) || !sender.tab?.id ||
          !launchMethods.has(message.method) || !Array.isArray(message.args) ||
          (message.fallbackUrl && !/^roblox(?:-player|-studio)?:/i.test(message.fallbackUrl))) {
        return Promise.resolve({ success: false, error: "Invalid game launch request" });
      }
      return browser.scripting.executeScript({
        target: { tabId: sender.tab.id, frameIds: [sender.frameId ?? 0] },
        world: "MAIN", func: launchInPage,
        args: [message.method, message.args, message.fallbackUrl || null],
      }).then(() => ({ success: true }), (error) => ({ success: false, error: error.message }));
    }
    return false;
  });
  browser.storage.onChanged.addListener((changes, area) => {
    if (area !== "session") return;
    browser.tabs.query({ url: "*://*.roblox.com/*" }).then((tabs) => {
      for (const tab of tabs) browser.tabs.sendMessage(tab.id, {
        action: "rovalraFirefoxSessionChanged", changes,
      }).catch(() => {});
    }).catch(console.error);
  });
})();
