@ECHO OFF
:: This script provides you to generate Performance Test report by each endpoint.

TITLE SEOC Performance Tests
cls

ECHO Press 1 for /v1/seoc
ECHO Press 2 for /v1/seoc/active
ECHO Press 3 for /v2/seoc
ECHO Press 4 for /v2/seoc/active
ECHO Please wait... Generating Reports.

set /p plan=

if %plan% == 1 goto v1
if %plan% == 2 goto v1-active
if %plan% == 3 goto v2
if %plan% == 4 goto v2-active

:v1
ECHO =========================
ECHO SEOC V1
del /q "C:\seoc-performance-tests\reports\seoc-v1\*"
FOR /D %%p IN ("C:\seoc-performance-tests\reports\seoc-v1\*.*") DO rmdir "%%p" /s /q
"C:\seoc-performance-tests\apache-jmeter-5.4\bin\jmeter" -n -t "C:\seoc-performance-tests\SEOC\seoc-v1.jmx" -l "C:\seoc-performance-tests\reports\seoc-v1\SEOC_v1.jtl" -e -o "C:\seoc-performance-tests\reports\seoc-v1"
PAUSE
exit

:v1-active
ECHO =========================
ECHO SEOC V1 ACTIVE
del /q "C:\seoc-performance-tests\reports\seoc-v1-active\*"
FOR /D %%p IN ("C:\seoc-performance-tests\reports\seoc-v1-active\*.*") DO rmdir "%%p" /s /q
"C:\seoc-performance-tests\apache-jmeter-5.4\bin\jmeter" -n -t "C:\seoc-performance-tests\SEOC\seoc-active-v1.jmx" -l "C:\seoc-performance-tests\reports\seoc-v1-active\SEOC_v1-active.jtl" -e -o "C:\seoc-performance-tests\reports\seoc-v1-active"
PAUSE
exit

:v2
ECHO =========================
ECHO SEOC V2
del /q "C:\seoc-performance-tests\reports\seoc-v2\*"
FOR /D %%p IN ("C:\seoc-performance-tests\reports\seoc-v2\*.*") DO rmdir "%%p" /s /q
"C:\seoc-performance-tests\apache-jmeter-5.4\bin\jmeter" -n -t "C:\seoc-performance-tests\SEOC\seoc-v2.jmx" -l "C:\seoc-performance-tests\reports\seoc-v2\SEOC_v2.jtl" -e -o "C:\seoc-performance-tests\reports\seoc-v2"
PAUSE
exit

:v2-active
ECHO =========================
ECHO SEOC v2 ACTIVE
del /q "C:\seoc-performance-tests\reports\seoc-v2-active\*"
FOR /D %%p IN ("C:\seoc-performance-tests\reports\seoc-v2-active\*.*") DO rmdir "%%p" /s /q
"C:\seoc-performance-tests\apache-jmeter-5.4\bin\jmeter" -n -t "C:\seoc-performance-tests\SEOC\seoc-active-v2.jmx" -l "C:\seoc-performance-tests\reports\seoc-v2-active\SEOC_v2-active.jtl" -e -o "C:\seoc-performance-tests\reports\seoc-v2-active"
PAUSE
exit