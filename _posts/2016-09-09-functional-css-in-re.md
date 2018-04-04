---
title: Functional CSS for your next project
layout: post
category : software
tags : [web,css,tachyons]
published: true
---
{% include JB/setup %}


## What's functional CSS?

Functional CSS is an alternative approach that you can use to define the visual properties and styles of your Web site. It's not about new technologies or libraries, but a set of principles like:

- Write the least amount of CSS stylesheets.
- Use small units to compose your interfaces. These are defined as single purpose CSS classses (e.g w-100 means width:100%)
- Focus on composability and avoid the cascade in CSS

The idea is that you can create most of your layouts without creating custom classes. Instead you use small units (defined as single purpose classes) that do one thing only and when applied to an element exerts the desired change.

E.g

```html
    <div class="dib ph1 w-50 bg-blue" />
``` 
In this case we are using the following css atoms:

- dib: display: inline-block
- ph1: set horizontal padding to one of our predefined scale values (for consistency)
- w-50: set the width to 50%
- bg-blue: set background to blue

## What's wrong with traditional CSS approach?

If you are not familiar with this approach you may be thinking:

- That's not semantic.
- I could easily create a class that groups those declarations.
- the html class will grow.

Regarding 'semantics', the problem is that traditional css thinking implies that semantics relates to the business problem, but that's different from visual semantics. When working with html you are already working with the view, so it's ok to decorate your elements with small classes that define a visual behavior.

## How a traditional CSS evolves until it implodes 

- project starts with a clean css
- devs add classes that represent the application model (not the visual model) like 'user-details, payment-form, company-info1, company-info2, etc...'
- devs decide that they want to avoid rule duplication so they will create parent classes e.g panel-details, panel-details-sub, base-form
- The project grows and things start to require their own rules. Sometimes they look really similar but just override a couple of things, other times just a few rules are shared and the rest is overrided.
- devs keep creating custom rules targetting the specific elements and overriding them e.g #new-person-details, #customerabc-form, etc.
- project keeps growing and devs keep adding classess, sometimes overriding declarations.
- At some point, because the different possible overrides, it's not easy to change a base class without breaking something else, so the CSS class race starts:  Override properties with !important and adding classess at the bottom of the file.
- When a change is required, nobody touches previous declarations anymore and just add a new class that overrides what's needed.

It's not easy to avoid the previous scenario with the traditional CSS best practices. Check the custom css files of some popular sites and you will see that. Other problems:

- It's not easy to optimize, with all the overrides the confidence to change something is lost.

## Compose your UI from small units

By using the functional approach I've found the iteration is faster because we are working directly with the element we want to change. If I see an element declared as 

```html
    <p class="pa2 f4 absolute top-0 w-100 w-25-ns">...</p>
```

It's easy to infer how the component will behave. In this case the element will have a padding value of --second-value-in-default-scale, a font size equal to --fourth-value-in-scale, it'll have absolute positioning,  it's top value will be 0 and it's width equal to 100%. Also w-25-ns means it will have a width = 25% if the screen is not small, that's great we are even specifying responsive behavior conditions. Check  the [tachyons] components for more examples.

Working this way requires a different mindset and may feel weird at the beginning but when you get familiar with the small unit classes (atoms) you will enjoy composing your UI's. also, it's fun. 

Note: Tachyions has a predefined set of distances, font sizes, margins, widths that were created for consistency and proportion but can be changed easily. I've found the defaults will get you far. In any case avoid using magic numbers for css values.

## About duplication 

With this approach the class attribute can be grow a lot. I don't think that's a big deal,  we are using a the same atoms frequently so they will appear a lot on our html. That's a small tradeoff but the benefit is much more important, you can now see the markup and have a better idea of how elements will look.




