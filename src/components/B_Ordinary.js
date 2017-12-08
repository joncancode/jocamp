import React, { Component } from 'react';
import './B_Ordinary.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import desert from '../images/B_Ordinary/desert.png';
import luke_desert from '../images/B_Ordinary/luke_desert.png';
import suns from '../images/B_Ordinary/suns.png';

class B_Ordinary extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

      var item = '.intro-text-end';
      var tl = new TimelineLite();
      tl.add( TweenLite.to('*', 1.3, {backgroundColor: '#b49ce2'}));
      tl.add( TweenLite.to('.journeyHeader', 0.3, {opacity: 1, x: 30}) );
      tl.add( TweenLite.to('.journeyText', 0.3, {opacity: 1, x: 30}) );
      tl.add( TweenLite.to('.journeyBackground', 0.1, {opacity: 0}) );
      tl.add( TweenLite.to('.journeyBackground', 1, {opacity: 1, y: 30}) );

      var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);


  }
  
  render() {
    return (
      <div className="B_Ordinary">
        <div className="containerB">
        <h2 className="journeyHeader">First Header </h2>
        <p className="journeyText">First section </p>
        <div className="journeyBackground" style={{ backgroundImage: `url(${desert})` }}>
          <p className="para-text">
            Lorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
            risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
            dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec
            dictum nibh a magna dignissim maximus. Suspendisse massa sem,
            blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem
            sit amet posuere varius. Aliquam convallis lacus ac risus suscipit
            sodales. In libero ante, euismod eu sollicitudin in, porttitor nec
            mi.
          </p>
          <img className="luke_desert" src={luke_desert} width="200" height="240" />
          <img className="suns" src={suns} width="500" height="500" />
          <img className="desert" src={desert} width="500" height="500" />
        </div>
        </div>
      </div>
    );
  }
}

export default B_Ordinary;
