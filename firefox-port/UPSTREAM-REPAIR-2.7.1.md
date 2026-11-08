# Upstream 2.7.1 updater repair — November 9, 2026

Firefox port **2.7.1.16** restores updates from the official upstream
[v2.7.1 release](https://github.com/NotValra/RoValra/releases/tag/v2.7.1).
The updater stopped at its `createDOMPurify` review guard before replacing the
previous build.

## Reviewed change

The upstream sanitizer is still DOMPurify 3.4.17. Its compiled function renamed
`remove2` to `remove3`, `getAttributes` to `getAttributes2`, and local `element`
bindings to `element2`. Comparing syntax trees after those exact identifier
renames gives identical code, including property names, literals and control flow.
All other patched functions, the decoder, permissions and Chrome API contracts
continue to pass their existing checks.

Only the reviewed function hash is accepted. The adapter still replaces the
upstream sanitizer with the checksum-pinned packaged DOMPurify 3.4.17 build.
A regression test changes the sanitizer's behavior and verifies that conversion
is rejected. No contract checks or dependency audit gates were removed.

The original release ZIP's GitHub SHA-256 is:

`095d0bb8e5a7e87188e5a141d8aa7cc2df4d2539e69620f728f14c4647d8a278`

The exact input is retained in `upstream/` with matching `upstream-release.json`
metadata. Adapter revision 16 produces version 2.7.1.16. The add-on ID and update
URL are unchanged.

## Upload and install

1. Extract `build/rovalra-firefox-upload-2.7.1.16.zip` into your GitHub clone's root,
   replacing matching files and including `.github`, `.gitignore` and `firefox-port`.
   Preserve the clone's `.git` directory.
2. Commit and push, then start a **new** workflow run. An old job rerun uses old
   source. Successful validation publishes `firefox-v2.7.1.16` while 2.7.1 remains
   the latest upstream release.
3. For immediate local installation, select
   `build/rovalra-firefox-2.7.1.16-unsigned.xpi` from Firefox's Install Add-on From
   File menu. This unsigned port requires Developer Edition with
   `xpinstall.signatures.required=false`. Refresh Roblox tabs afterward.

The upload ZIP contains the source, exact upstream input, tests, lockfile and
workflow. It excludes build output, dependencies, caches and browser profiles.
`source.zip` includes corresponding source for the generated XPI.

See `build/VALIDATION.txt` for verification results and `build/SHA256SUMS.txt`
for artifact hashes. Old generated packages and the previous download were removed
locally after validating the replacements. GitHub publication and remote release
deletion are not performed by preparing these files.
