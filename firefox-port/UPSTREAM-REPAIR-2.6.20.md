# GitHub Actions and upstream repair — October 29, 2026

The latest inspected [GitHub run](https://github.com/endermert2/rovalra-firefox/actions/runs/40826532410)
failed at **Audit build dependencies**, before downloading or building RoValra.
The lockfile now resolves **fast-uri 3.1.9** and **undici 7.30.1**, addressing the
moderate and high findings in the supplied report. The existing
`npm audit --audit-level=moderate` gate remains enabled.

Two low-severity findings remain: deepmerge 4.3.1 and its dependent addons-linter.
[GHSA-gcqx-w48m-w2h4](https://github.com/advisories/GHSA-gcqx-w48m-w2h4) lists no
patched release as of this repair. Even the current addons-linter 10.15.0 depends
on that version. The port retains its tested validator 10.13.0; npm's suggested
forced downgrade to 1.15.1 is unsuitable for validating this modern extension.
These packages are build tooling and are excluded from the XPI. The audit report
is retained in `build/audit.json`; this is not a zero-vulnerability claim.

## Upstream 2.6.20 compatibility

The input is the official [v2.6.20 release](https://github.com/NotValra/RoValra/releases/tag/v2.6.20),
verified against GitHub's SHA-256 digest:
`263164e6e373d08fe9440f7c51ba2ebefe8237782f0680db5cfc042312efd5f8`.
The exact input is included under `upstream/`, with matching `upstream-release.json`.

- Reviewed `chrome.runtime.id`, `chrome.runtime.onMessage.removeListener`, and
  `chrome.storage.local.getBytesInUse`: the debug overlay and IndexedDB listener
  cleanup use APIs supported by Firefox. Browser tests exercise all three and
  round-trip the new background IndexedDB message handlers.
- Updated the SVG function contract for compiler variable renames. The existing
  Firefox icon patch remains in effect.
- Updated the three server-card contracts for the `purify_default` alias. Their
  behavior is otherwise unchanged, and the existing subplace repairs still apply.
- Upstream now bundles DOMPurify 3.4.17 and initializes it through
  `purify_default`. The adapter replaces that initialization with the pinned,
  checksum-verified DOMPurify already packaged by the port. HTML hardening
  recognizes the alias without sanitizing twice or losing its custom options.
- Corrected notification fixture extraction to stop at the next bundled module;
  upstream inserted Dexie between notifications and background initialization.
  Updated server browser fixtures to use the reviewed sanitizer alias.

Unreviewed APIs, permissions, patch targets, decoder changes and sanitizer hashes
still stop builds. Adapter revision **14** produces **2.6.20.14**; the add-on ID
and update URL remain unchanged. Tests use disposable browser profiles.

## Upload the repair

1. Extract `build/rovalra-firefox-upload-2.6.20.14.zip`.
2. Copy its contents into the root of your `endermert2/rovalra-firefox` clone,
   replacing matching files. Include `.github`, `.gitignore`, and `firefox-port`;
   preserve the clone's `.git` folder.
3. Commit and push to the default branch.
4. Start a **new workflow run** of **Adapt and publish RoValra for Developer
   Edition**. Rerunning an old failed job uses that job's old source and lockfile.

The upload ZIP contains source, workflow and build inputs. It excludes dependencies,
generated packages, downloads and test profiles. Local preparation does not publish
to GitHub. The hosted workflow publishes `firefox-v2.6.20.14` after validation when
2.6.20 remains the latest upstream release.

The unsigned local install package is `build/rovalra-firefox-2.6.20.14-unsigned.xpi`.
Use Firefox Developer Edition with signature enforcement disabled as described in
the README. `build/VALIDATION.txt` records local checks and `build/SHA256SUMS.txt`
records package checksums. Previous local XPIs, upload ZIPs and recovery packages
are removed; the current upstream download remains for source packaging.
