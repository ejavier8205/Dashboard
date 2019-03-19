@echo off
setlocal EnableDelayedExpansion
set HomeDirectory=%~dp0%


cd /d "%HomeDirectory%"

start "" /min "%HomeDirectory%Datagrabber.bat"
endlocal
exit