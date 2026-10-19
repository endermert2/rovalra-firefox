// These functions replace the string-injection launcher in the upstream bundle.
function toSafeId(value) {
  const id = Number.parseInt(value, 10);
  return Number.isSafeInteger(id) && id > 0 ? id : null;
}
function executeLaunchScript(method, args = [], fallbackUrl = null) {
  return browser.runtime.sendMessage({
    action: "rovalraFirefoxLaunch", method, args, fallbackUrl,
  }).then((response) => {
    if (!response?.success) throw new Error(response?.error || "Game launch failed");
  }).catch((error) => console.error("RoValra Launcher:", error));
}
function launchGame(placeId, jobId = null) {
  placeId = toSafeId(placeId);
  if (!placeId) return;
  return runLaunch(placeId, "joinGameInstance", jobId
    ? [Number(placeId), String(jobId)] : [Number(placeId)]);
}
function launchPrivateGame(placeId, accessCode, linkCode) {
  placeId = toSafeId(placeId);
  if (!placeId) return;
  return runLaunch(placeId, "joinPrivateGame", [Number(placeId), accessCode, linkCode]);
}
function launchMultiplayerGame(placeId, launchData = {}) {
  placeId = toSafeId(placeId);
  if (!placeId) return;
  window.__rovalra_skipNextLaunch = true;
  return runLaunch(placeId, "joinMultiplayerGame", [Number(placeId), false, false, null, null, { launchData }]);
}
function runLaunch(placeId, method, args) {
  if (!preLaunchHook) return executeLaunchScript(method, args);
  return Promise.resolve().then(() => preLaunchHook(placeId)).catch((error) => {
    console.error("RoValra Launcher: Pre launch hook failed", error);
  }).then(() => executeLaunchScript(method, args));
}
function followUser(userId) {
  const id = toSafeId(userId);
  if (!id) return;
  const url = `https://assetgame.roblox.com/game/PlaceLauncher.ashx?request=RequestFollowUser&userId=${id}&is30=false`;
  const launch = () => executeLaunchScript("followPlayerIntoGame", [id],
    `roblox-player:1+launchmode:play+placelauncherurl:${encodeURIComponent(url)}`);
  if (!followUserHook) return launch();
  return resolveGameLaunchPlaceId({request: "RequestFollowUser", userId: String(id)})
    .then((placeId) => followUserHook(placeId)).catch((error) => {
      console.error("RoValra Launcher: Follow user hook failed", error);
    }).then(launch);
}
function openWebChat(userId) {
  const id = toSafeId(userId);
  if (!id) return;
  return executeLaunchScript("navigateToDeepLink", [`roblox://navigation/chat?userId=${id}`]);
}
async function launchStudioForGame(placeId) {
  placeId = toSafeId(placeId);
  if (!placeId) return;
  try {
    const games = await callRobloxApiJson({
      subdomain: "games", endpoint: `/v1/games/multiget-place-details?placeIds=${placeId}`,
    });
    const universeId = toSafeId(games?.[0]?.universeId);
    if (!universeId) throw new Error("Universe ID unavailable");
    return executeLaunchScript("editGameInStudio", [Number(placeId), universeId],
      `roblox-studio:launchmode:edit+task:EditPlace+placeId:${Number(placeId)}`);
  } catch (error) {
    console.error("RoValra Launcher: Studio fallback", error);
    return executeLaunchScript("openProtocolUrl", [
      `roblox-studio:launchmode:edit+task:EditPlace+placeId:${Number(placeId)}`,
    ], `roblox-studio:launchmode:edit+task:EditPlace+placeId:${Number(placeId)}`);
  }
}
function launchDeeplink(url) {
  if (!/^roblox(?:-player|-studio)?:/i.test(url)) throw new Error("Invalid Roblox protocol URL");
  return executeLaunchScript("openProtocolUrl", [url], url);
}
