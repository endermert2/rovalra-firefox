# RoValra 2.6.15 updater repair

The official 2.6.15 release changed server-row handling. The Firefox adapter's
reviewed-function check correctly stopped the GitHub workflow at `enhanceServer`.
This package reviews those changes and updates the adapter and contracts together.
The contract checks and dependency audit remain enabled.

## What changed

- Updated the exact upstream release input and metadata to 2.6.15. Its archive
  SHA-256 matches GitHub's published digest:
  `14a50b84c3dd274ca45ef5091252272149d84f95c0112f861353aaae2859da98`.
- Reviewed changes to `enhanceServer`, `fetchServerUptime` and
  `fetchAndDisplayRegion`. Preserved upstream's shared server-row lookup, network
  information cache, reused-card reset and public instance identity check.
- Adapted the missing-metadata and unsuccessful-join fallbacks to the new shared
  row renderer. An unsuccessful probe continues to show availability as
  unconfirmed rather than removing a listed server or falsely marking it full.
  Explicit full-server responses still use upstream's full-indicator setting.
- Added a reviewed contract for `displayServerStatus` so cached unconfirmed
  statuses are rendered again when a card is enhanced.
- Updated browser fixtures for upstream's helper names and added regression
  coverage for multiple matching rows, mismatched public instance responses,
  unknown availability and cached status rendering.
- Increased the adapter revision to 11. The resulting Firefox version is
  **2.6.15.11**, newer than 2.6.14.110. The add-on ID and update URL stay the same.
- Retained the SVG icon/globe fixes and the source-map-js 1.2.2 dependency repair.

## Upload to GitHub

1. Extract `build/rovalra-firefox-upload-2.6.15.11.zip`.
2. Copy its contents into the top level of your local GitHub clone, replacing the
   matching files. Include `.github`, `.gitignore` and the complete `firefox-port`
   source tree. Remove obsolete Chinese-locale paths listed below if your copy
   operation leaves them behind.
3. Commit and push the changes to the branch used by Actions.
4. Start a **new workflow run** from Actions → Adapt and publish RoValra for
   Developer Edition → Run workflow. Rerunning the old failed job uses its old
   source commit.
5. The run should adapt upstream 2.6.15, pass audit and validation, and publish
   `firefox-v2.6.15.11` with its XPI and update manifest. If that exact version
   already exists, the workflow skips publication normally.

Upstream renamed the old locale files; remove these obsolete tracked files:

- `firefox-port/upstream/_locales/zh-CHS/messages.json`
- `firefox-port/upstream/_locales/zh-CHT/messages.json`
- `firefox-port/upstream/public/Assets/locales/zh-CHS.json`
- `firefox-port/upstream/public/Assets/locales/zh-CHT.json`

No repository variables or secrets need changing. Once the new release publishes,
Firefox can receive it through the existing update feed. For immediate local
installation, install `build/rovalra-firefox-2.6.15.11-unsigned.xpi` over the existing
add-on in Developer Edition with signature enforcement disabled, then refresh
Roblox tabs.

Future upstream changes to reviewed functions can still require another adapter
review. `build/VALIDATION.txt` records the local checks for this repair; browser
fixtures do not cover every authenticated Roblox feature.
