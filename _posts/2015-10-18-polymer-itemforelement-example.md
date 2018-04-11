---
title: Polymer 1.0+ itemForElement example
layout: post
category : development
tags : [polymer]
published: true
---

In Polymer sometimes you need to access the data item bound
to a DOM element inside a dom-repeat template. A common use case is when the user
interacts with the element (like click/hover) and you need to display additional properties
of the element.

The way to do that is using the dom-repeat template method itemForElement.


<a class="jsbin-embed" href="http://jsbin.com/lofarabare/embed?html,output">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?3.35.0"></script>

#### Notes:

* Remember that the itemForElement method belongs to the dom-repeat template
* If you need to use itemForElement for initialisation, make sure the template contents are already in the DOM. You can use the "dom-change" event that the template fires when it has updated the DOM. 

