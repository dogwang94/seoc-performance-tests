#!/bin/bash
sudo su -
yum install java-1.8.0-openjdk-headless.x86_64 -y
yum install -y wget
yum install vim -y
yum install unzip -y
wget http://mirrors.gigenet.com/apache//jmeter/binaries/apache-jmeter-5.1.1.tgz
tar -xvf apache-jmeter-5.1.1.tgz

# Example running a stress test: /root/apache-jmeter-5.1.1/bin/jmeter -n -t /root/perf_tests/PerfTest/Scripts/DST_APItest-052019-40Thread.jmx -l testResults.jml

wget -O apache-jmeter-5.1.1/lib/ext/plugins-manager.jar http://search.maven.org/remotecontent?filepath=kg/apc/jmeter-plugins-manager/1.3/jmeter-plugins-manager-1.3.jar
wget -O apache-jmeter-5.1.1/lib/cmdrunner-2.2.jar http://search.maven.org/remotecontent?filepath=kg/apc/cmdrunner/2.2/cmdrunner-2.2.jar
java -cp apache-jmeter-5.1.1/lib/ext/plugins-manager.jar  org.jmeterplugins.repository.PluginManagerCMDInstaller

chmod 777 -R apache-jmeter-5.1.1

apache-jmeter-5.1.1/bin/PluginsManagerCMD.sh install jpgc-casutg
apache-jmeter-5.1.1/bin/PluginsManagerCMD.sh install jpgc-ggl
apache-jmeter-5.1.1/bin/PluginsManagerCMD.sh install