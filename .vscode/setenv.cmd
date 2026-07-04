@echo off
set "JAVA_HOME=C:\Installed\jdk-21"
set "PATH=%JAVA_HOME%\bin;%PATH%"
set "JAVA_OPTS=-Djavax.net.ssl.keyStore=%JAVA_HOME%\lib\security\cacerts -Djavax.net.ssl.keyStorePassword=changeit"
set "CARGO_HTTP_CHECK_REVOKE=false"