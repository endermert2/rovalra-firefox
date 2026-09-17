# Automatic unsigned updates: step-by-step setup

This guide is for your migrated **Firefox Developer Edition** setup. It replaces
the previous Mozilla signing and temporary-launcher instructions. You need no
Mozilla developer account, API keys, or signing service.

You can install the local XPI immediately. Completing this guide lets Firefox
receive future adapted releases automatically through its normal add-on updater.
The existing hosted workflow stalled on upstream 2.6.9. This folder contains the
repair; upload the updated source and run the workflow as described below.
See [SUBPLACE-FOLLOWUP-2.6.9.7.md](SUBPLACE-FOLLOWUP-2.6.9.7.md) for the current upload checklist.
[REPAIR-NOTES.md](REPAIR-NOTES.md) records the earlier updater diagnosis.

## 1. How the pieces fit together

**Official RoValra release → GitHub runs the adapter and tests → GitHub publishes
an unsigned XPI and update manifest → Developer Edition installs the update.**

| Term | Meaning |
| --- | --- |
| Repository (repo) | Your project's files on GitHub. |
| Commit | A saved set of changes to those files. |
| Push | Upload local commits to GitHub. |
| GitHub Actions | GitHub's computers running the adapter and tests. |
| Workflow | The supplied `.github/workflows/firefox-release.yml` instructions. |
| Release | A published set of downloadable files on GitHub. |
| XPI | The Firefox extension installation package. |
| `updates.json` | A small file telling Firefox where to download the next version. |

Your PC does not need to stay on while GitHub checks for upstream updates. The
scheduled workflow checks twice daily; GitHub may delay scheduled runs. Firefox
checks separately, so an upstream update is not installed immediately upon release.

The extension does not rewrite itself, and no local browser launcher runs.

## 2. Repository visibility and configuration

Use your **public** repository `endermert2/rovalra-firefox` for this supplied workflow.
Private GitHub release assets require authentication that Firefox's add-on updater
is not configured to provide. Signing into GitHub in a tab does not solve this.
The revised workflow stops if the delivery repository is private.

If your repository already exists, keep using it. If it does not, sign into GitHub,
choose **New repository**, name it `rovalra-firefox`, choose **Public**, and create it.
You may initialize it with a README so that it has a `main` branch to clone.

The supplied `firefox-port/config.json` already has your values:

```json
"addonId": "rovalra-firefox@endermert2",
"upstreamRepository": "NotValra/RoValra",
"releaseRepository": "endermert2/rovalra-firefox"
```

Those are three fields within the full configuration, not a replacement for the
whole file. **Keep `upstreamRepository` as `NotValra/RoValra`.** That is where the
original extension comes from. Only `releaseRepository` names your own repository.
Do not change the add-on ID after installation; Firefox uses it to associate updates
and settings with this extension.

The current adapter revision is 7, producing version **2.6.9.7**. This also avoids
reusing the earlier port release tag. Future upstream releases get their upstream
version plus this revision. A compatibility fix for the same upstream version must
increment `adapterRevision` before publishing a replacement.

## 3. Exactly what to upload

The project folder on your PC is:

```text
C:\Users\Ender.DESKTOP-MB0NR2F\Desktop\Scripts\rovalra-v2.6.8
```

Upload this folder's **contents**, preserving their layout. Do not put them inside
an extra `rovalra-v2.6.8` folder within the repository. At GitHub's top level, you
should see `.github`, `.gitignore`, `firefox-port`, `firefox`, `assets`, `css`,
`public`, `manifest.json`, the JavaScript files, license, and README.

Include all source files in `firefox-port`, particularly `upstream`, `runtime`,
`patches`, `test`, `package.json`, and `package-lock.json`. These are needed to
reproduce and check the build. The two folders `firefox` and `firefox-port` are
different; include both.

Exclude these generated folders and private files:

| Do not upload | Reason |
| --- | --- |
| `firefox-port/node_modules/` | Downloaded build tools; GitHub installs them itself. |
| `firefox-port/build/` | Generated packages, test profiles, reports, source archives. |
| `firefox-port/downloads/` | Cached original release ZIPs. |
| `standalone-server-region/` | Separate userscript project; not part of the Firefox port. |
| `.env`, logs, credentials, or any browser profile | Private or unnecessary data. |

Keep both `.gitignore` files. GitHub Desktop respects them, but manually uploading
files through GitHub's website does not automatically apply these exclusions.

## 4. Upload with GitHub Desktop

1. In GitHub Desktop, sign into your GitHub account.
2. Choose **File → Clone repository**, select `endermert2/rovalra-firefox`, and
   choose a separate local folder for the clone. This creates your editable local
   copy of the GitHub repository.
3. Open that clone in File Explorer. Copy the project contents listed above into
   it, excluding the generated folders. Keep the clone's own `.git` folder intact.
4. If you previously uploaded the old setup, remove these obsolete files from the
   clone too: `Start-RoValra-Firefox.cmd`, `firefox-port/local-launch.mjs`,
   `firefox-port/UNSIGNED-LOCAL.md`, `firefox-port/amo-metadata.json`,
   `firefox-port/test/local-launch.test.mjs`, and
   `firefox-port/test/local-launch-smoke.mjs`. Copying new files over old files
   does not remove deleted files automatically.
