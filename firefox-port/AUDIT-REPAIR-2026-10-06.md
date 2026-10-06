# Restore the dependency audit (October 6, 2026)

The new failure is a build dependency finding, not a Firefox installation issue.
Mozilla's validator depends on `css-tree`, which uses `source-map-js`. The lockfile
selected version 1.2.1. The [GitHub advisory](https://github.com/advisories/GHSA-68fv-2mgg-jv7q),
reviewed on October 5, flags versions below 1.2.2 for a denial-of-service issue.

The repaired lockfile selects **source-map-js 1.2.2**. This is the only dependency
entry changed. A clean `npm ci` and `npm audit --audit-level=moderate` pass with
zero vulnerabilities. The workflow's audit gate remains enabled.

The extension stays at **2.6.14.110**, with adapter revision 10. This repair changes
build tooling; it does not change extension behavior, its ID, or its update URL.
The October 4 icon and region-selector fixes remain included.

## Upload the repair

1. Extract `build/rovalra-firefox-upload-2.6.14.110-audit-fix-2026-10-06.zip`.
2. Fetch and pull your GitHub Desktop clone of `endermert2/rovalra-firefox`.
3. Copy the extracted contents into the clone's top level, replacing matching
   files. Keep the clone's `.git` folder. Include hidden `.github` and `.gitignore`.
   The essential repair is `firefox-port/package-lock.json`.
4. Commit with **Update source-map-js to fix dependency audit** and push to the
   default branch.
5. Start a **new** run of **Adapt and publish RoValra for Developer Edition**.
   Rerunning the old failed job uses its old lockfile.

If upstream is still 2.6.14.1, a successful run will find the already-published
`firefox-v2.6.14.110` release and skip republishing it. That is expected. Scheduled
runs can resume checking future upstream releases. No local add-on reinstall,
new secrets, or browser preference changes are required for this audit repair.

The ZIP excludes downloaded dependencies, builds and caches. The installed XPI
and prior Firefox browser-test reports are retained locally. Current validation
results are in `build/VALIDATION.txt`. Future dependency advisories may require
another reviewed lockfile update; the audit continues to block unsafe builds.

This repair is local and takes effect on GitHub after you push the updated files.
