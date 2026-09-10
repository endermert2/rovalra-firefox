/*!
 * rovalra v2.6.8
 * License: GPL-3.0
 * Repository: https://github.com/NotValra/RoValra
 * This extension is provided AS-IS without warranty.
 */
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
const AccessoryAssetTypes = [
  8,
  41,
  42,
  43,
  44,
  45,
  46,
  47
], LayeredAssetTypes = [
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  41
];
(function() {
  "use strict";
  if (window.__ROVALRA_INTERCEPTOR_SETUP__)
    return;
  window.__ROVALRA_INTERCEPTOR_SETUP__ = !0;
  const CATALOG_API_URL = "https://catalog.roblox.com/v1/catalog/items/details", CLIENT_STATUS_API_URL = "https://apis.roblox.com/matchmaking-api/v1/client-status", GAME_LAUNCH_SUCCESS_URL = "https://metrics.roblox.com/v1/games/report-event", GAME_SERVERS_API_URL = "https://games.roblox.com/", GAMES_ROBLOX_API = "https://games.roblox.com/", TRADES_API_URL = "https://trades.roblox.com/v2/users/", TRADE_DETAILS_API_URL = "https://trades.roblox.com/v2/trades/", TRADES_LIST_API_URL = "https://trades.roblox.com/v1/trades/", GROUP_ROLES_API_HOST = "groups.roblox.com", GROUP_ROLES_API_PATH = /^\/v1\/users\/(\d+)\/groups\/roles$/, PROFILE_API_URL = "https://apis.roblox.com/profile-platform-api/v1/profiles/get", ACCOUNT_SETTINGS_UI_API_URL = "https://apis.roblox.com/guac-v2/v1/bundles/account-settings-ui", USER_SETTINGS_API_URL = "https://apis.roblox.com/user-settings-api/v1/user-settings", FREE_ROBLOX_PLUS_THEMES_SETTING = "FreeRobloxPlusThemesEnabled", ROBLOX_ADMIN_GROUP_ID = 1200769, OMNI_RECOMMENDATION_API_URL = "https://apis.roblox.com/discovery-api/omni-recommendation", FRIEND_CAROUSEL_TOPIC_ID = 6e8, FRIEND_CAROUSEL_TREATMENT_TYPE = "FriendCarousel", THUMBNAILS_API_HOST = "thumbnails.roblox.com", THUMBNAIL_BACKGROUND_SETTING = "disableThumbnailBackground", THUMBNAIL_PROFILE_FRAME_SETTING = "disableThumbnailProfileFrame";
  let ASSET_TYPE_ACCESSORIES = [8, 41, 42, 43, 44, 45, 46, 47, 57, 58], ASSET_TYPE_LAYERED = [64, 65, 66, 67, 68, 69, 70, 71, 72], streamerModeEnabled = !1, settingsPageInfoEnabled = !0, accurateContinueEnabled = !0, accurateContinueGames = [], homeLayoutOrder = [], homeLayoutHidden = [], homeExtraSorts = [], homeLayoutReady = !1, homeLayoutReadyPromise = null, resolveHomeLayoutReady = null, robloxGroupFeaturesEnabled = !0, freeRobloxPlusThemesEnabled = !1, disableThumbnailBackground = !1, disableThumbnailProfileFrame = !1;
  function updateThumbnailBackgroundSetting(value) {
    disableThumbnailBackground = value === !0;
  }
  __name(updateThumbnailBackgroundSetting, "updateThumbnailBackgroundSetting");
  function updateThumbnailProfileFrameSetting(value) {
    disableThumbnailProfileFrame = value === !0;
  }
  __name(updateThumbnailProfileFrameSetting, "updateThumbnailProfileFrameSetting");
  function isThumbnailsApiRequest(url) {
    try {
      return new URL(url, window.location.origin).hostname === THUMBNAILS_API_HOST;
    } catch {
      return !1;
    }
  }
  __name(isThumbnailsApiRequest, "isThumbnailsApiRequest");
  function rewriteThumbnailRequestBody(body) {
    if (typeof body != "string" || !body) return body;
    try {
      const data = JSON.parse(body);
      return !data || typeof data != "object" ? body : (Array.isArray(data) ? data.forEach((request) => {
        request && typeof request == "object" && (disableThumbnailBackground && (request.includeBackground = !1), disableThumbnailProfileFrame && (request.includeProfileFrame = !1));
      }) : (disableThumbnailBackground && (data.includeBackground = !1), disableThumbnailProfileFrame && (data.includeProfileFrame = !1)), JSON.stringify(data));
    } catch {
      return body;
    }
  }
  __name(rewriteThumbnailRequestBody, "rewriteThumbnailRequestBody");
  function rewriteThumbnailRequestUrl(url) {
    if (!disableThumbnailBackground && !disableThumbnailProfileFrame || !isThumbnailsApiRequest(url))
      return url;
    try {
      const rewrittenUrl = new URL(url, window.location.origin);
      return disableThumbnailBackground && rewrittenUrl.searchParams.set("includeBackground", "false"), disableThumbnailProfileFrame && rewrittenUrl.searchParams.set("includeProfileFrame", "false"), rewrittenUrl.toString();
    } catch {
      return url;
    }
  }
  __name(rewriteThumbnailRequestUrl, "rewriteThumbnailRequestUrl");
  async function rewriteThumbnailFetchArgs(args, requestUrl) {
    if (!disableThumbnailBackground && !disableThumbnailProfileFrame || !isThumbnailsApiRequest(requestUrl))
      return args;
    const [input, init] = args, rewrittenUrl = rewriteThumbnailRequestUrl(requestUrl);
    if (init?.body !== void 0)
      return [
        rewrittenUrl,
        { ...init, body: rewriteThumbnailRequestBody(init.body) }
      ];
    if (!(input instanceof Request)) return args;
    try {
      const body = await input.clone().text(), rewrittenBody = rewriteThumbnailRequestBody(body);
      return rewrittenUrl === requestUrl && rewrittenBody === body ? args : [
        new Request(rewrittenUrl, {
          method: input.method,
          headers: input.headers,
          body: rewrittenBody || void 0,
          credentials: input.credentials,
          mode: input.mode,
          cache: input.cache,
          redirect: input.redirect,
          referrer: input.referrer,
          referrerPolicy: input.referrerPolicy,
          integrity: input.integrity,
          keepalive: input.keepalive
        }),
        init
      ];
    } catch {
      return args;
    }
  }
  __name(rewriteThumbnailFetchArgs, "rewriteThumbnailFetchArgs");
  try {
    freeRobloxPlusThemesEnabled = sessionStorage.getItem("rovalra_freeRobloxPlusThemes") === "true";
  } catch {
  }
  document.addEventListener("rovalra:settingSaved", (event) => {
    event.detail?.name === "robloxGroupFeaturesEnabled" && (robloxGroupFeaturesEnabled = event.detail.value !== !1);
  }), document.addEventListener("rovalra:settingSaved", (event) => {
    event.detail?.name === THUMBNAIL_BACKGROUND_SETTING && updateThumbnailBackgroundSetting(event.detail.value), event.detail?.name === THUMBNAIL_PROFILE_FRAME_SETTING && updateThumbnailProfileFrameSetting(event.detail.value);
  }), document.addEventListener("rovalra:settingsState", (event) => {
    typeof event.detail?.robloxGroupFeaturesEnabled == "boolean" && (robloxGroupFeaturesEnabled = event.detail.robloxGroupFeaturesEnabled), typeof event.detail?.[THUMBNAIL_BACKGROUND_SETTING] == "boolean" && updateThumbnailBackgroundSetting(
      event.detail[THUMBNAIL_BACKGROUND_SETTING]
    ), typeof event.detail?.[THUMBNAIL_PROFILE_FRAME_SETTING] == "boolean" && updateThumbnailProfileFrameSetting(
      event.detail[THUMBNAIL_PROFILE_FRAME_SETTING]
    );
  }), document.addEventListener("rovalra:settingSaved", (event) => {
    if (event.detail?.name === FREE_ROBLOX_PLUS_THEMES_SETTING) {
      freeRobloxPlusThemesEnabled = event.detail.value === !0;
      try {
        sessionStorage.setItem(
          "rovalra_freeRobloxPlusThemes",
          String(freeRobloxPlusThemesEnabled)
        );
      } catch {
      }
    }
  });
  try {
    streamerModeEnabled = sessionStorage.getItem("rovalra_streamermode") === "true", settingsPageInfoEnabled = sessionStorage.getItem("rovalra_settingsPageInfo") !== "false", accurateContinueEnabled = sessionStorage.getItem("rovalra_accurateContinue") !== "false", homeLayoutOrder = JSON.parse(
      sessionStorage.getItem("rovalra_homeLayoutOrder") || "[]"
    ), homeLayoutHidden = JSON.parse(
      sessionStorage.getItem("rovalra_homeLayoutHidden") || "[]"
    );
  } catch {
  }
  document.addEventListener("rovalra-streamer-mode", (e) => {
    typeof e.detail == "object" ? (streamerModeEnabled = e.detail.enabled === !0, settingsPageInfoEnabled = e.detail.settingsPageInfo !== !1) : streamerModeEnabled = e.detail === !0;
  }), document.addEventListener("rovalra-accurate-continue", (e) => {
    e.detail && (accurateContinueEnabled = e.detail.enabled !== !1, accurateContinueGames = Array.isArray(e.detail.games) ? e.detail.games : []);
  }), document.addEventListener("rovalra-home-layout", (e) => {
    homeLayoutOrder = Array.isArray(e.detail?.order) ? e.detail.order : [], homeLayoutHidden = Array.isArray(e.detail?.hidden) ? e.detail.hidden : [], homeLayoutReady = !0, resolveHomeLayoutReady && (resolveHomeLayoutReady(), resolveHomeLayoutReady = null);
    try {
      sessionStorage.setItem(
        "rovalra_homeLayoutOrder",
        JSON.stringify(homeLayoutOrder)
      ), sessionStorage.setItem(
        "rovalra_homeLayoutHidden",
        JSON.stringify(homeLayoutHidden)
      );
    } catch {
    }
  }), document.addEventListener("rovalra-home-extra-sorts", (e) => {
    homeExtraSorts = Array.isArray(e.detail?.sorts) ? e.detail.sorts : [];
  });
  function waitForHomeLayoutState() {
    return homeLayoutReady ? Promise.resolve() : (homeLayoutReadyPromise || (homeLayoutReadyPromise = new Promise((resolve) => {
      const timeout = setTimeout(resolve, 700);
      resolveHomeLayoutReady = /* @__PURE__ */ __name(() => {
        clearTimeout(timeout), resolve();
      }, "resolveHomeLayoutReady");
    })), homeLayoutReadyPromise);
  }
  __name(waitForHomeLayoutState, "waitForHomeLayoutState");
  function getRequestUrl(url) {
    return typeof url == "string" ? url : url instanceof Request ? url.url : "";
  }
  __name(getRequestUrl, "getRequestUrl");
  function isRobloxAdminGroupMember(data) {
    return data?.components?.Communities?.communityIds?.some(
      (groupId) => Number(groupId) === ROBLOX_ADMIN_GROUP_ID
    );
  }
  __name(isRobloxAdminGroupMember, "isRobloxAdminGroupMember");
  function applyRobloxAdminProfileResponse(data) {
    return robloxGroupFeaturesEnabled && isRobloxAdminGroupMember(data) && data?.components?.UserProfileHeader ? (data.components.UserProfileHeader.isRobloxAdmin = !0, !0) : !1;
  }
  __name(applyRobloxAdminProfileResponse, "applyRobloxAdminProfileResponse");
  function responseWithJson(response, data) {
    const newHeaders = new Headers(response.headers);
    return newHeaders.delete("content-length"), newHeaders.delete("content-encoding"), new Response(JSON.stringify(data), {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders
    });
  }
  __name(responseWithJson, "responseWithJson");
  function isAccountSettingsUiRequest(url) {
    try {
      const parsedUrl = new URL(url, window.location.origin), endpointUrl = new URL(ACCOUNT_SETTINGS_UI_API_URL);
      return parsedUrl.origin === endpointUrl.origin && parsedUrl.pathname === endpointUrl.pathname;
    } catch {
      return !1;
    }
  }
  __name(isAccountSettingsUiRequest, "isAccountSettingsUiRequest");
  function isUserSettingsRequest(url) {
    try {
      const parsedUrl = new URL(url, window.location.origin), endpointUrl = new URL(USER_SETTINGS_API_URL);
      return parsedUrl.origin === endpointUrl.origin && parsedUrl.pathname === endpointUrl.pathname;
    } catch {
      return !1;
    }
  }
  __name(isUserSettingsRequest, "isUserSettingsRequest");
  function dispatchUserSettingsResponse(data) {
    !data || typeof data != "object" || Array.isArray(data) || document.dispatchEvent(
      new CustomEvent("rovalra:user-settings-response", {
        detail: data
      })
    );
  }
  __name(dispatchUserSettingsResponse, "dispatchUserSettingsResponse");
  function applyAccountSettingsUiOverrides(data) {
    return !data || typeof data != "object" || Array.isArray(data) || data.appThemesAccess === "Enabled" ? !1 : (data.appThemesAccess = "Enabled", !0);
  }
  __name(applyAccountSettingsUiOverrides, "applyAccountSettingsUiOverrides");
  function dispatchProfilePlatformResponse(data) {
    data?.components && window.dispatchEvent(
      new CustomEvent("rovalra-profile-platform-response", {
        detail: data
      })
    );
  }
  __name(dispatchProfilePlatformResponse, "dispatchProfilePlatformResponse");
  function getGroupRolesRequestUserId(url) {
    if (typeof url != "string" || !url) return null;
    try {
      const parsedUrl = new URL(url, window.location.origin), pathMatch = parsedUrl.pathname.match(GROUP_ROLES_API_PATH);
      return parsedUrl.hostname !== GROUP_ROLES_API_HOST || !pathMatch || parsedUrl.searchParams.get("includeLocked") !== "true" ? null : pathMatch[1];
    } catch {
      return null;
    }
  }
  __name(getGroupRolesRequestUserId, "getGroupRolesRequestUserId");
  function dispatchGroupRolesResponse(url, data) {
    const userId = getGroupRolesRequestUserId(url);
    userId && document.dispatchEvent(
      new CustomEvent("rovalra-group-roles-response", {
        detail: { userId, data }
      })
    );
  }
  __name(dispatchGroupRolesResponse, "dispatchGroupRolesResponse");
  function getHomeSortKey(sort) {
    return !sort || typeof sort != "object" ? "" : sort.topicId !== void 0 && sort.topicId !== null ? `topicId:${sort.topicId}` : sort.topic ? `topic:${sort.topic}` : "";
  }
  __name(getHomeSortKey, "getHomeSortKey");
  function isFriendCarouselSort(sort) {
    return sort?.topicId === FRIEND_CAROUSEL_TOPIC_ID && sort?.treatmentType === FRIEND_CAROUSEL_TREATMENT_TYPE;
  }
  __name(isFriendCarouselSort, "isFriendCarouselSort");
  function isLikelyGameHomeSort(sort) {
    return !sort || typeof sort != "object" || isFriendCarouselSort(sort) ? !1 : sort.treatmentType === "Carousel" || sort.topicId === 100000003 || sort.numberOfRows !== void 0 && sort.numberOfRows !== null ? !0 : ["Carousel", "GameCarousel", "EventTile"].includes(
      sort.topicLayoutData?.componentType
    );
  }
  __name(isLikelyGameHomeSort, "isLikelyGameHomeSort");
  function getHomeSortGameCount(sort) {
    if (!sort || typeof sort != "object" || isFriendCarouselSort(sort))
      return null;
    if (Array.isArray(sort.games)) return sort.games.length;
    if (!Array.isArray(sort.recommendationList)) return null;
    if (!sort.recommendationList.length)
      return isLikelyGameHomeSort(sort) ? 0 : null;
    const gameRecommendations = sort.recommendationList.filter(
      (item) => item?.contentType === "Game"
    );
    return gameRecommendations.length ? gameRecommendations.length : null;
  }
  __name(getHomeSortGameCount, "getHomeSortGameCount");
  function canAdjustHomeSort(sort) {
    const gameCount = getHomeSortGameCount(sort);
    return gameCount === null || gameCount > 0;
  }
  __name(canAdjustHomeSort, "canAdjustHomeSort");
  function dispatchHomeLayoutCategories(data) {
    if (data?.pageType !== "Home" || !Array.isArray(data.sorts)) return;
    const seenKeys = /* @__PURE__ */ new Set(), categories = data.sorts.filter(canAdjustHomeSort).map((sort) => ({
      key: getHomeSortKey(sort),
      topic: sort?.topic || "Untitled",
      topicId: sort?.topicId ?? null,
      treatmentType: sort?.treatmentType || ""
    })).filter((category) => !category.key || seenKeys.has(category.key) ? !1 : (seenKeys.add(category.key), !0));
    categories.length && document.dispatchEvent(
      new CustomEvent("rovalra-home-layout-categories", {
        detail: { categories }
      })
    );
  }
  __name(dispatchHomeLayoutCategories, "dispatchHomeLayoutCategories");
  function findHomeEventTileIndex(sorts) {
    return sorts.findIndex(
      (sort) => sort?.topicLayoutData?.componentType === "EventTile"
    );
  }
  __name(findHomeEventTileIndex, "findHomeEventTileIndex");
  function addHomeExtraSorts(data) {
    if (data?.pageType !== "Home" || !Array.isArray(data.sorts) || !Array.isArray(homeExtraSorts) || !homeExtraSorts.length)
      return !1;
    const existingKeys = new Set(data.sorts.map(getHomeSortKey));
    let insertionIndex = findHomeEventTileIndex(data.sorts), changed = !1;
    return homeExtraSorts.forEach((sort) => {
      const sortCopy = { ...sort }, key = getHomeSortKey(sortCopy);
      if (!(!key || existingKeys.has(key))) {
        if (Array.isArray(sortCopy.games)) {
          data.contentMetadata || (data.contentMetadata = {}), data.contentMetadata.Game || (data.contentMetadata.Game = {}), Array.isArray(data.games) || (data.games = []);
          const existingGameIds = new Set(
            data.games.map((g) => g.universeId)
          );
          sortCopy.games.forEach((game) => {
            const uId = game.universeId;
            if (!uId) return;
            const uIdStr = String(uId);
            data.contentMetadata.Game[uIdStr] = {
              ...data.contentMetadata.Game[uIdStr] || {},
              ...game
            }, existingGameIds.has(uId) || (data.games.push(game), existingGameIds.add(uId));
          }), delete sortCopy.games;
        }
        insertionIndex === -1 ? data.sorts.push(sortCopy) : (data.sorts.splice(insertionIndex, 0, sortCopy), insertionIndex += 1), existingKeys.add(key), changed = !0;
      }
    }), changed;
  }
  __name(addHomeExtraSorts, "addHomeExtraSorts");
  function getEffectiveHomeLayoutOrder(sorts) {
    const order = homeLayoutOrder.map(String), orderedKeys = new Set(order), sortKeys = new Set(sorts.map(getHomeSortKey)), missingExtraKeys = homeExtraSorts.map(getHomeSortKey).filter((key) => key && sortKeys.has(key) && !orderedKeys.has(key));
    if (!missingExtraKeys.length) return order;
    const eventTileIndex = findHomeEventTileIndex(sorts), eventTileKey = eventTileIndex === -1 ? "" : getHomeSortKey(sorts[eventTileIndex]), insertionIndex = eventTileKey ? order.indexOf(eventTileKey) : -1;
    return insertionIndex === -1 ? [...order, ...missingExtraKeys] : [
      ...order.slice(0, insertionIndex),
      ...missingExtraKeys,
      ...order.slice(insertionIndex)
    ];
  }
  __name(getEffectiveHomeLayoutOrder, "getEffectiveHomeLayoutOrder");
  function reorderHomeSorts(data) {
    if (!Array.isArray(homeLayoutOrder) || !homeLayoutOrder.length || data?.pageType !== "Home" || !Array.isArray(data.sorts))
      return !1;
    const effectiveOrder = getEffectiveHomeLayoutOrder(data.sorts), orderMap = new Map(
      effectiveOrder.map((key, index) => [String(key), index])
    ), originalIndexMap = new Map(
      data.sorts.map((sort, index) => [sort, index])
    );
    return data.sorts.sort((a, b) => {
      const aIndex = orderMap.get(getHomeSortKey(a)), bIndex = orderMap.get(getHomeSortKey(b)), aHasOrder = aIndex !== void 0, bHasOrder = bIndex !== void 0;
      return aHasOrder && bHasOrder ? aIndex - bIndex : aHasOrder ? -1 : bHasOrder ? 1 : originalIndexMap.get(a) - originalIndexMap.get(b);
    }), !0;
  }
  __name(reorderHomeSorts, "reorderHomeSorts");
  function applyAccurateContinue(data) {
    if (!accurateContinueEnabled || !accurateContinueGames.length || data?.pageType !== "Home" || !Array.isArray(data.sorts))
      return !1;
    const continueSort = data.sorts.find((s) => s.topicId === 100000003);
    if (!continueSort) return !1;
    continueSort.recommendationList = accurateContinueGames.map((game) => ({
      contentType: "Game",
      contentId: game.universeId,
      contentStringId: "",
      contentMetadata: {},
      analyticsData: {}
    })), data.contentMetadata || (data.contentMetadata = {}), data.contentMetadata.Game || (data.contentMetadata.Game = {}), Array.isArray(data.games) || (data.games = []);
    const existingGameIds = new Set(data.games.map((g) => g.universeId));
    return accurateContinueGames.forEach((game) => {
      const uId = game.universeId;
      if (!uId) return;
      const uIdStr = String(uId);
      data.contentMetadata.Game[uIdStr] = {
        ...data.contentMetadata.Game[uIdStr] || {},
        ...game,
        universeId: uId
      }, existingGameIds.has(uId) || (data.games.push(game), existingGameIds.add(uId));
    }), continueSort.treatmentType || (continueSort.treatmentType = "Carousel"), continueSort.numberOfRows = 1, !0;
  }
  __name(applyAccurateContinue, "applyAccurateContinue");
  function hideHomeSorts(data) {
    if (!Array.isArray(homeLayoutHidden) || !homeLayoutHidden.length || data?.pageType !== "Home" || !Array.isArray(data.sorts))
      return !1;
    const hiddenKeys = new Set(homeLayoutHidden.map(String)), previousLength = data.sorts.length;
    return data.sorts = data.sorts.filter(
      (sort) => isFriendCarouselSort(sort) || !hiddenKeys.has(getHomeSortKey(sort))
    ), data.sorts.length !== previousLength;
  }
  __name(hideHomeSorts, "hideHomeSorts");
  async function applyHomeLayoutToFetchResponse(url, response) {
    if (!url.includes(OMNI_RECOMMENDATION_API_URL))
      return response;
    try {
      await waitForHomeLayoutState();
      const data = await response.clone().json(), addedExtraSorts = addHomeExtraSorts(data), accurateContinue = applyAccurateContinue(data);
      dispatchHomeLayoutCategories(data);
      const hiddenSorts = hideHomeSorts(data), reorderedSorts = reorderHomeSorts(data);
      if (!addedExtraSorts && !hiddenSorts && !reorderedSorts && !accurateContinue)
        return response;
      const newHeaders = new Headers(response.headers);
      return newHeaders.delete("content-length"), new Response(JSON.stringify(data), {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    } catch {
      return response;
    }
  }
  __name(applyHomeLayoutToFetchResponse, "applyHomeLayoutToFetchResponse");
  const originalFetch = window.fetch;
  window.fetch = async function(...args) {
    const [url] = args, requestUrl = getRequestUrl(url);
    args = await rewriteThumbnailFetchArgs(args, requestUrl);
    let response = await originalFetch(...args);
    if (freeRobloxPlusThemesEnabled && isAccountSettingsUiRequest(requestUrl))
      try {
        const data = await response.clone().json();
        applyAccountSettingsUiOverrides(data) && (response = responseWithJson(response, data));
      } catch {
      }
    if (streamerModeEnabled && settingsPageInfoEnabled && typeof requestUrl == "string" && [
      "/my/settings/json",
      "accountinformation.roblox.com/v1/phone",
      "users.roblox.com/v1/birthdate",
      "apis.roblox.com/age-verification-service/v1/age-verification/verified-age",
      "accountsettings.roblox.com/v1/account/settings/account-country",
      "apis.roblox.com/user-settings-api/v1/account-insights/age-group",
      "apis.roblox.com/token-metadata-service/v1/sessions"
    ].some((path) => requestUrl.includes(path)) && location.hostname != "create.roblox.com")
      try {
        const data = await response.clone().json();
        requestUrl.includes("/my/settings/json") && (data.UserEmail = "RoValra Streamer Mode Enabled", data.UserEmailVerified = !0), requestUrl.includes("v1/phone") && (data.phone = data.prefix = data.countryCode = "RoValra Streamer Mode Enabled"), requestUrl.includes("v1/birthdate") && (data.birthMonth = data.birthDay = data.birthYear = 0), requestUrl.includes("verified-age") && (data.verifiedAge = 0, data.isSeventeenPlus = !1), requestUrl.includes("account-country") && data.value && (data.value.countryName = data.value.localizedName = "RoValra Streamer Mode Enabled", data.value.countryId = 1), requestUrl.includes("age-group") && (data.ageGroupTranslationKey = "RoValra Streamer Mode Enabled"), requestUrl.includes("sessions") && data.sessions && data.sessions.forEach((s) => {
          s.location && (s.location.city = s.location.subdivision = "", s.location.subdivision = "", s.location.country = 'To view your sessions please disable "RoValra streamer mode"'), s.agent && (s.agent.os = "RoValra streamer mode enabled", s.agent.type = "App"), s.lastAccessedIp = "Hidden", s.lastAccessedTimestampEpochMilliseconds = "0";
        });
        const newHeaders = new Headers(response.headers);
        newHeaders.delete("content-length"), response = new Response(JSON.stringify(data), {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        });
      } catch {
      }
    if (response = await applyHomeLayoutToFetchResponse(requestUrl, response), requestUrl.includes(PROFILE_API_URL))
      try {
        const data = await response.clone().json(), changed = applyRobloxAdminProfileResponse(data);
        dispatchProfilePlatformResponse(data), changed && (response = responseWithJson(response, data));
      } catch {
      }
    return typeof requestUrl == "string" && (isUserSettingsRequest(requestUrl) && response.clone().json().then(dispatchUserSettingsResponse).catch(() => {
    }), requestUrl.includes(CATALOG_API_URL) && response.clone().json().then(
      (d) => window.dispatchEvent(
        new CustomEvent("rovalra-catalog-details", {
          detail: d
        })
      )
    ).catch(() => {
    }), requestUrl.includes(CATALOG_API_URL) && response.clone().json().then(
      (d) => document.dispatchEvent(
        new CustomEvent(
          "rovalra-catalog-details-response",
          { detail: d }
        )
      )
    ).catch(() => {
    }), requestUrl.includes(CLIENT_STATUS_API_URL) && response.clone().json().then(
      (d) => document.dispatchEvent(
        new CustomEvent("rovalra-client-status-response", {
          detail: d
        })
      )
    ).catch(() => {
    }), requestUrl.includes(GAME_LAUNCH_SUCCESS_URL) && requestUrl.includes("GameLaunchSuccessWeb_Win32") && document.dispatchEvent(
      new CustomEvent("rovalra-game-launch-success", {
        detail: { url: requestUrl }
      })
    ), requestUrl.includes(GAME_SERVERS_API_URL) && /\/v\d+\/games\/\d+\/servers\//.test(requestUrl) && response.clone().json().then(
      (d) => document.dispatchEvent(
        new CustomEvent("rovalra-game-servers-response", {
          detail: { url: requestUrl, data: d }
        })
      )
    ).catch(() => {
    }), requestUrl.includes(GAMES_ROBLOX_API) && requestUrl.includes("/media") && response.clone().json().then(
      (d) => document.dispatchEvent(
        new CustomEvent("rovalra-game-media-response", {
          detail: d
        })
      )
    ).catch(() => {
    }), requestUrl.includes(TRADES_API_URL) && requestUrl.includes("/tradableitems") && response.clone().json().then(
      (d) => document.dispatchEvent(
        new CustomEvent("rovalra-tradable-items-response", {
          detail: d
        })
      )
    ).catch(() => {
    }), requestUrl.includes(TRADES_LIST_API_URL) && response.clone().json().then(
      (d) => document.dispatchEvent(
        new CustomEvent("rovalra-trades-list-response", {
          detail: d
        })
      )
    ).catch(() => {
    }), requestUrl.includes(TRADE_DETAILS_API_URL) && response.clone().json().then(
      (d) => document.dispatchEvent(
        new CustomEvent("rovalra-trade-details-response", {
          detail: d
        })
      )
    ).catch(() => {
    }), getGroupRolesRequestUserId(requestUrl) && response.clone().json().then((d) => dispatchGroupRolesResponse(requestUrl, d)).catch(() => {
    })), response;
  };
  const originalXhrOpen = XMLHttpRequest.prototype.open, originalXhrSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    return typeof url == "string" && (disableThumbnailBackground || disableThumbnailProfileFrame) && (url = rewriteThumbnailRequestUrl(url)), this._rovalra_url = url, this._rovalra_method = method, streamerModeEnabled && typeof url == "string" && settingsPageInfoEnabled && location.hostname != "create.roblox.com" && (url.includes("/my/settings/json") && (this._rovalra_spoof_settings = !0), url.includes("/v1/emails") && (this._rovalra_email_settings = !0), url.includes("v1/phone") && (this._rovalra_spoof_phone = !0), url.includes("v1/birthdate") && (this._rovalra_spoof_birthdate = !0), url.includes("verified-age") && (this._rovalra_spoof_age = !0), url.includes("account-country") && (this._rovalra_spoof_country = !0), url.includes("age-group") && (this._rovalra_spoof_age_group = !0), url.includes("sessions") && (this._rovalra_spoof_sessions = !0)), typeof url == "string" && url.includes(OMNI_RECOMMENDATION_API_URL) && (this._rovalra_home_layout = !0), typeof url == "string" && url.includes(PROFILE_API_URL) && (this._rovalra_profile_api = !0), typeof url == "string" && isAccountSettingsUiRequest(url) && (this._rovalra_account_settings_ui = !0), originalXhrOpen.apply(this, [method, url, ...rest]);
  }, XMLHttpRequest.prototype.send = function(...args) {
    const xhr = this;
    if ((disableThumbnailBackground || disableThumbnailProfileFrame) && isThumbnailsApiRequest(xhr._rovalra_url) && (args[0] = rewriteThumbnailRequestBody(args[0])), (xhr._rovalra_spoof_settings || xhr._rovalra_spoof_phone || xhr._rovalra_spoof_birthdate || xhr._rovalra_spoof_age || xhr._rovalra_spoof_country || xhr._rovalra_spoof_age_group || xhr._rovalra_spoof_sessions || xhr._rovalra_home_layout || xhr._rovalra_profile_api || xhr._rovalra_account_settings_ui) && (Object.defineProperty(xhr, "responseText", {
      configurable: !0,
      get: /* @__PURE__ */ __name(function() {
        if (xhr._rovalra_cached_response)
          return xhr._rovalra_cached_response;
        const original = Object.getOwnPropertyDescriptor(
          XMLHttpRequest.prototype,
          "responseText"
        ).get.call(this);
        if (this.readyState !== 4) return original;
        try {
          const data = JSON.parse(original);
          return xhr._rovalra_home_layout && (addHomeExtraSorts(data), dispatchHomeLayoutCategories(data), hideHomeSorts(data), applyAccurateContinue(data), reorderHomeSorts(data)), xhr._rovalra_account_settings_ui && freeRobloxPlusThemesEnabled && applyAccountSettingsUiOverrides(data), xhr._rovalra_profile_api && applyRobloxAdminProfileResponse(data), xhr._rovalra_spoof_settings && (data.UserEmail = "RoValra Streamer Mode Enabled", data.UserEmailVerified = !0, data.PreviousUserNames = "RoValra Streamer Mode Enabled", data.UserEmailMasked = !1), xhr._rovalra_email_settings && (data.verifiedEmail = "RoValra Streamer Mode Enabled"), xhr._rovalra_spoof_phone && (data.countryCode = data.prefix = data.phone = "RoValra Streamer Mode Enabled"), xhr._rovalra_spoof_birthdate && (data.birthMonth = data.birthDay = data.birthYear = 0), xhr._rovalra_spoof_age && (data.isVerified = !0, data.verifiedAge = 0, data.isSeventeenPlus = !1), xhr._rovalra_spoof_country && data.value && (data.value.countryName = data.value.localizedName = "RoValra Streamer Mode Enabled", data.value.countryId = 1), xhr._rovalra_spoof_age_group && (data.ageGroupTranslationKey = "RoValra Streamer Mode Enabled"), xhr._rovalra_spoof_sessions && data.sessions && data.sessions.forEach((s) => {
            s.location && (s.location.city = s.location.subdivision = "", s.location.country = 'To view your sessions please disable "RoValra streamer mode"'), s.agent && (s.agent.os = "RoValra streamer mode enabled", s.agent.type = "App"), s.lastAccessedIp = "Hidden", s.lastAccessedTimestampEpochMilliseconds = "0";
          }), xhr._rovalra_cached_response = JSON.stringify(data), xhr._rovalra_cached_response;
        } catch {
          return original;
        }
      }, "get")
    }), Object.defineProperty(xhr, "response", {
      configurable: !0,
      get: /* @__PURE__ */ __name(function() {
        if (this.responseType === "json")
          try {
            return JSON.parse(this.responseText);
          } catch {
            return Object.getOwnPropertyDescriptor(
              XMLHttpRequest.prototype,
              "response"
            ).get.call(this);
          }
        return this.responseText;
      }, "get")
    })), xhr.addEventListener("load", function() {
      if (typeof xhr._rovalra_url == "string") {
        const triggerEvent = /* @__PURE__ */ __name((eventName, detail) => document.dispatchEvent(
          new CustomEvent(eventName, { detail })
        ), "triggerEvent");
        try {
          const url = xhr._rovalra_url;
          url.includes(CATALOG_API_URL) && window.dispatchEvent(
            new CustomEvent("rovalra-catalog-details", {
              detail: JSON.parse(xhr.responseText)
            })
          ), url.includes(CATALOG_API_URL) && triggerEvent(
            "rovalra-catalog-details-response",
            JSON.parse(xhr.responseText)
          ), url.includes(CLIENT_STATUS_API_URL) && triggerEvent(
            "rovalra-client-status-response",
            JSON.parse(xhr.responseText)
          ), url.includes(GAME_SERVERS_API_URL) && /\/v\d+\/games\/\d+\/servers\//.test(url) && triggerEvent("rovalra-game-servers-response", {
            url,
            data: JSON.parse(xhr.responseText)
          }), url.includes(GAMES_ROBLOX_API) && url.includes("/media") && triggerEvent(
            "rovalra-game-media-response",
            JSON.parse(xhr.responseText)
          ), url.includes(TRADES_API_URL) && url.includes("/tradableitems") && triggerEvent(
            "rovalra-tradable-items-response",
            JSON.parse(xhr.responseText)
          ), url.includes(TRADES_LIST_API_URL) && triggerEvent(
            "rovalra-trades-list-response",
            JSON.parse(xhr.responseText)
          ), url.includes(TRADE_DETAILS_API_URL) && triggerEvent(
            "rovalra-trade-details-response",
            JSON.parse(xhr.responseText)
          ), getGroupRolesRequestUserId(url) && dispatchGroupRolesResponse(
            url,
            JSON.parse(xhr.responseText)
          ), url.includes(PROFILE_API_URL) && dispatchProfilePlatformResponse(
            JSON.parse(xhr.responseText)
          ), isUserSettingsRequest(url) && dispatchUserSettingsResponse(
            JSON.parse(xhr.responseText)
          );
        } catch {
        }
      }
    }), xhr._rovalra_home_layout && !homeLayoutReady) {
      waitForHomeLayoutState().then(() => {
        originalXhrSend.apply(xhr, args);
      });
      return;
    }
    return originalXhrSend.apply(this, args);
  };
  let multiAccessoryEnabled = !1;
  document.addEventListener("rovalra-multi-equip", (e) => {
    e.detail && (typeof e.detail.enabled == "boolean" && (window.rovalraMultiEquipEnabled = e.detail.enabled, multiAccessoryEnabled = e.detail.enabled), Array.isArray(e.detail.accessories) && (ASSET_TYPE_ACCESSORIES = e.detail.accessories), Array.isArray(e.detail.layered) && (ASSET_TYPE_LAYERED = e.detail.layered));
  });
  const patchAvatarService = /* @__PURE__ */ __name((service) => {
    if (!service || service.__rovalra_patched) return;
    service.__rovalra_patched = !0;
    const originalGetLimit = service.getAdvancedAccessoryLimit;
    service.getAdvancedAccessoryLimit = function(assetTypeId, ...args) {
      if (multiAccessoryEnabled) {
        const id = Number(assetTypeId);
        if (ASSET_TYPE_ACCESSORIES.includes(id) || ASSET_TYPE_LAYERED.includes(id))
          return 100;
      }
      return originalGetLimit ? originalGetLimit.call(this, assetTypeId, ...args) : 10;
    };
    const originalAddAsset = service.addAssetToAvatar;
    service.addAssetToAvatar = function(asset, currentAssets) {
      if (!multiAccessoryEnabled)
        return originalAddAsset.apply(this, arguments);
      const newAssetList = originalAddAsset.apply(this, arguments).filter((item) => {
        const typeId = item?.assetType?.id;
        return !ASSET_TYPE_ACCESSORIES.includes(typeId) && !ASSET_TYPE_LAYERED.includes(typeId);
      }), potentialAssets = [asset, ...currentAssets], uniqueMultiEquipAssets = [], seenIds = /* @__PURE__ */ new Set();
      for (const item of potentialAssets)
        if (item && item.id && !seenIds.has(item.id)) {
          const typeId = item?.assetType?.id;
          (ASSET_TYPE_ACCESSORIES.includes(typeId) || ASSET_TYPE_LAYERED.includes(typeId)) && (uniqueMultiEquipAssets.push(item), seenIds.add(item.id));
        }
      const counts = { accessory: 0, layered: 0 }, limits = { accessory: 10, layered: 10 };
      for (const item of uniqueMultiEquipAssets) {
        const typeId = item?.assetType?.id;
        ASSET_TYPE_ACCESSORIES.includes(typeId) ? counts.accessory < limits.accessory && (newAssetList.push(item), counts.accessory++) : ASSET_TYPE_LAYERED.includes(typeId) && counts.layered < limits.layered && (newAssetList.push(item), counts.layered++);
      }
      return newAssetList;
    }, console.log("RoValra: Multi-Accessory patch applied.");
  }, "patchAvatarService");
  (/* @__PURE__ */ __name(() => {
    let robloxObj = window.Roblox;
    const defineServiceProperty = /* @__PURE__ */ __name((obj) => {
      let serviceObj = obj.AvatarAccoutrementService;
      serviceObj && patchAvatarService(serviceObj), Object.defineProperty(obj, "AvatarAccoutrementService", {
        configurable: !0,
        enumerable: !0,
        get: /* @__PURE__ */ __name(() => serviceObj, "get"),
        set: /* @__PURE__ */ __name((val) => {
          serviceObj = val, patchAvatarService(val);
        }, "set")
      });
    }, "defineServiceProperty");
    robloxObj ? defineServiceProperty(robloxObj) : Object.defineProperty(window, "Roblox", {
      configurable: !0,
      enumerable: !0,
      get: /* @__PURE__ */ __name(() => robloxObj, "get"),
      set: /* @__PURE__ */ __name((val) => {
        robloxObj = val, val && typeof val == "object" && defineServiceProperty(val);
      }, "set")
    });
    const customEquipAsset = /* @__PURE__ */ __name((...args) => {
      const [assetToAdd, assetArr] = args;
      let accessoryCount = 0, layeredCount = 0;
      const assetToAddIsAccessory = AccessoryAssetTypes.includes(assetToAdd.assetType.id), assetToAddIsLayered = LayeredAssetTypes.includes(assetToAdd.assetType.id), newAssetArr = [];
      for (const asset of assetArr.toReversed()) {
        let canAdd = !0;
        AccessoryAssetTypes.includes(asset.assetType.id) && (accessoryCount++, accessoryCount >= 10 && assetToAddIsAccessory && (canAdd = !1)), LayeredAssetTypes.includes(asset.assetType.id) && (layeredCount++, layeredCount >= 10 && assetToAddIsLayered && (canAdd = !1)), !assetToAddIsAccessory && !assetToAddIsLayered && assetToAdd.assetType.id === asset.assetType.id && (canAdd = !1), canAdd && newAssetArr.push(asset);
      }
      return newAssetArr.reverse(), newAssetArr.push(assetToAdd), newAssetArr;
    }, "customEquipAsset"), originalDefineProperty = Object.defineProperty;
    Object.defineProperty = function(obj, prop, descriptor) {
      return prop === "__esModule" && setTimeout(() => {
        if (Object.keys(obj).includes("addAssetToAvatar")) {
          const originalGetter = Object.getOwnPropertyDescriptor(obj, "addAssetToAvatar").get, originalAddAssetToAvatar = originalGetter();
          Object.defineProperty(obj, "addAssetToAvatar", {
            get() {
              return (...args) => {
                const [asset] = args, isAccessory = AccessoryAssetTypes.includes(asset.assetType.id), isLayered = LayeredAssetTypes.includes(asset.assetType.id), needsHijack = isAccessory || isLayered;
                return window.rovalraMultiEquipEnabled && needsHijack ? customEquipAsset(...args) : originalAddAssetToAvatar(...args);
              };
            },
            configurable: !0
          });
        }
      }, 1), prop === "addAssetToAvatar" && (descriptor.configurable = !0), originalDefineProperty.call(Object, obj, prop, descriptor);
    };
  }, "initializeHooks"))(), console.log(
    "RoValra: Privacy Spoofing and Multi-Accessory loaded successfully."
  );
})();
