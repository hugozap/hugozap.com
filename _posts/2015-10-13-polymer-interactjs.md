---
title: Drag and drop with Polymer and InteractJS
layout: post
category : development
tags : [polymer, frontend, web]
published: true
---

Need drag and drop with your Polymer (1+) elements?

You can integrate [InteractJS](http://interactjs.io/), a great library for handling drag/drop behavior.

[Checkout a demo here](http://hugozap.com/polymer-practice/dist/interact-dragdrop1.html#!/polymer-practice/dist/interact-dragdrop1.html) 

## Steps

1. Add interactjs to your proyect
2. Create a simple html file that will act as html import wrapper for interactjs
3. Setup the drop zones and draggables using InteractJS API


### Installing InteractJS

With Bower

```
bower install --save interactjs
```

### Create wrapper for Interact

Create an .html file '[interact-wrapper.html](https://github.com/hugozap/polymer-practice/blob/master/app/elements/interact-wrapper.html)' 

{% highlight html %}
	<script type="text/javascript" src='../bower_components/interact/dist/interact.min.js'></script>

{% endhighlight %}

### Create reference html for interactjs dependency.

The contents of this html will be only the script reference to the interactjs file, nothing else.


In the example we have a Polymer element called GameBoard that allows cards to be dragged and dropped to the specific drop zones.


	HERE IMAGE


Considerations:

#### Make sure to setup the draggable and dropzones when the DOM elements are there.

If you use templates inside your component markup, don't use the ready/attached event to directly setup your elements, because the elements may not be on the DOM yet. With dom-repeat templates use the event dom-change to be sure that the elements are present.



