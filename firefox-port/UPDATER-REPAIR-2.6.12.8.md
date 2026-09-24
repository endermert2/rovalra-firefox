# Restore Firefox updates (September 24, 2026)

## Diagnosis and repair

The official release is 2.6.12. The public Firefox release is still 2.6.9.7.
GitHub Actions reaches the adapter, but its reviewed 2.6.9 function contracts no
longer match. `enhanceServer` is the first mismatch; changing its hash alone would
just expose the next mismatch. The updater stops before publishing, leaving
Firefox with no newer package to download. This is not an add-on setting problem.

The repaired port is **2.6.12.8**. It includes:

- The exact official 2.6.12 release as the reproducible `upstream/` input.
- Reviewed contracts for changed server functions and the upstream sanitizer
  (the latter changed a local variable name; the port still uses pinned DOMPurify).
- Card patches that preserve new upstream filtering options, language-match data,
  and current-server handling for reused cards.
- Removal of the obsolete `getPlaceIdFromUrl6` patch: upstream now calls its shared
  subplace-aware helper directly.
- Existing subplace uptime, non-destructive availability handling, HTML sanitizing,
  request pacing and Firefox compatibility fixes.
- Tests updated to exercise 2.6.12, including language data and reused-card events.

The workflow itself does not need changing. Keep its compatibility checks enabled.
The updater can automatically publish releases whose patch contracts still match;
changes to patched functions can still require maintenance. Rerunning the old
failed workflow or changing only `adapterRevision` cannot repair a changed patch.

## Upload the repair with GitHub Desktop

1. Download/extract `build/rovalra-firefox-upload-2.6.12.8.zip` into a separate folder.
   Its top level contains `.github`, `.gitignore`, `README-FIREFOX.md`, and
   `firefox-port`. It excludes build outputs, downloaded dependencies and profiles.
2. In GitHub Desktop, select your clone of `endermert2/rovalra-firefox` and click
   **Fetch origin**, then **Pull origin** if offered. If you have no clone, use
   **File > Clone repository** and select that repository first.
3. Copy the extracted contents into the clone's top level, replacing matching
   files. Do not create an extra nested project folder. Keep the clone's `.git`.
4. Delete `firefox-port/upstream/public/Assets/data/ServerList.json` from the clone
   if present. Upstream removed this file in the new release. The replacement
   upstream folder in the ZIP intentionally does not contain it.
5. Review GitHub Desktop's **Changes**. Include all updated adapter files, tests,
   guides and `firefox-port/upstream` files. Confirm `config.json` has revision 8
   and `upstream/manifest.json` has version 2.6.12. Do not upload `node_modules`,
   `build`, `downloads`, or browser profiles.
6. Commit with a summary such as **Repair Firefox adapter for RoValra 2.6.12**.
   Click **Push origin**. The changes must reach the repository's default branch.
7. Open [the Actions page](https://github.com/endermert2/rovalra-firefox/actions),
   select **Adapt and publish RoValra for Developer Edition**, and choose
   **Run workflow** on the updated default branch. Start a new run; do not use
   **Re-run jobs** on an old failed run, which uses the old commit.
8. Wait for all steps to succeed. Open
   [Releases](https://github.com/endermert2/rovalra-firefox/releases) and confirm
   `firefox-v2.6.12.8` is Latest, with the unsigned XPI, `updates.json`, `source.zip`,
   and `report.json`. The update manifest should advertise version 2.6.12.8.
9. In Firefox Developer Edition, open **about:addons > gear > Check for Updates**.
   Confirm RoValra's version becomes **2.6.12.8**, then refresh Roblox tabs. Leave
   **Allow automatic updates** enabled for the add-on.

No new repository secrets, personal access token, Mozilla account, or Firefox
preference changes are needed for an already-working unsigned Developer Edition
installation. Keep `addonId` as `rovalra-firefox@endermert2`, upstream as
`NotValra/RoValra`, and the release repository as `endermert2/rovalra-firefox`.
If the `FIREFOX_ADDON_ID` repository variable exists, it must match the same ID.

## Install locally now (optional)

In your existing Developer Edition setup, use **about:addons > gear > Install
Add-on From File** and select `build/rovalra-firefox-2.6.12.8-unsigned.xpi`.
Install over the existing permanent port; do not uninstall it first. The ID and
update URL are unchanged. This updates your browser immediately, but the GitHub
upload and new workflow run are still needed to repair hosted automatic updates.

## Validation

- Downloaded official 2.6.12 ZIP matched GitHub's SHA-256 digest:
  `a7c772ecc05c8e0ab62e63e56033ce49f909c1ff573680df4fa8f3558d01c867`.
- `npm run update`: passed against the latest official release.
- `npm test`: 27 tests passed.
- `npm run verify`: zero errors; all 261 HTML warnings verified as sanitized.
- `npm audit --audit-level=moderate`: zero vulnerabilities reported.
- `npm run test:firefox`: passed on Firefox Developer Edition 157.0.
- `npm run test:install`: passed, including restart persistence, update manifest
  and XPI downloads, and settings preservation through upgrade and restart.
  Version 2.6.12.9 in that report is only a synthetic update in a disposable profile.

Browser tests use isolated profiles and local fixtures. Authenticated Roblox
features still need a check in normal use. This repair has been prepared locally;
it has not been pushed or published to your GitHub repository.
