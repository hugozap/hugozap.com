---
title: Share data between user sessions with airpaste
layout: post
category : software
tags : [node, utilities, unix, streams]
published: true
---

I use different user sessions on the same computer to separate
personal / work environments. When I need to share some file or text
between them I use a litte utility called [airpaste](https://github.com/mafintosh/airpaste)
created by [mafintosh](https://github.com/mafintosh/).

It's designed to share text,files or other streams across 2 computers on the same
local network, but works fine across sessions on the same computer.

### Install

1. install nodejs on your computers
2. from the command line type: npm install -g airpaste

### Example:

To share the clipboard contents from a Mac

From Mac 1)

     >  pbpaste | airpaste
     
From computer 2)
     > airpaste
     (outputs) > "This is some text"

This is much more elegant than having to send an email, or sending a skype/messenger message

(Note: pbpaste is not available in linux/windows but there are alternatives for those OSs)

### Sharing a file:

From computer 1)

cat myfile.mp3  | airpaste

From computer 2)

airpaste > myfile.mp3

