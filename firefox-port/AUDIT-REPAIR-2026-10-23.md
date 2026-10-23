# DOMPurify audit repair (October 23, 2026)

The workflow stopped in **Audit build dependencies** because the pinned
DOMPurify 3.4.16 is affected by newly reviewed advisories:

- [GHSA-cg2g-xh64-v4q7](https://github.com/advisories/GHSA-cg2g-xh64-v4q7):
  template expressions in attached shadow roots (critical).
- [GHSA-mrv2-3pqr-j5jr](https://github.com/advisories/GHSA-mrv2-3pqr-j5jr):
  detached subtrees during in-place sanitization (high).
- [GHSA-c6gr-qvv4-5v3f](https://github.com/advisories/GHSA-c6gr-qvv4-5v3f):
  the SVG animation attribute guard in XHTML mode (low).

`package.json` and `package-lock.json` now pin **DOMPurify 3.4.17**, the patched
release for all three advisories. Other dependency versions, including the
previous source-map-js 1.2.2 repair, are preserved. The audit gate still fails on
moderate or higher vulnerabilities.

The adapter copies DOMPurify into the extension as `firefox/purify.js`, so this
also updates shipped code. Its reviewed SHA-256 in `contracts.json` is now
`cd37898f9782adf54820c413191b5691803f0f137c799d6edcfd38523b4c2c31`.
The checksum guard and HTML-warning review remain enabled. Adapter revision
**13** produces **2.6.18.13** from the included upstream 2.6.18 input, allowing
existing 2.6.18.12 installations to receive the patched sanitizer through the
same update feed.

The Ubuntu migration notice is separate from the audit failure. The workflow
now explicitly uses `ubuntu-24.04`, following the mitigation in
[GitHub's migration announcement](https://github.com/actions/runner-images/issues/14748).
Moving browser tests to Ubuntu 26.04 can be reviewed separately.

## Upload the repair

1. Extract `build/rovalra-firefox-upload-2.6.18.13.zip`.
2. Copy its contents into the top of your `endermert2/rovalra-firefox` clone,
   replacing matching files. Include `.github`, `.gitignore`, and the complete
   `firefox-port` folder. Keep the clone's `.git` folder.
3. Commit and push to the default branch.
4. Start a **new workflow run** of **Adapt and publish RoValra for Developer
   Edition**. Rerunning an old failed job uses its old source and lockfile.

The upload ZIP contains source; dependencies, generated builds, downloads and
browser profiles are excluded. Local package preparation does not publish to
GitHub. With upstream 2.6.18, the workflow publishes `firefox-v2.6.18.13` after
its audit, adapter tests, Mozilla validation and browser tests pass. No new
repository variables, secrets, add-on identity or update URL are needed.

For local installation, use `build/rovalra-firefox-2.6.18.13-unsigned.xpi` in
Developer Edition with signature enforcement disabled, as described in the
README. Local validation results are recorded in `build/VALIDATION.txt`.
