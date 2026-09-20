@echo off
cd /d "%~dp0"
if not exist node_modules (
    echo Installing dependencies, this only happens once...
    call npm install
)
start "" cmd /c "npm run dev"
timeout /t 4 /nobreak >nul
start "" "http://localhost:3000"
