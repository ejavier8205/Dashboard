@echo off
setlocal EnableDelayedExpansion
set HomeDirectory=%~dp0%


cd /d "%HomeDirectory%"

:start
cls
title DataGrabber
Set "RemoteShare=\\192.168.2.68\AllNodesCompilation"

::  CHECK FOR NODE SET ADAPTERS 

        if exist "%HomeDirectory%Nodes\Data\%ComputerName% Adapters ID.txt" (
            goto :NodeDataFound
        ) else (
            echo.
            echo        Adapters data source for Node has not been set...script will exit.
            echo.
            pause >nul 2>nul
            exit

        )

:NodeDataFound
        call "%HomeDirectory%FindAdapter.bat"


        type nul>"%HomeDirectory%Nodes\status\%computername%-Status.txt"



::WAIT FOR 30 SECS TO OBTAIN IP AND GATEWAY
echo    Waiting for adapters to obtain IP...
        timeout /t 30 >nul 2>nul



for /f "tokens=1,2,3 delims=," %%a in ('type "%HomeDirectory%Nodes\%computername% Active Connections.txt"') do (
    Set "Gateway="
    set "SavedStationName=%%a"
    Set "StationName=%%b"
    Set "StationMAC=%%c"
    Set "NoConnection=Disconnected"


            ::echo !StationName! | findstr /i /v "Not Available"
            type nul>"temp.txt"
            if %errorlevel% equ 0 (
                netsh interface ip show addresses name="!StationName!" | find /i "Default Gateway">"temp.txt"

                for /f "tokens=2 delims=:" %%a in  ('TYPE "temp.txt"') do (
                    set "gateway=%%a"
                    set "gateway=!gateway: =!"
                    echo station name: !StationName!        gtwy: !gateway!
                    
                    
                )

                set "MyTime=%time%"
                Set "MyTime=!MyTime: =!"
                if not defined gateway Set "Gateway=Disconnected"
                
                echo !SavedStationName!,!Gateway!,%date%,!Mytime!>>"%HomeDirectory%Nodes\status\%computername%-Status.txt"
            )

)
:: DISABLE AVAILABLE ADAPTERS
echo    Disabling connected adapters...
type "%HomeDirectory%Nodes\%computername% Active Connections.txt"
        for /f "tokens=1,2 delims=," %%a in ('type "%HomeDirectory%Nodes\%computername% Active Connections.txt"') do (
            set "SavedStationName=%%a"
            Set "StationName=%%b"
            echo !StationName!
            netsh interface set interface "!StationName!" disable
        )   

timeout /t 10 >nul 2>nul

:SendData
set "CurrentTime=%time%"
::set "CurrentTime=!CurrentTime: =!"
Set "CurrentTime=!CurrentTime:~6,-3!"
echo !CurrentTime!

if '!CurrentTime!' EQU '15' (
    	copy "%HomeDirectory%Nodes\status\%computername%-Status.txt" "!RemoteShare!" /y
	echo data sent
	goto :start 
) else (
    goto :SendData
)


endlocal
