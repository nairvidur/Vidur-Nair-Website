@echo off
echo ========================================
echo   Vidur Nair Website - Setup Script
echo ========================================
echo.

echo Checking prerequisites...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo After installation, close and reopen your terminal, then run this script again.
    echo.
    pause
    exit /b 1
)
echo [OK] Node.js found
node --version

where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm is not installed or not in PATH
    echo.
    echo npm should come with Node.js. Please reinstall Node.js.
    echo.
    pause
    exit /b 1
)
echo [OK] npm found
npm --version

echo.
echo Installing dependencies...
echo This may take a few minutes...
echo.

call npm install
if %errorlevel% neq 0 (
    echo.
    echo [ERROR] Failed to install dependencies
    echo Please check the error messages above and try again.
    echo.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   Setup completed successfully!
echo ========================================
echo.
echo You can now run the development server using:
echo   run.bat
echo   or
echo   npm run dev
echo.
pause

