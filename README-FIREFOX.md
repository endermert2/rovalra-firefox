# RoValra for Firefox Developer Edition

The current port is **2.6.14.110**, based on upstream release **2.6.14.1** and
adapter revision 10. It includes the GitHub updater audit repair and fixes for
Quick Play icons, the region-selector globe, and its logo.

See [the visual repair and upload checklist](firefox-port/VISUAL-REPAIR-2.6.14.110.md).
Extract `firefox-port/build/rovalra-firefox-upload-2.6.14.110.zip`, copy its contents
to the top of your GitHub clone, commit, push, and start a new workflow run.

For local installation, open **about:addons → gear → Install Add-on From File**
and select `firefox-port/build/rovalra-firefox-2.6.14.110-unsigned.xpi` over the
existing add-on. This requires Developer Edition with
`xpinstall.signatures.required=false`. Refresh Roblox tabs after updating.
The add-on ID and update URL are unchanged, so normal upgrades preserve settings.

[Automatic update setup](firefox-port/AUTOMATIC-UPDATES.md) and
[the technical guide](firefox-port/README.md) explain building and browser tests.

The obsolete top-level 2.6.8.3 extension snapshot has been removed. Source now
lives in `firefox-port`; keep its `upstream` input and `upstream-release.json`
metadata for reproducible builds. Generated packages are in `firefox-port/build`.
A recovery ZIP of the baseline before this repair is retained there.
The separate `standalone-server-region` source is preserved.
