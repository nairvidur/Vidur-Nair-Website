# Master startup script - Handles everything automatically
# This script fixes execution policy, refreshes PATH, installs dependencies, and starts the server

# Fix execution policy for current user (if needed)
$currentPolicy = Get-ExecutionPolicy -Scope CurrentUser
if ($currentPolicy -eq "Restricted") {
    Write-Host "Setting execution policy to RemoteSigned..." -ForegroundColor Yellow
    Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force | Out-Null
}

# Refresh PATH to include Node.js
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

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Vidur Nair Website - Quick Start" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check for Node.js
$nodeCmd = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCmd) {
    Write-Host "Node.js is not installed" -ForegroundColor Red
    Write-Host ""
    Write-Host "Installing Node.js..." -ForegroundColor Yellow
    $winget = Get-Command winget -ErrorAction SilentlyContinue
    if ($winget) {
        winget install --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
        # Refresh PATH again after installation
        $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
        foreach ($path in $nodePaths) {
            if (Test-Path $path) {
                $env:Path += ";$path"
            }
        }
        Start-Sleep -Seconds 2
    } else {
        Write-Host "Please install Node.js from https://nodejs.org/" -ForegroundColor Yellow
        Read-Host "Press Enter to exit"
        exit 1
    }
}

# Verify Node.js
try {
    $nodeVersion = node --version 2>&1
    if ($LASTEXITCODE -ne 0) { 
        throw 
    }
    Write-Host "Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js installation failed. Please install manually from https://nodejs.org/" -ForegroundColor Red
    Write-Host "After installation, close and reopen your terminal, then run this script again." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check/Install dependencies
$nextInstalled = Test-Path "node_modules\.bin\next.cmd" -or Test-Path "node_modules\next"
if (-not $nextInstalled -or -not (Test-Path "node_modules")) {
    Write-Host ""
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    Write-Host "This may take a few minutes..." -ForegroundColor Gray
    Write-Host ""
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "Failed to install dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
    
    # Rebuild to ensure bin links are created
    Write-Host "Setting up executables..." -ForegroundColor Gray
    npm rebuild 2>&1 | Out-Null
    
    # Verify Next.js was installed
    $nextInstalled = Test-Path "node_modules\.bin\next.cmd" -or Test-Path "node_modules\next"
    if (-not $nextInstalled) {
        Write-Host ""
        Write-Host "Warning: Next.js may not be properly installed. Trying to reinstall..." -ForegroundColor Yellow
        npm install next react react-dom --save
        npm rebuild 2>&1 | Out-Null
        if ($LASTEXITCODE -ne 0) {
            Write-Host ""
            Write-Host "Failed to install Next.js. Please run 'npm install' manually." -ForegroundColor Red
            Read-Host "Press Enter to exit"
            exit 1
        }
    }
    Write-Host ""
} elseif (-not (Test-Path "node_modules\.bin\next.cmd")) {
    # Dependencies exist but bin links are missing - rebuild them
    Write-Host ""
    Write-Host "Fixing executable links..." -ForegroundColor Yellow
    npm rebuild 2>&1 | Out-Null
    Write-Host ""
}

# Start the development server
Write-Host "========================================" -ForegroundColor Green
Write-Host "  Starting Development Server" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your website will be available at:" -ForegroundColor Cyan
Write-Host "  http://localhost:3000" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

npm run dev
