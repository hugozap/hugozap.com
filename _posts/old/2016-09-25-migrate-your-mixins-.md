---
title: Migrate your mixins to High Order Components
layout: post
category : software
tags : [react,fp,web,javascript]
published: true
---

Note: Although this was written with react in mind, it also applies to similar concepts like "behaviors" in Polymer. However implementation may be different and not that easy with other libraries.

High Order Components in a nutshell are just functions that receives a Component as argument and returns a new component with extended behavior. With them is possible to create new components by composing existing ones.

## What's wrong with mixins?

Dan Abramov explains it well here: [https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html](https://facebook.github.io/react/blog/2016/07/13/mixins-considered-harmful.html)

## Example, handling keydown events

Suppose you have an "overlay" mixin that handles a global keydown event and sets the state property active to false, so when the user presses ESC the active overlays (dropdowns, sidebars, modals) get hidden.

We will create an HOC that receives a component and handles the keydown event for a particular key. When that key is pressed the callback parameter is called passing the element instance as 1st parameter and the DOM event as the 2nd one:

ConnectGlobalKeyHandler.js:

```javascript
export default (Component, key, cb) => {
  return class  extends React.Component {
    static propTypes = {
      name: React.PropTypes.string,
    };

    constructor(props) {
      super(props);
      this.state = {
    
      }
      this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleKeyDown(ev) {
      if (ev.keyCode === key) {
        cb(this, ev)
      }
    }

    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
      
    }

    render() {
      return (
        <Component {...this.props}/>
      );
    }
  }

}
```

With that in place is easy to extend the behavior of an existing component:

### Example: Adding ESC keydown event to a SideBar component

```javascript
/* Connect the ESC global keydown event and call the onCloseClicked property */
const SideBarEsc = ConnectGlobalKeyHandler(SideBar, KeyCodes.ESC, (elem, ev) => {

  if (elem.props.active) {
    elem.props.onCloseClicked();
  }
})
```

### Reusing the same behavior

Suppose we have 3 components (Modal, SideBar, DropDown) and we want all of them to respond in the same way to ESC key being pressed. We can create a specific HOC on top of the previous one:

``` javascript
    const HideOverlayWhenEscPressed = (OverlayComponent) => {
        return ConnectGlobalKeyHandler(OverlayComponent, KeyCodes.ESC, (elem, ev) => {
              if (elem.props.active) {
                elem.props.onCloseClicked();
              }
            })
    }
```

Then it's easy to extend existing components behavior:

```javascript
   class ModalDialog extends React.Component {
    .....
   }

   export default HideOverlayWhenEscPressed(ModalDialog)
```

```javascript
   class DropDown extends React.Component {
    .....
   }

   export default HideOverlayWhenEscPressed(DropDown)
```

You can compose multiple HOC:

```javascript
   class DropDown extends React.Component {
    .....
   }

   export default HighlightWhenHovered(HideOverlayWhenEscPressed(DropDown))
```

What I like the most about this approach is that specific functionality lives on each HOC, and we don't have to deal with a big mixin that usually gets difficult to change over time.



