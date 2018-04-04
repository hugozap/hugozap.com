---
title: Web sockets and streams (boilerplate)
layout: post
category : software
tags : [streams]
published: true
---
{% include JB/setup %}

[Check the repository on GitHub](https://github.com/hugozap/basic-realtime-boilerplate)

Streams are one of the most powerful way to express data flow operations. And the way Node implemented them is great. I recommend you to spend some time [Learning them](https://github.com/substack/stream-handbook).

This boilerplate project uses [shoe](https://github.com/substack/shoe) to add a stream interface to a websocket so you can pipe other streams from/to.  It's very simple but serves as an starting point.

In the browser shoe is also used, and browserify is used to compile.

## Setup

* clone the repository
* Install dependencies (npm install)
* node server ( to start the web server )

By default it will run on port 9999

* Open the page from multiple browsers /devices
* Write a message to broadcast it to the connected peers.

The magic of Streams allows you to connect any stream in the server or the browser, so you could be streaming UI events / sensor data / etc. 


[Check the repository on GitHub](https://github.com/hugozap/basic-realtime-boilerplate)

