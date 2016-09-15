@echo off

setlocal
REM set TARGET=Snippet1
REM set JAVAFILE = Snippet1.java
REM set CLASSFILE = Snippet1.class
REM  set JAVA_HOME= "C:\Program Files\Java\jdk1.6.0_07"
REM set PATH =  %JAVA_HOME%\bin;%PATH%
REM CATALINA_HOME = C:\Program Files\\Apache Software Foundation\Tomcat 6.0
REM %CLASSPATH% = .;%CATALINA_HOME%\lib\servlet-api.jar;%CATALINA_HOME%\lib\jsp-api.jar;
REM JAVA_HOME = C:\Program Files\java\jdk1.6.0_07
REM echo %CLASSPATH%

cd /d %~dp0
REM set CLASSPATH=F:\eclipse3.5.1EE\eclipse\plugins\org.eclipse.swt.win32.win32.x86_3.5.2.v3557f.jar;%CLASSPATH%
REM set CLASSPATH=F:\JavaScript\rhino1_7R1\js.jar;%CLASSPATH%
REM javac -deprecation -encoding utf-8 -classpath ".;%CLASSPATH%" Snippet1.java

cls
@echo on
set JAVA_HOME=C:\Program Files\Java\jdk1.8.0_102
set PATH =%JAVA_HOME%\bin;%PATH%
ant %1 %2 %3 %4 %5 %6 %7 %8 %9
pause
@echo off
REM jar cfm Snippet1.jar MANIFEST.txt *.class
REM pause

endlocal
