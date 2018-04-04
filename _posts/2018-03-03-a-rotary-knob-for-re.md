---
title: A rotary knob for React
layout: post
category : software
tags : [react,components,ui,ux]
published: true
---
{% include JB/setup %}

A few days ago, I published [react-rotary-knob](https://github.com/hugozap/react-rotary-knob). 

![knob](/img/knobdemo.png)

Even though is a component with a simple API, there were multiple challenging aspects of building it, some of them:

- If the knob is small, how to handle the touch interactions? ( it has to feel natural).
- Be precise.
- Support for mobile.
- Support for keyboard events.
- Play well with other form components (focus).
- Support custom skins.

### Custom skins

The Knob can be skinned using SVG (see the default skin). As long as the SVG file has an element with id "knob" and its centered it will work. For a reference check the [default skin](https://github.com/hugozap/react-rotary-knob/blob/master/src/knobdefaultskin.js). I'm currently working on a custom skin pack.

Thanks to [react-samy-svg](https://github.com/hugozap/react-samy-svg) is possible to build components based on SVG files without hardcoding the SVG. 

### Precision mode

![Precision mode](https://camo.githubusercontent.com/79100d18d391d22dd35c7ac7f956cc93cab72eee/687474703a2f2f6875676f7a61702e6769746875622e696f2f72656163742d726f746172792d6b6e6f622f696d672f6b6e6f622d6261736963322e676966)

By adding a minimum lock distance we avoid the sudden 'jumps' when dragging the Knob, this works well with the non limited dragging. If more precision is needed then a larger drag distance can be used. 


### Demos

Try it yourself:

- [Controlling Oscillator parameters (WebAudio)](http://audio-thing2.surge.sh/)
- [Component storybook](https://hugozap.github.io/react-rotary-knob/storybook)




