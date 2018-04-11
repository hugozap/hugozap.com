---
title: The simplest HTML presentation tool with only CSS using the (:target trick)
layout: post
category : software
tags : [css,web,tools]
published: true
---

Sometimes you just need to create presentation slides quickly. Maybe you don't want to use any tool or package. Just a simple html file without JavaScript

You can save the following html locally, modify it and open the file in the browser. It's great for creating slides quickly without depending on 3rd party services or tools.

[https://github.com/hugozap/quick-talk](https://github.com/hugozap/quick-talk)

### Motivation

I was reading about the CSS :target trick and it occured to me that a  basic presentation tool  is a very simple but useful case. Using just a few lines of CSS and zero JavaScript you can get basic interactivity. 

Here's an image gallery with only CSS, using the :target selector:

<iframe src="http://hugozap.neocities.org/experiments/gallerycss.html" frameborder="0" width="600px" height="500px"></iframe>

## State in CSS

The :target selector gives us the ability to apply different style rules to the current html segment, activated by clicking an anchor with href="#someId".
So if a user clicks a link that points to an HTML segment we can highlight it and hide other segments by using a combination of :not(:target) selectors.

This is similar to the techniques used that require adding an input element of type checkbox so we can use the :checked pseudo selector.

For the previous example this is the relevant CSS code. 

```css
.slide:not(:target) {
    position: fixed;
    /* Replace with custom animation for better transitions */
    transform: translateX(-120%);
}

slide:target {
    position: fixed;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;

}
```

One rule to hide elements that are not the current :target and the other rule to style the current target element.

An unexpected sideffect of using this technique is that everytime we click a link , we add a histoy item. So if we click the browser back button we activate the previous item. This may or may not be what you need. In the case of html slides it's ok.


