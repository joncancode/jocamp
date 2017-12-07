import React, { Component } from 'react';
import './X_Intro.css';
import { TweenLite, TweenMax, TimelineLite, Power0 } from 'gsap';
import ScrollMagic from './ScrollMagic';
import purple from "../images/purple.png"

class X_Intro extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

      var item = '.containerIntro';
      var tl = new TimelineLite();
      tl.add( TweenLite.to('.trigger', 0.3, {scale: 3}) );
      tl.add( TweenLite.to('.purple', 1, {x: 20, y: 80}) );
      tl.add( TweenLite.to('.purple', 1, {rotation: 30, x: 20, y: 80}) );

      var scene1 = new ScrollMagic.Scene({ triggerElement: '.trigger' })
      .setTween(tl)
      .addTo(controller);

    // let slideParallaxScene = new ScrollMagic.Scene({
    //   triggerElement: '.bcg',
    //   triggerHook: 1,
    //   duration: '70%'

    // })
    // .setTween(TweenMax.from('.bcg', 1, {y: '-80%', ease:Power0.easeNone}))
    // .addTo(controller)
      

  }

  
  render() {
    return (
      <div className="A_Intro">
        <div className="containerIntro">
        <h1 className="top-head">Intro section </h1>
        <div className="bcg">
        <img className="purple" src={purple} width="200" height="200" />
        </div>
        <p className="trigger">Intro section </p>
        </div>
      </div>
    );
  }
}

export default X_Intro;
