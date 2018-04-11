---
title: (Android) Build your application and upload the .apk to an ftp server with a bash script
layout: post
category : development
tags : [android, build]
published: true
---


For the build process of a medium size project i'm working on, i need to generate the .apk and upload it to an ftp, i was doing this manually everytime i made changes, this is not optimal so i decided to create a bash script to automate the process.

### Preparing the eclipse project for ant build.


To compile from the command line the build.xml file must created , the following command does that:

	android update -p
	
Now you can call
	
	ant debug
	
To generate the .apk file inside the bin directory of your project. I needed to sign the .apk so instead of debug , release ant task must be called

	ant release
	
**Specifying the key store for apk signing**

My final goal is to upload the signed .apk to an ftp server, where other part of the build process takes place, to sign the .apk you must already have created a key store and alias that you can set in the file "ant.properties" (Create it in the root of your project)

	
	key.store=/path/to/keystore
	key.alias=alias name
	key.store.password=YOUR_PASSWORD
	key.alias.password=YOUR_PASSWORD

**Warning**

Take care when storing passwords in plain text, you can add ant.properties to your .gitignore if you dont want it in your repository.


### Uploading a file to ftp from a bash script.

I tried with the **ftp** command , however it wasn't as straight as i tought.  The ftp command is not really meant to be used from the command line. A better alternative exists and is called [ncftp](http://www.ncftp.com/ncftp/).

(In mac install it with **brew install ncftp** if you have brew package manager)

The command to upload a file is:

	ncftpput -m -u $USER -p $PASS $SERVER $REMOTEDIR $TARGETFILE


### The result

<script src="https://gist.github.com/4614108.js">/** comment required for jekyll bug*/</script>



