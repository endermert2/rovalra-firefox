# RoValra Firefox updater repair — September 16, 2026

## What failed

The official release is **2.6.9** (September 14). The public Firefox feed still
offered **2.6.8.2** when checked, while this workspace previously had **2.6.8.3**.
The scheduled workflow was running, but its update step failed before publishing.

The local failure was `New upstream API chrome.storage.onChanged.removeListener`.
That operation already existed in the Firefox storage bridge, but was missing
from the reviewed API list. Further inspection found changed launcher functions
and a new web-chat launcher. The changed launchers prepare per-game outfits
before joining; accepting new function hashes without adapting their behavior
would have lost those features.

The changelog comes from RoValra's web service independently of the installed
package. Seeing new release notes does not mean Firefox installed the release.

Evidence:

- [Official 2.6.9 release](https://github.com/NotValra/RoValra/releases/tag/v2.6.9)
- [Failed scheduled build](https://github.com/endermert2/rovalra-firefox/actions/runs/34999330564)
- [Public Firefox update feed](https://github.com/endermert2/rovalra-firefox/releases/latest/download/updates.json)

## What changed

- Reviewed and accepted the new storage API and launcher contracts.
- Preserved outfit preparation before game, private-server, multiplayer, and
  follow-player launches, including continuing to launch if preparation fails.
- Routed web chat through the packaged Firefox launcher and Roblox DeepLinkService.
- Updated the reproducible upstream input to 2.6.9 and adapter revision to 4,
  producing **2.6.9.4** with the same add-on ID and update address.
- Added regression tests and changed the permanent-install browser test to fetch
  an update manifest and XPI through Firefox's updater, then verify settings and
  installation survive restart. The extra version used by this test is only a
  disposable fixture; the release package remains 2.6.9.4.

## Upload this repair once

1. Extract `rovalra-firefox-upload-2.6.9.4.zip` to a temporary folder.
2. Copy its **contents** into the root of your existing
   `endermert2/rovalra-firefox` repository, replacing matching files. Include the
   hidden `.github` folder. Do not put the ZIP itself or an extra enclosing folder
   in the repository. The archive excludes build tools, downloaded packages,
   browser profiles, and the separate userscript project.
3. Commit and push to the repository's default branch. If using GitHub's web
   uploader, upload the extracted folders and files in the same layout instead.
4. On [GitHub Actions](https://github.com/endermert2/rovalra-firefox/actions), select
   **Adapt and publish RoValra for Developer Edition** and choose **Run workflow**.
5. Confirm that the run passes and publishes `firefox-v2.6.9.4`, including the XPI,
   `updates.json`, source archive, and report. The public update feed must then
   offer version 2.6.9.4. No hosted files were changed as part of this local repair.
6. In Firefox Developer Edition, open `about:addons`, enable automatic updates
   for RoValra, and choose **Check for Updates**. Accept new host access if Firefox
   asks, then refresh Roblox tabs.

For an immediate local upgrade, use **Install Add-on From File** to install
`rovalra-firefox-2.6.9.4-unsigned.xpi`. Keep the existing add-on installed so its
settings are retained. The existing Developer Edition signature preference must
still be disabled. Installing this XPI does not update the hosted build pipeline;
the repository upload above is what repairs future delivery.

## Will future updates need manual uploads?

Normally, **no**. The existing workflow checks upstream twice daily and publishes
compatible releases; Firefox checks the update feed on its own schedule. GitHub
and Firefox checks can be delayed. Manual maintenance is needed if upstream
changes fail compatibility checks, a build/test fails, or the scheduled workflow
is disabled or loses publishing permission. These checks intentionally stop
unreviewed compatibility changes from being published.

## Verification

- The repaired updater downloaded and adapted official 2.6.9 successfully.
- All 12 automated tests passed.
- Mozilla validation: zero errors; 252 existing upstream dynamic-HTML warnings
  in the accepted `UNSAFE_VAR_ASSIGNMENT` category remain.
- Firefox Developer Edition 157: compatibility checks, all seven launcher paths,
  downloaded update installation, retained settings, and restart checks passed
  in disposable profiles. The real user profile was not changed.
- Browser delivery was tested against a loopback server with a generated update
  manifest and checksum. Publishing this repair to GitHub remains the user's
  upload step; authenticated Roblox features were not exercised on a live account.

Detailed results are in the local `build/report.json`, `build/lint.json`,
`build/firefox-smoke.json`, and `build/permanent-install.json`.
