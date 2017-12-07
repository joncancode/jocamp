import React, { Component } from 'react';
import './B_Ordinary.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';

class B_Ordinary extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

      var item2 = '.containerA';
      var tl = new TimelineLite();
      tl.add( TweenLite.to('.containerA', 0.3, {scale: 1, backgroundColor: 'green'}) );
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

export default B_Ordinary;
