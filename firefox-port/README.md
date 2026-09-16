# RoValra: unofficial Firefox Developer Edition port

The port targets Firefox 142 or newer and is now distributed as a permanent,
unsigned extension for **Developer Edition with signature enforcement disabled**.
The current version is 2.6.9.5: upstream 2.6.9 plus adapter revision 5.

See [maintenance release notes](MAINTENANCE-2.6.9.5.md) for the font, dependency,
and HTML-sanitization fixes and upload instructions.

## Installation

In Developer Edition, set `xpinstall.signatures.required` to `false` in
`about:config`. Open `about:addons` → gear → **Install Add-on From File**, and
select `build/rovalra-firefox-2.6.9.5-unsigned.xpi`. Accept the permissions and
refresh Roblox. Open Firefox normally on subsequent days; the add-on remains
installed and retains its settings.

This preference applies to all extensions in the profile. No browser debugging
listener is needed for normal use. The previous temporary-loading launcher, its
cache, and its signing-service configuration have been removed.

If moving from a temporary installation, export important RoValra settings first.
The configured ID is `rovalra-firefox@endermert2`; keep it unchanged. An older
snapshot using `rovalra-firefox-port@local.invalid` is a different extension and
will not automatically share settings. Import the exported settings after installing
this package. Avoid running two copies of RoValra together.

The temporary-addon preferences `extensions.webextensions.keepStorageOnUninstall`
and `extensions.webextensions.keepUuidOnUninstall` are unnecessary for a permanent
installation. If you enabled them solely for this port, reset them after preserving
any settings you need. No preferences in your actual profile were changed here.

## Automatic updates

See [the detailed update setup](AUTOMATIC-UPDATES.md). The supplied GitHub workflow
checks upstream twice daily, adapts a release, validates and tests it, and publishes
an unsigned XPI plus `updates.json`. Firefox uses its normal add-on updater to
retrieve it. No Mozilla signing service, local scheduled task, or PC launcher is
involved. Upload the repaired source and run the hosted workflow to restore delivery.

`config.json` keeps upstream and delivery separate:

- `upstreamRepository`: `NotValra/RoValra` — the source; do not replace it with your repo.
- `releaseRepository`: `endermert2/rovalra-firefox` — your public downloads.
- `addonId`: `rovalra-firefox@endermert2` — the permanent identity; do not change it.
- `adapterRevision`: increment this when changing the port for the same upstream release.

Future upstream changes may require adapter maintenance. Validation rejects changed
patch targets and unfamiliar APIs, but cannot prove every feature still works with
every Roblox website change. A failed GitHub build publishes nothing; the installed
version remains available.

## Building locally

Requires Node.js 22 or newer. In this folder:

```powershell
npm.cmd ci
npm.cmd run update
npm.cmd test
npm.cmd run verify
```

`Update-Firefox.ps1` also downloads, adapts, and validates the latest stable release.
To rebuild the included release offline after installing tools: `npm.cmd run build`.
The resulting XPI is under `build/`; install it through `about:addons` over the
existing extension. Keep the same add-on ID to preserve settings. The top-level
workspace files are a snapshot; future generated packages are in `build/`.

`node publish-manifest.mjs` creates `build/updates.json` from the exact XPI and its
SHA-256 build report. `source-package.mjs` packages corresponding upstream source
and the adapter for distribution under the existing license. It requires a prior
`npm run update` to establish the exact downloaded release.

## September 2026 updater repair

RoValra 2.6.9 added `chrome.storage.onChanged.removeListener` and changed
launcher functions to run outfit preparation before joining. The old contracts
rejected that release, so scheduled builds stopped before publishing. The public
feed was still offering 2.6.8.2 when investigated on September 16.

Version **2.6.9.4** reviewed those contracts, preserved the new outfit hooks and
ports the new web-chat launcher through packaged code. The original 2.6.9 release
is now the reproducible `upstream/` baseline. Unknown APIs and changed patch targets
still fail validation. The changelog is fetched independently from RoValra’s server
and does not show which extension version is installed; use `about:addons` for that.

See [MAINTENANCE-2.6.9.5.md](MAINTENANCE-2.6.9.5.md) for current deployment and verification.

## Firefox compatibility changes

Version 2.6.8.3 fixed API authentication/sync requests blocked by Roblox's page CSP
in Firefox. Fetches to `apis.rovalra.com` and `www.rovalra.com` now use an extension
background transport with explicit host permissions. Other fetches remain on-page.
The transport restricts hosts and methods, omits cookies, rejects redirects, bounds
message sizes, and retains bearer authorization. Callback URLs are omitted from
the port's API error messages so one-time OAuth codes are not printed there.
Firefox may require approval for the added RoValra host access when updating.
Refresh Roblox after installing and save the pronouns again to retry authentication.

- Kept Manifest V3 and document-start MAIN-world interceptors; replaced the
  Chromium service worker with Firefox background scripts.
- Cloned object event payloads across Firefox's page/extension boundary.
- Shared session storage and its notifications through the background.
- Replaced executable string injection with packaged Roblox launcher functions.
- Routed the packaged globe script through Firefox's scripting API and moved the
  avatar mesh worker to the background with a message bridge.
- Replaced an unsupported data-URL redirect with the same packaged JSON.
- Included cookies in background Roblox API requests and added the required
  client-asset host, clipboard, and context-menu permissions.
- Minified the existing bundle using esbuild to meet Mozilla's individual-file limit.

The runtime and patch files are necessary compatibility code; their game-launching
functions are unrelated to the removed Firefox browser launcher.

## Verification

`npm test` covers archive safety, patch contracts, manifest conversion, Roblox
launcher argument preservation, unsigned update-manifest construction, outfit-hook ordering and failure fallback,
storage-listener removal, and adaptation of the reviewed 2.6.9 input.
`npm run verify` runs Mozilla's local linter; this does not contact its signing
service. Raw HTML warnings remain in `build/lint.json`. Each warning is now checked against
sanitizer use in `build/html-review.json`; unguarded warnings and all errors fail.

Browser tests require Developer Edition, OpenSSL (provided by Git for Windows),
and geckodriver. Download the driver if needed, then run:

```powershell
node --input-type=module -e 'import {download} from "geckodriver"; await download(undefined,"build/tools");'
npm.cmd run test:firefox
npm.cmd run test:install
```

On Windows, tests default to `C:/Program Files/Firefox Developer Edition/firefox.exe`.
Set `FIREFOX_BINARY` to override this location. Tests use disposable profiles with
signature enforcement disabled; your real Firefox profile is never opened or edited.

The compatibility fixture tests API promises/callbacks, rules, MAIN-world injection,
object events, session storage, seven Roblox launcher calls, and a real mesh-worker
calculation. The permanent-install test loads the real port with a storage probe,
restarts without reinstalling, asks Firefox to fetch an update manifest and XPI
from a loopback server, and restarts again.
It checks update download delivery, continued installation, and preserved settings.
Only its disposable profile allows HTTP update manifests for the loopback fixture.
Production update URLs remain HTTPS. Public GitHub hosting is checked separately.

The CSP regression fixture blocks a direct request to a second host, then verifies
a JSON settings POST through the background transport, its authorization header,
absence of cookies, response cloning, and rejection of an unrelated destination.
It does not submit real pronouns or perform account authentication on your behalf.

Authenticated Roblox features still need checking with your account: server lists,
joins, private servers, follow-player, Studio, avatars, outfits, and the features you
use regularly. Tests do not prove third-party availability or every RoValra feature.

See `NOTICE.md` and `LICENSE` for attribution and licensing.

