# Subplace server fix: 2.6.9.6

This release keeps upstream RoValra 2.6.9 and raises the Firefox adapter revision
to 6. It includes the earlier font, dependency and HTML-sanitization repairs.

## What was wrong

- Generated server cards passed a context without the uptime callback. The delayed
  callback then threw `processUptimeBatch2 is not a function` (minified as `v`).
- Generated cards did not record their explicit place ID. Region checks could use
  the page's place instead, and uptime batches ignored the `?PlaceId=` override.
- A join-status probe returning status 5 deleted the card after rendering. A join
  probe alone does not establish whether an entry in the server list should vanish.
- Empty RoValra detail results raised `Invalid API Data`; missing metadata could
  also incorrectly mark a server as full.

## Result

Generated cards have a working callback and keep their place ID. Uptime batches
are grouped by place. Failed or inconclusive probes preserve the card and show
"Server availability unconfirmed"; an explicit full-server response still shows
the full indicator. Missing metadata does not invent a region, uptime, or capacity.
Join buttons retain the original target and Roblox still decides access eligibility.
This can leave an actually stale entry visible until the list is refreshed.

The independent `ecsv2.roblox.com` image errors are not part of these server paths.
No redacted account or extension identifiers are needed for this repair.

## Upload to your existing repository

1. Extract `rovalra-firefox-upload-2.6.9.6.zip`.
2. Upload the contents to the root of `endermert2/rovalra-firefox`, preserving the
   existing layout: `.github`, `.gitignore`, `firefox-port`, and the root documents.
   Do not create an extra enclosing folder. Replace matching files, including
   `firefox-port/contracts.json` and `firefox-port/config.json`.
3. Commit, then run **Actions > Adapt and publish RoValra for Developer Edition >
   Run workflow**. The expected release is `firefox-v2.6.9.6`.
4. In Firefox's Add-ons Manager, use **Check for Updates**, then refresh Roblox.
   You can also install the supplied 2.6.9.6 XPI over the existing extension now.

Keep the add-on ID `rovalra-firefox@endermert2` unchanged. Once this source repair
is uploaded, the existing scheduled workflow continues to handle compatible
upstream releases automatically. You do not need to upload each future release.

## Validation and limits

Local validation passed: 23 automated tests; Firefox Developer Edition 157
compatibility tests with no console errors; permanent install, restart, and a
simulated subsequent update with settings retained. Mozilla validation reports
zero errors and zero unresolved HTML warnings (252 reviewed sanitizer warnings).
The dependency audit reports zero known vulnerabilities.

Regression checks exercise actual extracted upstream rendering functions before
and after the patch in Firefox: all three card builders, delayed uptime callbacks,
mixed root/subplace batches, empty metadata, region probes and Join targets.
Unit tests cover malformed responses, explicit full status, query overrides and
upstream patch guards. Existing compatibility, HTML-sanitizer, font, and permanent
installation/update checks remain enabled in GitHub Actions.
The browser report intentionally includes the old code's failures under
`subplacesBefore`; the repaired `subplaces` result has no errors.

The provided public subplace (85547073091480) returned public servers during the
investigation. Browser regression checks use deterministic local API fixtures;
joining that live subplace with your signed-in account was not tested. Some region
or uptime information can remain unavailable when the services do not provide it.
