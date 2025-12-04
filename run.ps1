# Run script for Vidur Nair Website
# This script starts the development server

# Refresh PATH to include Node.js if it was just installed
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
# Also check common Node.js installation paths
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

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vidur Nair Website - Development Server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "⚠ Dependencies not installed. Running setup first..." -ForegroundColor Yellow
    Write-Host ""
    
    # Check if Node.js is available
    $nodeCmd = Get-Command node -ErrorAction SilentlyContinue
    if (-not $nodeCmd) {
        # Try to find node.exe in common locations
        foreach ($path in $nodePaths) {
            $nodeExe = Join-Path $path "node.exe"
            if (Test-Path $nodeExe) {
                $env:Path += ";$path"
                break
            }
        }
    }
    
    try {
        $null = node --version 2>&1
    } catch {
        Write-Host "✗ Node.js is not installed or not in PATH" -ForegroundColor Red
        Write-Host ""
        Write-Host "Node.js must be installed before running this script." -ForegroundColor Yellow
        Write-Host "Please install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
        Write-Host "Then run .\setup.ps1 to install dependencies." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "See README-SETUP.md for detailed instructions." -ForegroundColor Gray
        Write-Host ""
        Read-Host "Press Enter to exit"
        exit 1
    }
    
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
        Write-Host "Please run .\setup.ps1 to troubleshoot." -ForegroundColor Yellow
        Write-Host ""
        Read-Host "Press Enter to exit"
        exit 1
    }
    
    Write-Host ""
}

Write-Host "Starting development server..." -ForegroundColor Green
Write-Host ""
Write-Host "The website will be available at:" -ForegroundColor Cyan
Write-Host "  http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the development server
npm run dev

