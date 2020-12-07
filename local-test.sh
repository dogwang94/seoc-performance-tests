#!/bin/bash

export PROJECTS_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )"/. && pwd )"

echo "Using PROJECTS_DIR = $PROJECTS_DIR"

if [ ! -d ${PROJECTS_DIR}/vendor/apache-jmeter-5.2.1 ]; then
	(
		cd ${PROJECTS_DIR}/vendor/
		unzip apache-jmeter.zip || { echo "Could not extract jmeter" ; exit 1; }
	)
fi


if [ ! -f ${PROJECTS_DIR}/vendor/apache-jmeter-5.2.1/bin/jmeter ]; then
	echo "Could not find jmeter script"
	exit 1
fi

echo "Local properties"
cat "${PROJECTS_DIR}/properties/local.properties"

echo "Cleaning old test artifacts"
rm -rf ./logs/ ; mkdir -p logs/report

TESTFILE=./logs/RuntimeResults.csv
REPORTFILE=./logs/demoreport.csv

if [ -f "${TESTFILE}" ]; then
	truncate -s 0 "${TESTFILE}" || { echo "Could not clean old test file ${TESTFILE}" ; exit 1; }
fi

echo "Seeding database"
groovy -Ddb.host=localhost -Ddb.username=tester -Ddb.password=tester utils/Setup.groovy

echo "Running tests"
${PROJECTS_DIR}/vendor/apache-jmeter-5.2.1/bin/jmeter.sh -n \
	-Ddb.host=localhost -Ddb.username=tester -Ddb.password=tester -Ddb.host=localhost -Ddb.name=leaf_users -Ddb.port=3306  \
	-t "${PROJECTS_DIR}/leaf.jmx" -p "${PROJECTS_DIR}/properties/local.properties" -j "${PROJECTS_DIR}/logs/jmeter.log"

echo "Tests complete"
echo "Execution of tests are records in ./logs/RuntimeResults.csv"

if [ -f "${REPORTFILE}" ]; then
	echo "Generating report"
	${PROJECTS_DIR}/vendor/apache-jmeter-5.2.1/bin/jmeter.sh -g "${REPORTFILE}" -o logs/report/
else
	echo "Report file ${REPORTFILE} not found. Skipping report"
fi









