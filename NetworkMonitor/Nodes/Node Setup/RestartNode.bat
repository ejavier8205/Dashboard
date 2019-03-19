@echo off
setlocal EnableDelayedExpansion
set HomeDirectory=%~dp0%
"%homedirectory%DeviceCleanupCmd" *PID_8153* -s
"%homedirectory%DeviceCleanupCmd" *PID_5534* -s
"%homedirectory%DeviceCleanupCmd" *PID_8110* -s

shutdown /r /t 1

endlocal