5. Return to GitHub Desktop and inspect **Changes**. You should see the updated
   workflow and guides, not thousands of downloaded tool files or private profiles.
6. Enter a summary such as `Switch to permanent unsigned Developer Edition port`.
   Click **Commit to main** (or your repository's default branch).
7. Click **Push origin**. Refresh the repository's page on GitHub and verify that
   `.github/workflows/firefox-release.yml` is present at that exact location.

If using GitHub's website instead, use **Add file → Upload files** for the allowed
contents. Enable File Explorer's hidden-items display so you include `.github` and
`.gitignore`. Delete the obsolete files from the repository separately. For large
folder uploads, GitHub Desktop is generally easier.

## 5. Remove the old signing setup, if you created it

In your GitHub repository, open **Settings → Secrets and variables → Actions**.
Delete `AMO_JWT_ISSUER` and `AMO_JWT_SECRET` if you added them solely for this project;
the new workflow never uses them. If you created Mozilla credentials, you may revoke
those at Mozilla too. No such credentials are required going forward.

The `FIREFOX_ADDON_ID` repository variable is optional now: the workflow uses
`config.json` when the variable is absent. If the variable exists, its value must
remain exactly `rovalra-firefox@endermert2`, since it overrides the file. Deleting
the variable is also fine when the configuration file contains the correct ID.

Do not create a personal access token for this workflow. GitHub supplies its own
short-lived `GITHUB_TOKEN` for publishing releases, with permissions declared in
the workflow. Your repository or organization must permit that workflow to write
release contents.

## 6. Run the workflow once

1. Open your repository on GitHub and click **Actions**.
2. If GitHub asks whether to enable workflows, enable them for your repository.
3. Select **Adapt and publish RoValra for Developer Edition** from the left side.
4. Click **Run workflow**, select the default branch, and click the green button.
5. Open the new run to watch its steps. Allow several minutes for browser setup,
   downloads, tests, and source packaging.
6. A successful first run publishes a release. Open the repository's **Releases**
   page. Under its **Assets**, look for the unsigned `.xpi`, `updates.json`,
   `source.zip`, and `report.json`.

There is no Mozilla signing step. If the same port version has already been
published, the workflow skips republishing it. It does not overwrite an existing
release. The scheduled checks operate from the default branch, so changes must
reach that branch.

## 7. Install the permanent extension

1. In **Firefox Developer Edition**, open `about:config` and set
   `xpinstall.signatures.required` to **false**.
2. Download the unsigned XPI from your first release. Alternatively, use the local
   `firefox-port/build/rovalra-firefox-2.6.9.7-unsigned.xpi` prepared here; it contains
   the same configured update address.
3. Open `about:addons`, click the gear, choose **Install Add-on From File**, and
   select the XPI. Accept the installation and grant Roblox access if asked.
4. Open RoValra's details in `about:addons` and set **Allow automatic updates** to
   **On**. Refresh Roblox tabs.
5. Close and reopen Firefox normally. RoValra should still be installed.

If you used the old temporary installation, export important settings before
removing it. The older top-level snapshot used a different ID, so migrating from
that copy may require importing the settings. Permanent upgrades using your
unchanged ID preserve settings without the two temporary-storage preferences.

Disabling signature enforcement applies to all extensions in this profile.
It does not enable a debugging port. The tests here used disposable profiles;
you must make the preference change yourself in the profile where you install.

## 8. Check updates and diagnose failures

Once a newer port is published, choose **Check for Updates** from the gear menu in
`about:addons` to request an immediate check. Firefox can also update automatically.
If it reports no update and you already have the latest version, that is expected.

The installed manifest points to:

```text
https://github.com/endermert2/rovalra-firefox/releases/latest/download/updates.json
```

That URL must publicly return the update file. You do not need to type it into
Firefox settings. If the repository is renamed or moved, existing installations
still use their old update address; install a newly configured XPI manually to
change it. Keep releases containing older XPI download links available.

For a failed workflow, open its red step and read the error:

- **Changed upstream function / new API:** the adapter needs maintenance. Nothing
  new is published; keep using the existing version.
- **Permission denied / release creation failed:** check repository workflow
  permissions and whether the repository is public.
- **Browser test failed:** inspect the uploaded validation reports; do not bypass
  the tests simply to publish a package.
- **Firefox rejects the XPI:** verify that this is Developer Edition and that
  `xpinstall.signatures.required` is false in the current profile.
- **Update URL returns 404:** verify that a successful release includes
  `updates.json` and is marked Latest. A build that exists only on your PC does
  not create hosted updates.

GitHub may disable scheduled workflows in inactive public repositories. Check the
Actions page if upstream releases stop producing runs, and re-enable the schedule
when prompted. Neither validation nor signing can guarantee every future Roblox
website change is compatible; some adapter maintenance may still be necessary.

References: [Mozilla signing exceptions](https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox),
[Firefox update manifests](https://extensionworkshop.com/documentation/manage/updating-your-extension/),
[GitHub scheduled workflows](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#schedule).

