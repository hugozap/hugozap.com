---
title: Setting up a linux server as torrent client
layout: post
category : software
tags : [linux]
---
{% include JB/setup %}


I wanted to setup a linux server so it will download torrents to an external drive. I tested this on Mint, but it should work on Ubuntu and other distributions.

1. Install transmission-daemon.

	apt-get install transmission-daemon

After it's installed it will run on port 9091 by default. You can change the port and other settings from the command line ( see transmission-daemon -help)

** Important **

For the changes to be applied properly, first stop the service with:

	service transmission-daemon stop

After changing the settings start the service again
	
	service transmission-daemon start

2. Setup download dir 

	transmission-daemon --download-dir=/path/to/your/folder

3. Add access to IP's ( for Web admin )

	transmission-daemon --allowed=IP HERE

4. From your allowed computer go to 

	myserverip:9091

If everything worked fine you should be able to access the web interface where you can manage your torrent downloads.

