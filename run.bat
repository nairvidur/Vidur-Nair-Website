@echo off
echo ========================================
echo   Vidur Nair Website - Development Server
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [WARNING] Dependencies not installed. Running setup first...
    echo.
    
    REM Check if Node.js is available
    where node >nul 2>&1
    if %errorlevel% neq 0 (
        echo [ERROR] Node.js is not installed or not in PATH
        echo.
        echo Please run setup.bat first to install dependencies.
        echo.
        pause
        exit /b 1
    )
    
    echo Installing dependencies...
    call npm install
    
    if %errorlevel% neq 0 (
        echo.
        echo [ERROR] Failed to install dependencies
        echo Please run setup.bat to troubleshoot.
        echo.
        pause
        exit /b 1
    )
    
    echo.
)

echo Starting development server...
echo.
echo The website will be available at:
echo   http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo.
echo ========================================
echo.

call npm run dev

