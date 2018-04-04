---
title:  Multiple data streams over just one socket with mux-demux and shoe (node)
layout: post
category : Software
tags : [javascript]
published: true
---
{% include JB/setup %}

In a realtime app it's common to have multiple data streams coming from the server. The mechanism to handle the different connections could include among others:

* frequent pooling to the server (possible perf issues if multiple requests are made at the same time)
* one socket per data stream ( possible perf issues in server and client)

A better alternative

Multiple data streams but just one channel (1 web socket).

This is what mux-demux refers to (multiplex-demultiplex), and can be very useful
for situations when having multiple transport channels (in this case sockets) is not practical.

![Mux-demux](https://github.com/hugozap/shoe-reconnect-muxdemux-example/raw/master/muxdemux.png)

### How to use mux-demux?

To have a reference for future projects i created a minimal sample that demostrates how to send multiple data streams over one connection. The following modules are used:

[shoe](http://github.com/substack/shoe): Creates a stream over a websocket so we can use the same streams Api we love.

[reconnect-core](https://github.com/juliangruber/reconnect-core) : Gives us the ability to execute a method everytime we need to reconnect to the server in case connection is lost.

[mux-demux](https://github.com/dominictarr/mux-demux) : Inject multiple streams into another stream and extract them from the other side.

[browserify](http://github.com/substack/browserify) : Use npm modules in the browser.


The example consist of 9 streams that emit random numbers. We want to send those streams to the browser and display them in realtime.

Animated gif:

![example](https://github.com/hugozap/shoe-reconnect-muxdemux-example/raw/master/sample.gif)

### The code

[Example repository](https://github.com/hugozap/shoe-reconnect-muxdemux-example)

The important part is here (index.js)

<script src="https://gist.github.com/hugozap/66576498c3af911fcc61.js"></script>


### Reconnection.

If the server goes down, we need to reconnect. For this there is a module callled reconnect-core that we can use. 

Check [browser.js](https://github.com/hugozap/shoe-reconnect-muxdemux-example/blob/master/browser.js) to see how to implement it.



