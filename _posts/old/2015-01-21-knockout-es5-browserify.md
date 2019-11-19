---
title: Using knockout es5 plugin with Browserify
layout: post
category : software
tags : [learning_log,git]
---

If you try using the knockout-es5 plugin with browserify you may run into some issues because of the way it detects commonjs system.

While a proper module is published to npm, you can use this version of knockout-es5 that works with browserify.

[https://gist.github.com/hugozap/1fdbd93094809cc7c691](https://gist.github.com/hugozap/1fdbd93094809cc7c691)

( This assumes you have knockout and weakmap dependencies installed)

