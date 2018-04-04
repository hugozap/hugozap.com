---
title: React Motion and A-Frame demo. Animating the camera position using springs
layout: post
category : software
tags : [react,javascript,graphics,3d,vr]
published: true
---

A  demo I created for a BogotaJS presentation about using declarative 3D with a-frame and react. It uses React Motion to animate the camera position naturally.

<iframe src='https://hugozap.neocities.org/x99/' width='80%' height='400px'>unwanted text</iframe>


[Open Demo](https://hugozap.neocities.org/x99/)

[Scene Source](https://github.com/hugozap/visual/blob/master/src/scenes/Spheres.js)

```javascript
import React, { Component } from 'react';
import 'aframe';
import {Scene, Entity, Sky} from 'aframe-react'
import {Motion,spring} from 'react-motion';

class SpheresScene extends Component {

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
            {value => <Entity geometry={{primitive:'sphere',radius:3}} material={{color:'#5fe0aa'}} position={[value.x,value.y,-value.z]}/>}
          </Motion>
          <Motion defaultStyle={{x: 0,y:0, z:0}} style={{x: spring(this.state.spherePos.x),y: spring(this.state.spherePos.y),z: spring(this.state.spherePos.z)}}>
            {value => <Entity geometry={{primitive:'sphere',radius:2}} material="color: #ed9ee6; metalness: 0.1" position={[-value.x/2,value.y/2,-value.z/2]}/>}
          </Motion>
          <Motion defaultStyle={{x: 0,y:0, z:0}} style={{x: spring(this.state.spherePos.x),y: spring(this.state.spherePos.y),z: spring(this.state.spherePos.z)}}>
            {value => <Entity geometry={{primitive:'sphere',radius:2}} material="color: #c3dc74; metalness: 0.1" position={[value.x/4,value.y/4,-value.z/4]}/>}
          </Motion>

 

          <Entity camera="userHeight: 1.8"  position={[0,-2,8]}></Entity>
          
          <Entity sky=" " />
       </Scene>
    );
  }
}

export default SpheresScene;

```