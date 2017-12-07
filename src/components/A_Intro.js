import React, { Component } from 'react';
import './A_Intro.css';
import { TweenLite, TweenMax, TimelineLite, Power0 } from 'gsap';
import ScrollMagic from './ScrollMagic';

class A_Intro extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();


      

  }

  
  render() {
    return (
      <div className="A_Intro">
        <div className="container-intro">
        <span className="top-heading">The Monomyth</span>
        </div>
        <div className="trigger">trigger</div>
        </div>
    );
  }
}

export default A_Intro;
