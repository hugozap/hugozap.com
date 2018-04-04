---
title: Shell script to prompt for parameters and start Cloud9 IDE in a different directory and port
layout: post
category : software
tags : [dotnet, java, android, mobile, date serialization]
published: true
---

I was playing with node.js in linux and wanted to try a js IDE (In Windows i use Notepad++ for web coding (With a lot of snippets)). i read something about Cloud9 some time ago but didn't pay too much attention thinking it was a cool IDE only avalaible online. I was wrong, you can download it and install it locally so i gave it a try.

You can check the steps to install it [here:](http://www.cambus.net/setting-up-a-node-js-development-environment-with-npm-and-cloud9-ide-installed-locally/)

## Creating a bash script that allows workspace selection and automatically start the default browser
I was looking for some way to start cloud9 in the folder i chose, and launch the default web browser to the Cloud9 local installation.

By following the steps in [this forum post](http://ubuntuforums.org/showthread.php?t=1813076) i was able to create a shell script that asks for a folder.


**(I installed node with sudo so i needed to provide the password. I modified the script to capture it.)**

(with the  xdg-open command is possible to launch the default web browser.)

The final script (make sure you have zenity installed, it's required for the dialogs)

	#!/bin/bash

	PROJECT=$(zenity --file-selection --directory --title 'Select a Project Directory')
	PASS=$(zenity --password --title 'sudo password')
	if test -d "${PROJECT}";then
	  echo ${PASS} | sudo -S $HOME/cloud9/bin/cloud9.sh -w "${PROJECT}" -p 3000 &
	  sleep 3
	   xdg-open http://localhost:3000
	fi
	exit


##Some notes

* zenity is the linux tool used to display a prompt window and capture parameters for shell scripts
* The first two lines display dialogs to capture the parameters
* This line: echo ${PASS} | sudo -S $HOME/cloud9/bin/cloud9.sh -w "${PROJECT}" -p 3000 &
  - Sends the password parameter to the sudo command (-S is used to capture stdin )
  - The cloud9 launcher accepts -w (for setting parameter) and -p (changing the port)
  - The last character of the line & allows the script to execute the following command (open the browser) at the same time
* Sleep 3  is need so the browser opens when the cloud9 app is already initialized.

## Conclusion

I love linux versatility and learning about the command line. With good IDE's like Cloud9 that cost zero, there is no excuse to release cool products



