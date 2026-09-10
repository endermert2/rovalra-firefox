/* RoValra Firefox compatibility layer, GPL-3.0-or-later. */
(() => {
  const sessionMethods = new Set(["get", "set", "remove", "clear", "getBytesInUse"]);
  const launchMethods = new Set([
    "joinGameInstance", "joinPrivateGame", "joinMultiplayerGame",
    "followPlayerIntoGame", "editGameInStudio", "openProtocolUrl",
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
    const launcher = window.Roblox?.GameLauncher;
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
