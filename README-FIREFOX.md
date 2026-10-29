# RoValra for Firefox Developer Edition

The current port is **2.6.20.14**, based on upstream release **2.6.20** and
adapter revision 14. It repairs the dependency audit failure and adapts the
latest upstream APIs, sanitizer initialization and server-card functions.

See [the October 29 repair guide](firefox-port/UPSTREAM-REPAIR-2.6.20.md).
Extract `firefox-port/build/rovalra-firefox-upload-2.6.20.14.zip`, copy its contents
to the top of your GitHub clone, commit, push, and start a new workflow run.

This repair includes the reviewed notification, launcher and decoder changes for
upstream 2.6.18 and retains the
`source-map-js` dependency audit fix. Existing installations use the same update feed.
The [visual repair guide](firefox-port/VISUAL-REPAIR-2.6.14.110.md) covers the earlier icons and globe fixes.

For local installation, open **about:addons → gear → Install Add-on From File**
and select `firefox-port/build/rovalra-firefox-2.6.20.14-unsigned.xpi` over the
existing add-on. This requires Developer Edition with
`xpinstall.signatures.required=false`. Refresh Roblox tabs after updating.
The add-on ID and update URL are unchanged, so normal upgrades preserve settings.

[Automatic update setup](firefox-port/AUTOMATIC-UPDATES.md) and
[the technical guide](firefox-port/README.md) explain building and browser tests.

The obsolete top-level 2.6.8.3 extension snapshot has been removed. Source now
lives in `firefox-port`; keep its `upstream` input and `upstream-release.json`
metadata for reproducible builds. Generated packages are in `firefox-port/build`.
Previous generated XPIs, upload packages and recovery ZIPs have been removed.
The separate `standalone-server-region` source is preserved.
