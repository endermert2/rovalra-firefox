# Restore Firefox updates (October 4, 2026)

The workflow stopped at its dependency audit before downloading or adapting an
upstream release. The repair keeps the moderate-or-higher audit gate enabled.

- Replaced `web-ext` with Mozilla's standalone `addons-linter` 10.13.0. This is
  the same validator used by `web-ext`, without its unused Android tooling and
  vulnerable `node-forge` dependency. Validator errors and unreviewed HTML
  warnings still block publication.
- Pinned DOMPurify 3.4.16 and reviewed its new packaged checksum. Refreshed the
  lockfile to use brace-expansion 1.1.21 and fast-uri 3.1.8.
- Updated the reproducible input to official release **2.6.14.1**, verified against
  GitHub's SHA-256 digest in `upstream-release.json`.
- Accepted four-part upstream hotfix assets. This release's embedded manifest
  still says 2.6.14; the adapter retains the full release tag and corresponding
  source tag instead of rejecting it or confusing it with the earlier release.
- Reviewed the removed language-match calls in `enhanceServer` and removed the
  obsolete background tab-notification patch. Other contracts remain enforced.

Adapter revision **9** produces Firefox version **2.6.14.109**. For a three-part
upstream release, the fourth component is the adapter revision, as before. For a
hotfix it is `hotfix × 100 + adapterRevision`. Revisions must be 1–99; every version
has four numeric components and later hotfixes sort after earlier ones.
The add-on ID and hosted update URL are unchanged.

## Upload with GitHub Desktop

1. Extract `build/rovalra-firefox-upload-2.6.14.109.zip` into a separate folder.
   Its top level contains `.github`, `.gitignore`, `README-FIREFOX.md`, `LICENSE`,
   and `firefox-port`; there is no extra containing project folder.
2. In GitHub Desktop, fetch and pull your clone of `endermert2/rovalra-firefox`.
3. Copy the extracted contents into the clone's top level, replacing matching
   files. Keep the clone's `.git` folder. Include hidden `.github` and `.gitignore`.
4. If present, remove the obsolete file
   `firefox-port/upstream/public/Assets/data/ServerList.json` from the clone.
   The separate `standalone-server-region` project is not part of this upload.
   For the same cleanup as this workspace, remove the obsolete top-level
   `assets`, `css`, `firefox`, and `public` folders, plus the top-level
   `background.js`, `content.js`, `intercept.js`, `manifest.json`, and
   `FIREFOX-PORT-NOTICE.md`. Keep `firefox-port/assets`, `firefox-port/upstream`,
   and the root `LICENSE`.
5. Review the changes. Include `package.json`, `package-lock.json`, `verify.mjs`,
   `adapter.mjs`, `update.mjs`, `contracts.json`, `config.json`,
   `upstream-release.json`, tests, guides, upstream files and the workflow.
   Do not upload `build`, `downloads`, `node_modules`, or browser profiles.
6. Commit with **Repair Firefox updater audit and upstream hotfix support** and
   push to the repository's default branch.
7. Open [Actions](https://github.com/endermert2/rovalra-firefox/actions), choose
   **Adapt and publish RoValra for Developer Edition**, and select **Run workflow**
   on the updated default branch. Start a new run; rerunning the old failed job
   uses its old source and dependencies.
8. Confirm [Releases](https://github.com/endermert2/rovalra-firefox/releases) shows
   `firefox-v2.6.14.109` as Latest, with an XPI, `updates.json`, `source.zip`, and
   `report.json`. A later upstream release may produce a higher version.
9. In Firefox Developer Edition, use **about:addons → gear → Check for Updates**,
   then refresh Roblox tabs. Leave automatic updates enabled.

No new secrets, add-on ID changes, or browser preference changes are required for
your existing unsigned Developer Edition installation. To install locally now,
use **Install Add-on From File** and select
`build/rovalra-firefox-2.6.14.109-unsigned.xpi` over the existing add-on.

## Rebuild and validation

From `firefox-port`, run `npm ci`, `npm audit --audit-level=moderate`,
`npm run build`, `npm test`, and `npm run verify`. For a live upstream check use
`npm run update`. Browser tests are `npm run test:firefox` and
`npm run test:install`; they use disposable profiles. `npm run package:upload`
recreates the source-only GitHub ZIP after building.

Current validation results are recorded in `build/VALIDATION.txt`. The repair is
prepared locally; it takes effect on GitHub after you push and run the workflow.
Future changes to patched upstream functions can still require adapter maintenance.
