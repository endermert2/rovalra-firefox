# Firefox icon and region-selector repair

Version **2.6.14.110** contains the updater audit repair and these visual fixes:

- **Private Servers and Configure icons:** the port's HTML hardening parsed SVG
  paths as standalone HTML, removing their drawing data. The reviewed Quick Play
  icon builder now creates paths directly in the SVG namespace. Closest Server,
  Copy Link, and Regenerate Link icons use the same corrected builder.
- **Blank region selector:** Firefox did not allow the page renderer to read the
  content-script object in the `initRovalraGlobe` event. That event now uses the
  same object-cloning bridge as other RoValra events.
- **“Log” text in the header:** this is the clipped alternative text “Logo” of an
  image whose extension URL was removed during sanitization. The sanitizer now
  preserves image sources belonging to this extension, while continuing to reject
  JavaScript URLs, unrelated extension URLs, and executable event attributes.

The package uses upstream release 2.6.14.1 and adapter revision 10. The add-on ID,
update URL, and existing settings are unchanged.

## Install the fix now

In Firefox Developer Edition, open **about:addons → gear → Install Add-on From
File** and select `build/rovalra-firefox-2.6.14.110-unsigned.xpi` over the existing
add-on. Keep your existing unsigned-extension configuration. Refresh Home,
Charts, and game pages so their content scripts reload.

## Update GitHub

1. Extract `build/rovalra-firefox-upload-2.6.14.110.zip` into a separate folder.
2. Fetch and pull your GitHub Desktop clone of `endermert2/rovalra-firefox`.
3. Copy the extracted contents into the clone's top level, replacing matching
   files. Include hidden `.github` and `.gitignore`; keep the clone's `.git`.
4. Commit and push the changes to the repository's default branch.
5. Start a **new** run of **Adapt and publish RoValra for Developer Edition**.
   Rerunning an old failed job uses the old source.
6. Confirm the Latest release is `firefox-v2.6.14.110`, with its XPI, `updates.json`,
   `source.zip`, and `report.json`. A later upstream release can produce a higher version.
7. Use **about:addons → gear → Check for Updates**, then refresh Roblox tabs.

Do not upload `build`, `downloads`, or `node_modules`; the supplied ZIP contains
only source. No new repository secrets or browser preference changes are needed.

## Validation

The browser fixture reproduces the original empty SVG paths and verifies all five
Quick Play icons after repair. It uses the real globe script, a packaged map,
the actual panel-building and initialization functions, and Firefox's MAIN-world
execution. The local test confirms two canvases, a loaded map texture and logo,
and no script errors. `build/firefox-visuals-test.png` records the resulting view.
Graphics availability is recorded; texture delivery is checked when WebGL is
available. No Roblox account is used by the fixture.

`build/VALIDATION.txt` contains the completed check results. Installation and
update tests use disposable browser profiles and check settings preservation.
This repair is prepared locally; hosted updates change after you push and run
the workflow. Future upstream changes can still require adapter maintenance.
