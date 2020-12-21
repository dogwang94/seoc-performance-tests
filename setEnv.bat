@echo off
rem The first line stops Windows from echoing the commands to the command window.

set CLASSPATH=

set JAVA_HOME="C:\Program Files\Java\jdk1.8.0_271"
set PATH=%JAVA_HOME%\bin;%PATH% 

rem Set JMETER_HOME environment variable and insert into default path.

set JMETER_HOME="C:\seoc-performance-tests\apache-jmeter-5.4"
set PATH=%JMETER%\bin;%PATH%

set JMETER_RUN="C:\seoc-performance-tests\jmeter"

rem Display environment variables for verification
echo Verify current build environment settings:
echo CLASSPATH:     %CLASSPATH%          (should be unset)
echo JAVA_HOME:     %JAVA_HOME%
echo JMETER_HOME:   %JMETER_HOME%
echo JMETER_RUN:   %JMETER_HOME%
echo .
echo PATH:          %PATH%
echo .

rem GoTo JMETER_RUN directory
d:
cd %JMETER_RUN%