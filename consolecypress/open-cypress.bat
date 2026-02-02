@echo off
set CYPRESS_CACHE_FOLDER=D:\cypress-cache
set ELECTRON_DISABLE_GPU=1
set ELECTRON_NO_SANDBOX=1
set ELECTRON_ENABLE_LOGGING=0
cd /d D:\aiztek\consolecypress
npx cypress open --browser chrome
pause
