# RoValra for Firefox Developer Edition

This workspace contains the unofficial RoValra Firefox port, its original release
input, and a repeatable update adapter. The current package is **2.6.9.4**.

## Install once

1. In Firefox Developer Edition, open `about:config`.
2. Set `xpinstall.signatures.required` to **false**.
3. Open `about:addons`, click the gear, and choose **Install Add-on From File**.
4. Select `firefox-port/build/rovalra-firefox-2.6.9.4-unsigned.xpi` from this folder.
5. Accept the installation and allow RoValra access to Roblox if asked. Refresh
   existing Roblox tabs.

RoValra remains installed when you close Firefox. Open Firefox normally from now
on. There is no launcher, additional browsing profile, or listening debugging
connection. Signature enforcement is disabled for all extensions in this profile,
not just RoValra. This method requires Developer Edition or another Firefox edition
that honors that preference; standard Firefox does not.

For browser-managed automatic updates, follow the revised
[step-by-step update guide](firefox-port/AUTOMATIC-UPDATES.md). The GitHub workflow
now publishes unsigned releases and requires no Mozilla account or signing secrets.
The repair is prepared locally; upload the repaired source and run the workflow
to restore hosted updates. Installing the local XPI already works without hosting.

The [technical guide](firefox-port/README.md) covers building, tests, compatibility
changes, and limitations. Keep `firefox-port/upstream/`: it is the original release
used for reproducible builds and tests.

