@echo off
echo Florida Zone 10 Plant Helper - Installation Script
echo ================================================
echo.

echo Checking if Node.js is installed...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed.
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Choose the LTS version for best compatibility.
    echo.
    echo After installing Node.js, run this script again.
    pause
    exit /b 1
) else (
    echo Node.js is installed.
    node --version
    echo.
)

echo Checking if npm is available...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo npm is not available.
    echo Please ensure Node.js is properly installed.
    pause
    exit /b 1
) else (
    echo npm is available.
    npm --version
    echo.
)

echo Installing project dependencies...
npm install

if %errorlevel% neq 0 (
    echo Failed to install dependencies.
    pause
    exit /b 1
) else (
    echo Dependencies installed successfully!
    echo.
    echo To start the application, run: npm run dev
    echo.
    echo The application will be available at: http://localhost:3000
    echo.
    pause
) 