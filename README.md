# seoc-performance-tests

The SEOC project utilizes these test scripts to continuously verify and test the software.  The scripts will be used as of the development lifecyle and also during major events when the SEOC application architecture has changed signficantly.  The scripts can provide insight into the application performance before deployment to an environment.

## Generate Performance Test Reposts

1. C:\seoc-performance-tests\setEnv.bat
2. C:\seoc-performance-tests\local-run.bat
3. run script to generate reports for below each
    Press 1 for /v1/seoc
    Press 2 for /v1/seoc/active
    Press 3 for /v2/seoc
    Press 4 for /v2/seoc/active
4.  HTML format reports are located under
    cd reports -> seoc-v1
    cd reports -> seoc-v1-active
    cd reports -> seoc-v2
    cd reports -> seoc-v2-active