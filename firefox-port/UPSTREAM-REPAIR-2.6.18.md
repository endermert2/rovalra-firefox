# RoValra 2.6.18 updater repair

The subsequent [October 23 audit repair](AUDIT-REPAIR-2026-10-23.md) supersedes
the package names and upload steps below. The current port is 2.6.18.13 with
DOMPurify 3.4.17; the reviewed upstream compatibility changes here are retained.

The scheduled workflow stopped at `New upstream permission notifications; review required`.
The new upstream feature uses optional browser notifications for incoming trades
and pinned friends joining games. The Firefox port is now **2.6.18.12**, based on
the exact upstream 2.6.18 release and adapter revision 12.

## Review and fixes

- Approved only the optional `notifications` permission and the four APIs used
  upstream: `create`, `clear`, `onClicked.addListener`, and `onClicked.hasListener`.
  The feature remains off by default and requires the user's permission when
  enabled. A future promotion to a required permission stops adaptation.
  Unknown permissions, APIs and changed patch targets still require review.
- Reviewed the upstream notification module: basic notifications with a packaged
  icon, trade/pinned-friend checks, Roblox destinations on click, and polling
  cancellation when disabled or permission is removed. Its options match
  [Firefox's supported notification options](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/notifications/NotificationOptions).
  The optional permission is supported by
  [Firefox's manifest](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions).
- Preserved the upstream launcher's positive safe-ID validation for place, user
  and universe IDs. Launches continue to use packaged code and structured
  arguments, including outfit hooks and protocol fallbacks.
- Reviewed the renamed server variables and sanitizer parameter. Updated the
  missing-metadata patch and browser fixtures while retaining the existing
  subplace, server availability, icon and globe fixes.
- Fixed a startup race in settings compatibility: a tab requesting results before
  background initialization finishes now receives empty result arrays instead of
  null. Ready results still reach the tab, and unrelated messages remain unclaimed.
- Split the new standalone Draco mesh decoder from the main content bundle.
  Minification alone left the bundle over Mozilla's 5 MiB parser limit. Both
  scripts now fit; their shared binding, execution order and upstream license
  header are preserved. Decoder changes and bundle layout changes require review.
- Refreshed the exact offline upstream input and metadata. The release ZIP's
  SHA-256 matches GitHub's digest:
  `648debff63d2543074918a2ed44acad018a882c32c58d5ae3a79859f7016d66f`.
  The packaged extension retains the upstream release's current LICENSE.

## Upload to GitHub

1. Extract `build/rovalra-firefox-upload-2.6.18.12.zip`.
2. Copy its contents to the top of your `endermert2/rovalra-firefox` clone,
   replacing matching files. Include `.github`, `.gitignore`, and the complete
   `firefox-port` folder, without adding an extra enclosing folder.
3. Commit and push to the branch used by scheduled Actions.
4. Start a **new workflow run** from Actions → Adapt and publish RoValra for
   Developer Edition → Run workflow. Rerunning the previous failed job uses its
   old source commit.
5. The workflow adapts the latest upstream release, checks the dependency audit,
   tests and Mozilla validation, then publishes the XPI, corresponding source,
   build report and update manifest together. With upstream 2.6.18, the release
   tag is `firefox-v2.6.18.12`.

No repository variables, secrets, add-on ID or update-feed changes are needed.
This upload ZIP contains source only; generated packages and browser profiles
are excluded. Local package preparation does not publish a GitHub release.

For immediate local use, install `build/rovalra-firefox-2.6.18.12-unsigned.xpi`
over the existing add-on in Developer Edition with signature enforcement
disabled, then refresh Roblox tabs. Notifications remain an opt-in RoValra setting.

`build/VALIDATION.txt` records the local checks. Browser fixtures use disposable
profiles and mocked Roblox responses; they do not cover authenticated live
trades, friend activity, or every upstream feature. Future unfamiliar upstream
changes can still require adapter maintenance.
