import React, { Component } from 'react';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import desert from '../images/B_Ordinary/desert.png';
import luke_desert from '../images/B_Ordinary/luke_desert.png';
import suns from '../images/B_Ordinary/suns.png';

class B_Ordinary extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

      var item = '.bHeader';
      var tl = new TimelineLite();
      tl.add( TweenLite.to('.container', 1.3, {}));

      var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);


  }
  
  render() {
    return (
        <div className="container"  style={{width: "100%"}}>
         <p className="bStep" style={{fontSize: '16px', marginTop: '500px'}} >Part I</p>
        <p className="bHeader" style={{fontSize: '48px', }} >The Ordinary World </p>
        <p className="bText">First section </p>
          <p className="para-text"  style={{width: "100%"}}>
            BBBBBLorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
            risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
            dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec
            dictum nibh a magna dignissim maximus. Suspendisse massa sem,
            blandit at ullamcorper vel, faucibus sed nunc. Etiam interdum sem
            sit amet posuere varius. Aliquam convallis lacus ac risus suscipit
            sodales. In libero ante, euismod eu sollicitudin in, porttitor nec
            mi.
          </p>
        </div>

    );
  }
}

export default B_Ordinary;
