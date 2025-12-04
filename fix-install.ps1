# Fix installation script - Ensures all dependencies are properly installed
# Run this if you're having issues with 'next' not being recognized

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Fixing Dependencies Installation" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Refresh PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
$nodePaths = @(
    "C:\Program Files\nodejs",
    "${env:ProgramFiles(x86)}\nodejs",
    "$env:LOCALAPPDATA\Programs\nodejs"
)
foreach ($path in $nodePaths) {
    if (Test-Path $path) {
        $env:Path += ";$path"
    }
}

# Check Node.js
try {
    $nodeVersion = node --version 2>&1
    if ($LASTEXITCODE -ne 0) { throw }
    Write-Host "Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "Removing incomplete installation..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Remove-Item "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
}
if (Test-Path "package-lock.json") {
    Remove-Item "package-lock.json" -Force -ErrorAction SilentlyContinue
}

Write-Host ""
Write-Host "Installing dependencies..." -ForegroundColor Yellow
Write-Host "This will take a few minutes. Please wait..." -ForegroundColor Gray
Write-Host ""

npm install

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Installation failed!" -ForegroundColor Red
    Write-Host "Please check your internet connection and try again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Verify Next.js is installed
Write-Host ""
Write-Host "Verifying installation..." -ForegroundColor Yellow
$nextInstalled = Test-Path "node_modules\.bin\next.cmd" -or Test-Path "node_modules\next"

if ($nextInstalled) {
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "  Installation Successful!" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Next.js is now installed. You can run:" -ForegroundColor Cyan
    Write-Host "  .\start.ps1" -ForegroundColor White
    Write-Host "  or" -ForegroundColor Gray
    Write-Host "  npm run dev" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host ""
    Write-Host "WARNING: Next.js may not be properly installed." -ForegroundColor Yellow
    Write-Host "Trying to install Next.js directly..." -ForegroundColor Yellow
    Write-Host ""
    npm install next react react-dom --save
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "Next.js installed successfully!" -ForegroundColor Green
    } else {
        Write-Host ""
        Write-Host "ERROR: Could not install Next.js." -ForegroundColor Red
        Write-Host "Please check the error messages above." -ForegroundColor Yellow
    }
}

Read-Host "Press Enter to exit"

