---
title: Rethinking Accessibility
layout: post
category : software
tags : [web,accessibility]
published: true
---
{% include JB/setup %}

[Work in Progress]
        
Most of the accessibility resources out there focus on just one type of accessibility. That is, making a Web site easier to use to people with vision problems. From using contrasting colors, to adding special attributes for screen readers. The site structure is the same, but the goal is to make it less hard to use.

This is a very limited view of what the Web could be in terms of accessibility. 

## Issues with current Web accessibility guidelines and checklists.

Because the current accessibility principles are somewhat standard, there are lists that can be used to check against this principles. However, a developer can follow the guidelines and still create a Website that users cannot use. Its better than nothing but still far from ideal. 

I've been working on programming workshops for deaf students. A big challenge for them is the text oriented nature of most programming resources, and the lack of videos with sign languange interpretation. I was not aware that for most of them, written language is not natural, and they usually get confused with long paragraphs. Having subtitles for videos is also problematic, because again, that's not how they communicate and its common for them to get lost.  ( Visual, concise explanations work well here )

So even if a Website passess all the accessibility checks but is heavy on text, with few visuals and the video content was thought only for people who can hear, it would not be accessible for that group.

## Rethinking Accessibility for Web Applications.

Instead of thinking of accessibility as something that's added to the existing web application, it has to be included from the conceptual stages of the project. For a platform to be inclusive some assumptions must be re evaluated.


### Same goal, Multiple experiences

Instead of starting with a single User Experience and later trying to force it into being accesible, a platform can deliver a totally different experience based on the user preferences.  

### User intents

Most Web applications can be defined by user intents: The user end goals

Some example user intents:

- get traffic data
- reserve a parking spot
- search and retrieve articles related to a topic of interest
- register for a local event
- communicate with another user

### Accessible intents.

An accessible application has multiple experiences. Each experience implements the list of intents in a different way. For example


- Traditional Web experience : How most web sites are planned and implemented. Base HTML layout grouped by hierarchy.

- Audio based experience:  A voice based experience can be implemented, with voice commands as main input. Tap, double tap and other swipe gestures can be used as navigation aids too. Voice settings would ideally be set based on user preferences (pitch, speed, etc).

- Visual experience for people with mobility problems: For people with reduced mobility a custom navitation system using eye tracking or wizard base navigation with yes/no could work.

Applications would offer a way to query what experiences are supported, ways to switch between them. 

A user could switch to "audio based experience" and keep interacting with the web application using voice commands. 


### The role of user agents

If we want the Web to be truly accessible, then the browsers must evolve to make it easy to "switch experiences" based on user previously set preferences. 

Right now every time a user visits a web site, the browser sends some data,things like browser version, operative system etc. The application server can use this to make some decisions on the data that would be returned to the client. However, there's now way for a user to set her preferred experience. Ideally the browser would send a list of experiences so the particular experience can be delivered.

### The DOM is just an implementation detail

The web distribution model is the main advantage of the platform. The DOM is just an implementation detail that we may replace with something else. For some web sites, having a WebGL based experience will be a good idea. A user with reduced mobility can use a vibrating device with a button as the controller and a custom experience  that narrates and understands that kind of input.

### Conclusion

Accessibility is much more than optimizing for screen readers.  A web application can be thought as a series of user intents that can be delivered in a different way (experience). Ideally a Web application would offer ways to query supported experiences. Cooperation with the user agent would allow automatic selection of the best experience based on user preferences.




