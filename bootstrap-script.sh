#!/bin/bash

#####################################################################################################################################################
# 
# Currently this script will only download the jmeter xml file and execute that one file, later we will abstract that away to download a zip and run 
# a script in that zip
#
# All you need to configre is the tags of the EC2 instance and thus ASG with:
# ... bucket to store the jmeter results, and what test you want run
#
#####################################################################################################################################################



#####################################################################################################################################################

echo "INFO: Launching the jmeter bootstrap script"

echo "INFO: Getting jmeter metadata"
INSTANCE_ID=$(curl -s http://169.254.169.254/latest/meta-data/instance-id)
PRIVATE_DNS_PREFIX=$(curl -s http://169.254.169.254/latest/meta-data/local-hostname | awk -F '.' '{ print $1 }')
FILE_NAME_PREFIX=$(echo $PRIVATE_DNS_PREFIX | tail -c 8)
AWS_REGION=$(curl -s http://169.254.169.254/latest/dynamic/instance-identity/document|grep region|awk -F\" '{print $4}')
JMETER_BUCKET_NAME=$(echo $(aws ec2 describe-tags --filters "Name=resource-id,Values=$INSTANCE_ID" --region $AWS_REGION) | echo $(jq '.Tags') | jq -c '.[]' | grep "jmeterbucket" | $(echo jq '.Value') | sed 's/\"//g')
JMETER_BUCKET_REPORT_FOLDER=$(echo $(aws ec2 describe-tags --filters "Name=resource-id,Values=$INSTANCE_ID" --region $AWS_REGION) | echo $(jq '.Tags') | jq -c '.[]' | grep "jmeterreportfolder" | $(echo jq '.Value') | sed 's/\"//g')
JMETER_BUCKET_SCRIPT_FOLDER=$(echo $(aws ec2 describe-tags --filters "Name=resource-id,Values=$INSTANCE_ID" --region $AWS_REGION) | echo $(jq '.Tags') | jq -c '.[]' | grep "jmeterscriptsfolder" | $(echo jq '.Value') | sed 's/\"//g')
JMETER_BUCKET_SCRIPT=$(echo $(aws ec2 describe-tags --filters "Name=resource-id,Values=$INSTANCE_ID" --region $AWS_REGION) | echo $(jq '.Tags') | jq -c '.[]' | grep "jmeterexescript" | $(echo jq '.Value') | sed 's/\"//g')

#####################################################################################################################################################

# TODO remove this and make better..........
echo "make the temp dirs for now..."
mkdir -p /root/perf_tests/PerfTest/logs
mkdir -p /root/perf_tests/PerfTest/Data
aws s3 cp s3://$JMETER_BUCKET_NAME/$JMETER_BUCKET_SCRIPT_FOLDER/Test_data1-2.csv /root/perf_tests/PerfTest/Data/Test_data1-2.csv --region $AWS_REGION

#####################################################################################################################################################

echo "INFO: Preparing clean workspace and downloading jmeter test scripts"
cd /root
PWDD=$(pwd)
mkdir -p $PWDD/jmeter_stress_test
cd $PWDD/jmeter_stress_test
aws s3 cp s3://$JMETER_BUCKET_NAME/$JMETER_BUCKET_SCRIPT_FOLDER/$JMETER_BUCKET_SCRIPT jmetermain.jmx --region $AWS_REGION
chmod 777 $PWDD/jmeter_stress_test/jmetermain.jmx

#####################################################################################################################################################



#####################################################################################################################################################

echo "INFO: Executing jmeter stress test."
export HEAP="-Xms4096m -Xmx6144m"
/root/apache-jmeter-5.1.1/bin/jmeter -n -t $PWDD/jmeter_stress_test/jmetermain.jmx -l testResults.jml

#####################################################################################################################################################



#####################################################################################################################################################

echo "INFO: Compiling stress test reports and uploading to S3"
mv /root/perf_tests/PerfTest/logs/RuntimeResults.csv $PWDD/jmeter_stress_test
REPORT_FILE_NAME="$(echo $FILE_NAME_PREFIX)_jmeter.zip"
cd ..
zip -r  $REPORT_FILE_NAME $PWDD/jmeter_stress_test/
aws s3 cp $PWDD/$REPORT_FILE_NAME s3://$JMETER_BUCKET_NAME/$JMETER_BUCKET_REPORT_FOLDER/$REPORT_FILE_NAME --region $AWS_REGION

#####################################################################################################################################################