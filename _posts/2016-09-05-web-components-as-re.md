---
title: Web Components as React leaf nodes
layout: post
category : software
tags : [react,ui,web]
published: true
---
{% include JB/setup %}

There's been a lot of discussion regarding the usage of Web Components and their relation with frameworks. As usual in the tech community, people (myself included) sometimes attach their identities to some particular technology and that prevents a healthy discussion.

After some thought I see the value in working with Web Components and using them with current tools/frameworks/libraries. The good thing about Web components is that they can be used in the same way other html elements are used. Common tasks like handling events work the same way as normal DOM elements(myCustomEl.addEventListener) and because WC is a platform feature (with increasing support in all modern browsers) everybody benefits.

Having used Polymer a lot in the past I had some confussion regarding compatibility with React components. My problem was that (like a lot of devs) all the exposure I've had to Web Components has been through Polymer and because Polymer uses additional abstractions and has it's own established development workflow (somewhat separated from the current ecosystem) it was not easy to imagine how to use WC outside of the Polymer way of doing things.

Recently I found about the [a-frame](https://aframe.io/) project. A really interesting VR library for the web that uses Web Components to create scenes in a declarative way. I wanted to try it with a simple react skeleton app ( created using create-react-app ).

I searched for a-frame react and found [aframe-react](https://github.com/ngokevin/aframe-react) a project that converts some of the a-frame primitives to React elements. Curious about what's required to do the conversion I checked [https://github.com/ngokevin/aframe-react/blob/master/src/index.js](https://github.com/ngokevin/aframe-react/blob/master/src/index.js) and there's nothing misterious about it. For example:

```javascript

export class Scene extends React.Component {
  static propTypes = {
    onEnterVR: React.PropTypes.func,
    onExitVR: React.PropTypes.func,
    onLoaded: React.PropTypes.func
  };

  static defaultProps = {
    onEnterVR: () => {},
    onExitVR: () => {},
    onLoaded: () => {}
  };

  attachEvents = el => {
    if (el) {
      el.addEventListener('enter-vr', event => {
        this.props.onEnterVR(event);
      });
      el.addEventListener('exit-vr', event => {
        this.props.onExitVR(event);
      });
      el.addEventListener('loaded', event => {
        this.props.onLoaded(event);
      });
    }
  };

  render() {
    return (
      <a-scene ref={this.attachEvents} {...serializeComponents(this.props)}>
        {this.props.children}
      </a-scene>
    );
  }
}
```

The Custom Web Component element is a-scene and you can see it's being used normally in the render method. The serializeComponents(this.props) call is just a utility method that stringifies components passed as an object, so: someAttr={primitive: box; width: 10} becomes someAttr='primitive: box; width: 10'

For it to work, the a-scene element must be registered previously. That can be done by importing the 'aframe' module or including the script tag in the index.html

I did a quick example including [react-motion](https://github.com/chenglou/react-motion) (physics based animation using springs) and it worked great.

```javascript
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import {Scene, Entity, Sky} from 'aframe-react'
import {Motion,spring} from 'react-motion';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      spherePos: {
        x:0,
        y:0,
        z:0
      }
    }

  }

  componentDidMount() {
    setInterval(function(){
      var x = Math.random()*10
      var y = Math.random()*10
      var z = 10+ Math.random()*10
      this.setState({
        spherePos: {
          x,y,z
        }
      })
    }.bind(this),600)
  }

  render() {
    return (
        <Scene> 
          <Motion defaultStyle={{x: 0,y:0, z:0}} style={{x: spring(this.state.spherePos.x),y: spring(this.state.spherePos.y),z: spring(this.state.spherePos.z)}}>
            {value => <Entity geometry={{primitive:'sphere',radius:3}} material={{color:'red'}} position={[value.x,value.y,-value.z]}/>}
          </Motion>
          
          .... Duplicated non interesting code cut ...

          <Entity camera="userHeight: 1.8" look-controls position={[0,0,10]}></Entity>
          <Entity geometry={{primitive: 'sphere', radius: 0.5}}
          material="color: cyan; metalness: 0.7"></Entity>
          <Entity sky=" " />
       </Scene>
    );
  }
}

export default App;
```
[source here](https://gist.github.com/hugozap/da13f467352fe127c6c47e9ad754ebcb)
This is the result

<blockquote class="twitter-video" data-lang="es"><p lang="en" dir="ltr">React Motion can be used to add physics based animation (spring) to a-frame apps for cool VR or 3D experiences. <a href="https://t.co/KxTh3JbbvM">pic.twitter.com/KxTh3JbbvM</a></p>&mdash; Hugo Zapata (@hugozap) <a href="https://twitter.com/hugozap/status/772298823582437376">4 de septiembre de 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

One of the misconceptions I had with WC is thinking HTML Imports are required (because that's what Polymer components use). That's not true from what I've seen. Just make sure at some point registerElement is called for the custom web component (Usually that's done by the WC npm module)

I hope to keep learning about new usage patters and how to integrate WC in my workflow. Fortunately from what I've seen in recent twitter threads, the Chrome developer relations team is commited to keep promoting WC and their integration with the current ecosystem.



