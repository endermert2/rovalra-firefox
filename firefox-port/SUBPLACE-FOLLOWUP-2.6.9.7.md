# Subplace follow-up: 2.6.9.7

## Why the first repair was incomplete

Version 2.6.9.6 repaired the uptime callback and direct card-removal function, but
missed a separate deletion path. The shared `callRobloxApi` wrapper dispatches
`rovalra-server-inactive` after join status 5. `attachGlobalListeners2` listened
for that event and removed the card independently of the repaired renderer.
The earlier browser fixture stubbed the region service and did not exercise
that API wrapper/event combination.

The filtered Load More path also called a join probe before rendering each entry.
It discarded entries on unsuccessful probes, then probed accepted entries again
for metadata. Repeated enhancements could produce further duplicate requests.
The reported HTTP 429 response confirms Roblox was rate-limiting these requests.

## Changes

- The API event listener preserves the card and labels availability unconfirmed.
- Received server-list entries render without a redundant join eligibility probe.
- Region probes for the same place/server share one in-flight request and briefly
  reuse the result. Distinct probes run serially, at least 250 ms apart.
- HTTP 429 pauses queued and new region probes for the server's `Retry-After`
  interval, with a five-second default when absent. No immediate retry loop runs.
- All previous font, security, callback and place-ID fixes remain included.

This does not bypass Roblox's access checks. A stale entry may remain visible
until refresh. Metadata can remain unavailable during throttling, and other
RoValra features or tabs can still consume Roblox's shared request limit.

## Install and upload

For an immediate check, install `rovalra-firefox-2.6.9.7-unsigned.xpi` over the
existing extension using Firefox's **Install Add-on From File**. Confirm version
2.6.9.7 and reload the Roblox tab before trying Load More. Keep the add-on ID
`rovalra-firefox@endermert2` unchanged so the installation retains its settings.

Extract `rovalra-firefox-upload-2.6.9.7.zip` and upload its contents to the root of
`endermert2/rovalra-firefox`, replacing matching files. Include `.github` and
`.gitignore`; do not upload an extra enclosing directory. Commit, then run
**Actions > Adapt and publish RoValra for Developer Edition > Run workflow**.
The resulting release should be `firefox-v2.6.9.7`. Scheduled upstream updates
continue afterward. Nothing was published to GitHub during this repair.

## Verification

- All 26 unit tests passed, including duplicate requests, request pacing,
  queued work during Retry-After and removal of pre-render eligibility probes.
- Firefox Developer Edition 157 tested the actual upstream API wrapper, region
  helper, global listener and two successive Load More button clicks with local
  network fixtures. The reconstructed 2.6.9.6 paths lost the subplace cards;
  the repaired paths retained all five entries.
- A 429 through that API wrapper kept three cards visible while making only one
  region request. Its expected 429 log appears inside the fixture's report.
- Existing fonts, sanitization, browser compatibility, permanent installation,
  restart and simulated update/settings-retention checks passed.
- Mozilla validation: zero errors and zero unresolved HTML warnings; 252 raw
  warnings remain classified as reviewed sanitizer uses.

The signed-in live subplace has not been tested here. The browser checks exercise
real production functions against deterministic responses without accessing
your account or credentials.
