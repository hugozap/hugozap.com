---
title: Streams concepts in Node (diagrams).
layout: post
category : development
tags : [node, streams]
published: true
---

![intro](/img/streamsslides/intro.png)

In 2014 I presented a talk called "The Power of Streams in JS" for the BogotaJS meetup group.

Recently I found the slides and realized that they may be useful for developers learning how streams work in node. 


<style>
	img{border:none !important;}
</style>


---

Streams in node are great, quoting Dominic Tarr:

> Streams in node are one of the rare occasions when doing something the fast way is actually easier. SO USE THEM. not since bash has streaming been introduced into a high level language as nicely as it is in node." @dominictarr


---


![](/img/streamsslides/readable.png)

Readable streams emit data generated from a data source

---


![](/img/streamsslides/writeable.png)

Writable streams are used to write chunks to a data source

---


![](/img/streamsslides/transform.png)

Transform streams read and process chunks of data and emit them

---


![](/img/streamsslides/duplex.png)

Duplex Streams have two "modes" they can act as writtable streams by receiving chunks and writing them to some datasource, and they can emit chunks of data read from another datasource. 

input and output are independent of each other.

---



![](/img/streamsslides/concat.png)

Concat streams read all the input chunks and create one  grouped chunk of data (e.g from a chunk of words concatenate into a String)

---



![](/img/streamsslides/filter.png)

Filter streams work similar to .filter function for arrays. The only chunks that "pass" are the ones who satisfay some condition.

---


![](/img/streamsslides/split.png)

Split streams split a chunk of data using some separator.

---



![](/img/streamsslides/join.png)

A Join stream intersperse stream chunks with separators

---




![](/img/streamsslides/linetoobject.png)

With trough/through2 you can easily create transform streams. In this example the stream receives an array (each chunk is an array) and transform it into a JSON object.

---


## Mux-Demux

Mux Demux is a technique that allows sending the data chunks of multiple (and different) streams over one channel and read them at the other side of the stream.

In the diagram a sample websocket using the Shoe package is used as the 'channel' that will transport the data chunks from diverse streams.

![](/img/streamsslides/muxdemux.png)









