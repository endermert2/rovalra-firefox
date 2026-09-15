/*!
 * rovalra v2.6.9
 * License: GPL-3.0
 * Repository: https://github.com/NotValra/RoValra
 * This extension is provided AS-IS without warranty.
 */
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: !0 });
const wallpaper = document.getElementById("wallpaper"), VALID_SIZES = /* @__PURE__ */ new Set(["cover", "contain", "auto"]), VALID_REPEATS = /* @__PURE__ */ new Set(["no-repeat", "repeat", "repeat-x", "repeat-y"]), VALID_POSITIONS = /* @__PURE__ */ new Set([
  "center",
  "top",
  "bottom",
  "left",
  "right",
  "top left",
  "top right",
  "bottom left",
  "bottom right"
]);
let currentSource = "";
function isRobloxOrigin(origin) {
  try {
    const { hostname, protocol } = new URL(origin);
    return protocol === "https:" && (hostname === "roblox.com" || hostname.endsWith(".roblox.com"));
  } catch {
    return !1;
  }
}
__name(isRobloxOrigin, "isRobloxOrigin");
function normalizeSource(source) {
  if (typeof source != "string") return "";
  try {
    const url = new URL(source.trim());
    return url.protocol === "https:" ? url.href : "";
  } catch {
    return "";
  }
}
__name(normalizeSource, "normalizeSource");
function normalizeSize(size) {
  return VALID_SIZES.has(size) || /^\d+%$/.test(size) ? size : "cover";
}
__name(normalizeSize, "normalizeSize"), window.addEventListener("message", (event) => {
  if (!isRobloxOrigin(event.origin)) return;
  const data = event.data;
  if (!data || data.type !== "rovalra:set-background") return;
  const source = normalizeSource(data.source);
  if (!source) {
    currentSource && (currentSource = "", wallpaper.style.backgroundImage = "");
    return;
  }
  const size = normalizeSize(String(data.size || "cover")), position = VALID_POSITIONS.has(data.position) ? data.position : "center", repeat = VALID_REPEATS.has(data.repeat) ? data.repeat : "no-repeat", attachment = data.attachment === "scroll" || data.attachment === "fixed" ? data.attachment : "fixed";
  source !== currentSource && (currentSource = source, wallpaper.style.backgroundImage = `url(${JSON.stringify(source)})`), wallpaper.style.backgroundSize = size, wallpaper.style.backgroundPosition = position, wallpaper.style.backgroundRepeat = repeat, wallpaper.style.backgroundAttachment = attachment;
});
