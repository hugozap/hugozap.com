---
title: Using physics for natural web animations
layout: post
category : UI
tags : [web,animation,javascript,ui-explorations]
published: true
---
{% include JB/setup %}

I've been experimenting with using spring physics for UI animation and it makes a lot of sense. By using a physics model to move things we manage to get effects that look more natural. They just feel right compared to artificial non natural easings.

The idea is simple, you have an update loop. (Ideally using requestAnimationFrame) and using the t parameter you can get the calculated spring value for that moment in time. Then with the calculated value you have to use it to move/grow/shrink/rotate or whatever variable you are changing.

```javascript
//pseudocode
update(t) {
    ...
    var currentValue = spring(initial, target, t)
    //Do something with currentValue every frame
    ...
}
```

In the previous code we assume some default parameters for the physics model (stiffness/ damping / mass).  

With that in place, you can for example add an event listener to a mouse click and change the 'target' value and currentValue will eventually be equal to target, but meanwhile you will see the animation.

For a concrete implementation you can check [this blog post](https://codepen.io/rachsmith/post/hack-physics-and-javascript-part-3-springs-and-some-other-things) from Rachel Smith


If you are using react, the same concept is used in the popular react-motion module. The usage is very simple

```jsx
<Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
  {interpolatingStyle => <div style={interpolatingStyle} />}
</Motion>
```






