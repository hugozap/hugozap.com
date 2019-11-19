---
title: KnockoutJS bindings for Bootstrap Date and time pickers.
layout: post
category : Software
tags : [knockoutjs,software,javascript]
published: true
---

[Link to GitHub repository](https://github.com/hugozap/knockoutjs-date-bindings)

[Live demo](http://hugozap.com/demos/knockoutDateBinding/index.html)


Custom bindings in knockout are really cool, they allow us to create components that can be easily re used with the familiar data-bind syntax.


If we have a form for date/time input we have to set up the components to display date and time selectors. Without custom bindings we have to initialize the date/time pickers and know their specific API's so we can attach and event listener to their respective 'change' event and update the viewmodel observable. This is not ideal.

With custom bindings we just use the html attributes that knockout uses to configure the binding:

	<input type="text" data-bind="dateValue:birthday,format='MM/DD/YYY'"/>


### Usage

Include the ko.dateBindings.js file in your html.
Remember to also include the bootstrap date or time picker.

**Datete picker binding:**

	<input type="text" data-bind="dateValue:birthday"/>
	<input type="text" data-bind="dateValue:birthday,format='MM/DD/YYY'"/>

**Time picker binding:**

	<input type="text" data-bind="timeValue:birthday"/>

