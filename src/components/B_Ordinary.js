import React, { Component } from 'react';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
// import desert from '../images/B_Ordinary/desert.png';
// import luke_desert from '../images/B_Ordinary/luke_desert.png';
// import suns from '../images/B_Ordinary/suns.png';
import tattooine from '../images/B_Ordinary/tattooine.png';

class B_Ordinary extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var item = '.bSection';
    var tl = new TimelineLite();
    tl.add(TweenLite.to('.bStep', 1.3, {}));
    tl.add(TweenLite.to('.bStep', 1.5, { opacity: 1, y: 50,  }));

    var pinnedIntro = new ScrollMagic.Scene({
      triggerElement: item,
      duration: 1000
    })
      .setTween(tl)
      .setPin(item)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container" >
        <div className="bSection" style={{  display: 'block' }}>
        <span className="bStep"
            style={{
              fontSize: '32px',
              position: 'relative',
              fontFamily: 'Courier New',
              right: '5%',
              opacity: '0',
              width: '10%',
              
            }}>Part I: The Ordinary World</span>
            
          
          <img alt="tattooine" src={tattooine} width="300" height="200" />
          
            
        </div>
        <p className="bText">First section </p>
        <p className="para-text" style={{ width: '100%' }}>
          BBBBBLorem morbi nec iaculis leo, quis lobortis neque. Ut hendrerit,
          risus in dapibus euismod, nibh leo volutpat elit, vel pharetra odio
          dolor sed tellus. Aliquam erat volutpat. Nulla facilisi. Donec dictum
          nibh a magna dignissim maximus. Suspendisse massa sem, blandit at
          ullamcorper vel, faucibus sed nunc. Etiam interdum sem sit amet
          posuere varius. Aliquam convallis lacus ac risus suscipit sodales. In
          libero ante, euismod eu sollicitudin in, porttitor nec mi.
        </p>
      </div>
    );
  }
}

export default B_Ordinary;
