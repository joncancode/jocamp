import React, { Component } from 'react';
import './A_Ordinary.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';

class A_Ordinary extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

      var item2 = '.containerA';
      var tl = new TimelineLite();
      tl.add( TweenLite.to('.containerA', 0.3, {scale: 3, backgroundColor: 'green'}) );
      tl.add( TweenLite.to('.containerA', 1, {backgroundColor: 'pink'}) );
      tl.add( TweenLite.to('.containerA', 1, {backgroundColor: 'blue'}) );

      var scene1 = new ScrollMagic.Scene({ triggerElement: item2 })
      .setTween(tl)
      .addTo(controller);


      

  }
  
  render() {
    return (
      <div className="A_Ordinary">
        <div className="containerA">
        <h1>First section </h1>
        <h1>First section </h1>
        </div>
      </div>
    );
  }
}

export default A_Ordinary;
