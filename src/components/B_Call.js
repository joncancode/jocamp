import React, { Component } from 'react';
import './B_Call.css';
import { TweenLite, TimelineLite, SteppedEase } from 'gsap';
import ScrollMagic from './ScrollMagic';

class B_Call extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var item = '#myId';
    // var scene1 = new ScrollMagic.Scene({ triggerElement: item })
    //   .setTween(item, 1.5, {
    //     backgroundColor: 'red',
    //     scale: 3,
    //     borderRadius: '80%',
    //     ease: SteppedEase.config(20)
    //   })
    //   .addTo(controller);

    // var item2 = '#myId2';
    // var scene2 = new ScrollMagic.Scene({ triggerElement: item2 })
    //   .setTween(item2, 0.5, { backgroundColor: 'blue', scale: 3, delay: 0.2 })
    //   .setTween(item2, 0.5, { backgroundColor: 'purple', scale: 2, delay: 1.5 })
    //   .addTo(controller);


      var tl = new TimelineLite();
      var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      tl.add( TweenLite.to('#myId', 0.3, {scale: 3, backgroundColor: 'green'}) );
      tl.add( TweenLite.to('#myId', 1, {backgroundColor: 'purple'}) );
      tl.add( TweenLite.to('#myId2', 1, {backgroundColor: 'blue'}) );

      var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);


      

  }
  
  render() {
    return (
      <div className="B_Call">
        <h1>second </h1>
        <div id="myId">test</div>
        <h1>space in between</h1>
        <div id="myId2">test2</div>
      </div>
    );
  }
}

export default B_Call;
