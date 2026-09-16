# Firefox maintenance release 2.6.9.5

## Upload once

1. Open the supplied `rovalra-firefox-upload-2.6.9.5` folder, or extract the ZIP
   of the same name. Copy/upload its **contents** into the root of the existing
   `endermert2/rovalra-firefox` repository, replacing matching files. Include
   `.github` and `.gitignore`; preserve unrelated rules in an existing gitignore.
   Do not upload the ZIP itself or add an extra enclosing directory.
2. Commit the changes to the default branch.
3. Open **Actions → Adapt and publish RoValra for Developer Edition → Run workflow**.
4. Confirm release `firefox-v2.6.9.5` appears. In Firefox's `about:addons`, choose
   **Check for Updates**, then refresh Roblox tabs. Automatic updates continue
   normally afterward.

The archive contains source and the workflow, with no browser profiles, secrets,
downloaded build tools, or separate userscript project. Nothing was published
to GitHub during this repair. The local XPI can also be installed over the existing
add-on through **Install Add-on From File**, preserving the same add-on ID.

## Changes

### Missing bookmark icon and blocked fonts

`bookmark_border` is a Material Icons ligature: the font converts that text into
one glyph. The upstream extension loads Google's font stylesheet in the page,
where Firefox's page security policy can block it. The port now bundles the
outlined and filled Material fonts, with their Apache-2.0 license and source URLs.
They work offline and require no Google font request.

The three separate RoValra/Builder fonts remain hosted at their original URLs.
They are fetched using the existing restricted background transport and loaded
from bytes through FontFace. This avoids the page's font restrictions without
weakening its security policy or redistributing those separately owned fonts.
Their availability still depends on RoValra's font server.

### Dependency advisories

Pinned compatible overrides update `image-size` to **2.0.4** and `adm-zip` to
**0.6.1**. A clean install and npm audit report **zero known vulnerabilities**.
The workflow now checks for moderate-or-higher advisories before building.
Future advisories can stop publication until reviewed and fixed.

The two deprecation notices for ESLint 9 and `whatwg-encoding` can still appear.
They are pinned indirectly by the current Mozilla validation tooling and are
not reported vulnerabilities. This repair retains the compatible tooling instead
of forcing a major ESLint upgrade or downgrading web-ext. Funding notices are
informational.

### HTML rendering and validation

The bundled sanitizer is updated to **DOMPurify 3.4.15**, with its license.
The adapter sanitizes **92 additional dynamic HTML insertion points**, including
dynamic innerHTML/outerHTML assignments and insertAdjacentHTML calls. Existing
sanitizer calls also use the updated library. Literal packaged markup and plain
text assignments keep their existing behavior.

Mozilla still emits **252 static-analysis warnings** because it does not follow
the minified sanitizer aliases. The old blanket allowance is removed. Each
warning must now correspond to a verified sanitizer call, a sanitized template,
or the exact pinned sanitizer's own inert parser. New unguarded warnings fail
validation. `build/html-review.json` records the classifications and is retained
as a workflow artifact. This is additional protection, not a claim that every
feature has received a complete security audit.

### Startup console error

The settings-compatibility notification now consumes Firefox's lastError when
the active tab has no receiving content script. This expected startup condition
no longer produces an unchecked error.

## Verification

- All **16 automated tests** pass, including sanitizer-side effects and rejection
  of new unguarded HTML warnings.
- Mozilla validation: **zero errors**, **zero unresolved HTML warnings**; its
  252 raw warnings remain visible alongside the classification report.
- Firefox Developer Edition 157, disposable profile: real bookmark ligature
  measures one 24px glyph under strict page CSP; filled and outlined fonts load;
  background-loaded fonts work; injected event handlers and javascript links are
  removed while SVG, checkbox, and icon markup survive.
- Compatibility test finishes with **no console errors**.
- Firefox downloads a test update and preserves settings across restarts.
  Version 2.6.9.6 in that test is a disposable fixture, not a published release.
- Authenticated Roblox account features were not exercised on a real account.

Review records are in `build/report.json`, `build/lint.json`,
`build/html-review.json`, `build/firefox-smoke.json`, and
`build/permanent-install.json`. A screenshot of the local font fixture is in
`build/bookmark-font-test.png`.
