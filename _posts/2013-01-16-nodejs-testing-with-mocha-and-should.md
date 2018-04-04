---
title: NodeJS testing with Mocha and Should
layout: post
category : development
tags : [nodejs, libraries]
published: true
---
{% include JB/setup %}


There are a lot of frameworks to include tests in your projects, one popular choice is Mocha and the Should package for the assertion syntax.

Links:

[Mocha](http://visionmedia.github.com/mocha/)
[Should](https://github.com/visionmedia/should.js)

## Installation

npm install -g mocha
npm install should

(-g flag used to install mocha globally so it will be possible to use the mocha executable from anywhere)

## Assertions with Should.

Should is a NodeJS module that makes it easy to declare assertions in a kind of natural language. It will throw an exception if the code does not comply with them.

<script src="https://gist.github.com/4	552618.js?file=should_syntax.js">//jekyllfix </script>

Check the should.js documentation or source for all the features.

## Using Mocha and Should

In the following snippet a fake Validator component
will be tested

<script src="https://gist.github.com/4552618.js?file=mocha_test.js">//jekyllfix </script>

## Running the tests with mocha executable

If you invoke mocha from the command line, it will search for a file called tests.js or a directory called tests. You can also specify the name of the test file as:

	mocha mytestfile.js
	
**Presenting the results**

Mocha has a parameter called 'reporter' that allows to get the results in different formats. To list all the avalaible reporters use 

	mocha --reporters
	
**Using the spec reporter**

	mocha -R spec mochatest.js
	
We will get the following:

 ![Mocha results](/img/mocha1.png) 