@echo off
setlocal EnableDelayedExpansion
set HomeDirectory=%~dp0%

cd /d "%HomeDirectory%"

:start





::ENABLE AVAILABLE ADAPTERS
echo    Enabling connected adapters...
      for /f "tokens=1,2,3 delims=," %%a in ('type "%HomeDirectory%Nodes\Data\%Computername% Connected Adapters.txt"') do (
            
            Set "StationName=%%a"
            netsh interface set interface !StationName! enable
        )

timeout /t 3 >nul 2>nul
getmac /v /fo csv /nh>"%HomeDirectory%Nodes\Data\%Computername% Connected Adapters.txt"

type nul>"%HomeDirectory%Nodes\%computername% Active Connections.txt"


for /f "tokens=1,2,3 delims=," %%a in  ('TYPE "%HomeDirectory%Nodes\Data\%ComputerName% Adapters ID.txt"') do (
    Set MyAdaptersCount=0
    set NotFoundCount=0
    Set "AdapterName=%%a"
    Set "AdapterDesc=%%b"
    Set "AdapterMAC=%%c"

    Set AdapterName=!AdapterName:"=!
    Set AdapterDesc=!AdapterDesc:"=!
    Set AdapterMAC=!AdapterMAC:"=!

    for /f "tokens=1,2,3 delims=," %%a in  ('TYPE "%HomeDirectory%Nodes\Data\%computername% Connected Adapters.txt"') do (
        Set /a MyAdaptersCount+=1
    )

 

    for /f "tokens=1,2,3 delims=," %%a in  ('TYPE "%HomeDirectory%Nodes\Data\%computername% Connected Adapters.txt"') do (
        Set "MyAdapterName=%%a"
        Set "MyAdapterDesc=%%b"
        Set "MyAdapterMAC=%%c"

        Set MyAdapterName=!MyAdapterName:"=!
        Set MyAdapterDesc=!MyAdapterDesc:"=!
        Set MyAdapterMAC=!MyAdapterMAC:"=!

        if /i !MyAdapterMAC! == !AdapterMAC! (
            echo !AdapterName!,!MyAdapterName!,!MyAdapterMAC!>>"%HomeDirectory%Nodes\%computername% Active Connections.txt"
        ) else (
            Set /a NotFoundCount+=1
        )     

    )

        if /i !MyAdaptersCount! == !NotFoundCount! (
            echo !AdapterName!,Not Available,Not Available>>"%HomeDirectory%Nodes\%computername% Active Connections.txt"
        )

)

endlocal
exit /b