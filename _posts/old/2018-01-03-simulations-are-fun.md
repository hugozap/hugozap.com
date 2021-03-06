---
title: Simulations are fun!
layout: post
category : software
tags : [d3,svg,graphics]
published: true
---

Inspired by Tokyo, I've been experimenting with different techniques to simulate a city and its people. There's been a lot of challenges and it has 
been a great excercise. 

- [View v000000.1 - B&W ](http://tokyosim000001.surge.sh/)
- [View v000000.2 - Some colors, people using portals](http://tokyosim-v00000002.surge.sh/)



## Using a type system for JavaScript

For the first prototype version I used plain JavaScript. I reached a point where not having types was causing some pain. Especially as each world entity has properties that I had to remember. Different entities shared some properties. For example Person and Floor have both positions (x,y) , Floor and Train have both an array of Persons. 

As things were getting more complex adding a type system was needed. I didn't want to spend a lot of time on setup so I went with Flow. After a few hours refactoring the code, the cognitive load was lower again and I could keep focusing on the next challenge. 

## SVG vs canvas vs webgl renderer

I started using SVG and d3.js, this combination is usually used to create charts. I modeled the city as a list of data entites and d3 has a lot of utilities to make it easier to create visualizations with it. The problem with SVG for this use cases is that one has to store the SVG internal nodes to update only those (re creating the SVG would be very expensive). First prototype version woks ok , but I knew that it was time to switch to a more clean approach. Currently I'm working on the canvas renderer (using p5.js)


## Portals

One of the interesting challenges I had to solve was moving one person from one place to another. I have a list of Places and when the entity gets closer to a certain point, it needs to be transfered to other place ( For example, from one building floor to another, or from the building 1st floor to the street)

The solution to this, was to introduce the concept of "Portals". Each portal connects 2 places at specific points (x, y). I created an interface IPortal with all the portal properties. So far I have 2 types of portals:

- Escalators (from floor to floor )
- Building entrance ( from floor to street )


## End goal

I'm working on the rule engine and new renderer now. It started as a personal excercise but I see how it can be used to create some fun 2d things with it.
Watching the world entities go from one place to another is fun and designing/debugging has been a great brain workout so I plan to keep adding some features and release derivative products, maybe just small demos/games.


