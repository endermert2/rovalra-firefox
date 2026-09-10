// These functions replace the string-injection launcher in the upstream bundle.
function executeLaunchScript(method, args = [], fallbackUrl = null) {
  return browser.runtime.sendMessage({
    action: "rovalraFirefoxLaunch", method, args, fallbackUrl,
  }).then((response) => {
    if (!response?.success) throw new Error(response?.error || "Game launch failed");
  }).catch((error) => console.error("RoValra Launcher:", error));
}
function launchGame(placeId, jobId = null) {
  return executeLaunchScript("joinGameInstance", jobId
    ? [Number(placeId), String(jobId)] : [Number(placeId)]);
}
function launchPrivateGame(placeId, accessCode, linkCode) {
  return executeLaunchScript("joinPrivateGame", [Number(placeId), accessCode, linkCode]);
}
function launchMultiplayerGame(placeId, launchData = {}) {
  return executeLaunchScript("joinMultiplayerGame", [Number(placeId), false, false, null, null, { launchData }]);
}
function followUser(userId) {
  const id = Number.parseInt(userId, 10);
  const url = `https://assetgame.roblox.com/game/PlaceLauncher.ashx?request=RequestFollowUser&userId=${id}&is30=false`;
  return executeLaunchScript("followPlayerIntoGame", [id],
    `roblox-player:1+launchmode:play+placelauncherurl:${encodeURIComponent(url)}`);
}
async function launchStudioForGame(placeId) {
  try {
    const games = await callRobloxApiJson({
      subdomain: "games", endpoint: `/v1/games/multiget-place-details?placeIds=${placeId}`,
    });
    if (!games?.[0]?.universeId) throw new Error("Universe ID unavailable");
    return executeLaunchScript("editGameInStudio", [Number(placeId), games[0].universeId],
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
