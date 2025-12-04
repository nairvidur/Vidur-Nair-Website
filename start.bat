@echo off
echo ========================================
echo   Vidur Nair Website - Quick Start
echo ========================================
echo.

REM Check for Node.js
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Node.js is not installed or not in PATH
    echo.
    echo Attempting to install Node.js using winget...
    where winget >nul 2>&1
    if %errorlevel% equ 0 (
        winget install --id OpenJS.NodeJS.LTS --silent --accept-package-agreements --accept-source-agreements
        echo.
        echo Node.js installation completed. Please close and reopen your terminal.
        echo Then run this script again.
        pause
        exit /b 0
    ) else (
        echo.
        echo Please install Node.js from: https://nodejs.org/
        echo After installation, close and reopen your terminal, then run this script again.
        pause
        exit /b 1
    )
)

echo [OK] Node.js found
node --version
echo.

REM Check if dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] Failed to install dependencies
        pause
        exit /b 1
    )
    echo.
)

echo ========================================
echo   Starting Development Server
echo ========================================
echo.
echo Your website will be available at:
echo   http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

