---
title: NodeJS cool utils (Minimatch, Glob)
layout: post
category : development
tags : [nodejs, libraries]
published: true
---

In my quest to learn nodejs i like to navigate github and randomly looking at popular nodejs repositories to see it's tests and what problem it solves.

I was looking at Isaac Schlueter repositories ( he is the main developer of nodejs right now).
His github account is [here](https://github.com/isaacs/)

## Minimatch

[Minimatch](https://github.com/isaacs/minimatch) is a minimal pattern matching library
It's useful when you want a quick match and don't want to write regular expressions directly

Eg.

Matching javascript files:

<script src="https://gist.github.com/4416811.js?file=gistfile1.txt"> </script>

Matching paths that end with /bin

<script src="https://gist.github.com/4416811.js?file=gistfile3.txt"> </script>

##Glob

[Glob](https://github.com/isaacs/node-glob) is related to minimatch but navigates de filesystem and returns a list of paths that
match a minimatch expression. This is great to find a list of files or directory paths that match a given expression.

**The globbing concept in bash**

The concept of globbing is part of bash and this allows you to use some kind of filters to find files based on their path(where you cannot/don't want to use regex directly)


For example if you want to find all the files that start with importantFileV and have xml extension you can use

	ls -l importantFileV?.xml 
	
This would return the following results

* importantFileV1.xml, importantFileV2.xml, importantFileV3.xml


There are some cool things you can do with globbing

**Find all files that start with  the word important**
	
	ls -l important* 
	
**Find all files that have version 1 to 5**
	
	ls -l importantFileV\[1-5].js
	
**Find all the files that don't have the word test in them**

>ls -l [^test]* 
	
**Globbing in nodejs**

<script src="https://gist.github.com/4416811.js?file=gistfile2.txt"> </script>

I'm using my blog for documenting my learning process, i hope someone finds this useful too.
