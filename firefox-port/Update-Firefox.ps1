$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
if (-not (Get-Command node -ErrorAction SilentlyContinue)) { throw 'Install Node.js 22 or newer first.' }
if (-not (Test-Path -LiteralPath 'node_modules')) {
    npm.cmd ci
    if ($LASTEXITCODE -ne 0) { throw 'Could not install build tools.' }
}
node update.mjs
if ($LASTEXITCODE -ne 0) { throw 'Adapter stopped. The previous port was preserved.' }
node verify.mjs
if ($LASTEXITCODE -ne 0) { throw 'Validation failed. See build/lint.json; do not install this build.' }
Write-Host 'The updated unsigned Firefox package is in firefox-port/build.'
Write-Host 'Install the XPI through about:addons in Developer Edition (signature enforcement must be disabled).'
Write-Host 'Installing over the existing add-on with the same ID preserves its settings.'
