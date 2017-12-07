import React, { Component } from 'react';
import './C_Call.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';
import purple from '../images/purple.png';
import blue from '../images/blue.png';

class C_Call extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    // for simple tween //
    // var item = '#myId';
    // var scene1 = new ScrollMagic.Scene({ triggerElement: item })
    //   .setTween(item, 1.5, {
    //     backgroundColor: 'red',
    //     scale: 3,
    //     ease: Elastic.easeOut
    //   })
    //   .addTo(controller);

    // for timeline //
    // var item = '#myId';
    // var tl = new TimelineLite();
    // tl.add( TweenLite.to('#myId', 0.3, {scale: 3, backgroundColor: 'green'}) );
    // tl.add( TweenLite.to('#myId', 1, {backgroundColor: 'purple'}) );
    // tl.add( TweenLite.to('#myId2', 1, {backgroundColor: 'blue'}) );

    // var scene1 = new ScrollMagic.Scene({ triggerElement: item })
    // .setTween(tl)
    // .addTo(controller);
  }

  render() {
    return (
      <div className="C_Call">
        <h1>second </h1>
        <div id="myId">test</div>
        <h1>space in between</h1>
        <div id="myId2">test2</div>
        <div className="background" style={{ backgroundImage: `url(${blue})` }}>
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
          <img className="purple" src={purple} width="200" height="200" />
        </div>
      </div>
    );
  }
}

export default C_Call;
