---
title: Thoughts on MobX for large projects
layout: post
category : software
tags : [mobx,react,frontend]
published: true
---
{% include JB/setup %}
        
[WIP]

# Some Things I Learned about MobX

I've been working with MobX for a while and these are some
of the lessons I've learned. Some of them are personal
preferences. I feel there's still a lot of exploration to do before
standard patterns emerge that answer the question of how to structure the application state with mobx.


*Note:* There are some libraries out there that help to structure the stores. In this post I'm interested in exploring solutions with plain mobx before introducing more concepts and dependencies.



## Split UI and Application State?

When learning mobx I found a recommendation somewhere on
having a store for UI related stuff and another for 
application model stuff. This sounds good in theory, 
however as both UI and App stores started growing some issues appeared:

Properties in the UI state may belong to different logical groups, so
having them in the same artifact (The UIState mobx store) didn't feel good,
when working on a feature, I'm not interested in UI state properties that belong to another feature and scanning
the file looking for them was annoying. 


Based on the previous reflection, I realized that the distinction of UI state vs App State was not being helpful for the project. A mobx store is an application artifact and everything there has to do with the UI, so instead of having a separated store for UI things, we now have 1 store per logical unit. In our case we chose subsystems like authentication,search,admin etc, but I guess this depends on the nature of the project.


## Domain logic on mobx Stores

With computed fields, some logic can be included in the mobx stores. It's easy to start adding domain logic there, however I don't think this is a good idea. Mobx stores are just an mechanism to update the view in a smart way, but they are a technical artifact. Domain model rules should not have anything to do with mobx terminology. 

A better approach is to have the business rules in another module that nows nothing about mobx. From the mobx store, it's easy to have a computed field that delegates the calculation to the domain logic module(s).

Testing the domain rules is easier if they are separated from the mobx terminology.

## How to structure a store?

For complex UI's the stores can get pretty messy and navigating them can be tricky. A mix of properties, computed fields and actions can turn into spaguetti. A practical solution to this problems include:

- If using a single file per store, group properties, actions and computed fields (Some people may prefer to group them by logical concerns)

- Move actions to a separated file: With this approach, the mobx store gets splitted into multiple files

	An example stores structure:
	
  - search(Search Store folder)
    - store.js (properties are declared there, actions are imported here)
    - actions.js (extract the actions into a separate file)
    - computed.js (Worthy if there's a lot of computed fields)
  - users (Users Store folder)
  	- store.js
  	- actions.js
  	- computed.js


Structuring stores this way has the benefit of making it easy to locate things. When working in a feature
we can jump quickly to the related properties or actions of the feature/subsystem we are working on ignoring
everything else. 


## TLDR

- Everything in the mobx store is related to the UI so group by logical units (subsystems, entities, use cases) instead of UI vs App State.

- Place domain logic in plain JS modules (that now nothing of MobX terminology) and import them from your stores 
- Experiment with different Store layouts. Optimize for maintenability.







