import React, { Component } from 'react';
import './B_Call.css';
import { TweenLite, TimelineMax, TweenMax, Elastic } from 'gsap';
import ScrollMagic from './ScrollMagic';

class B_Call extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var item = '#myId';
    var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(item, 1.5, { backgroundColor: 'red', scale: 3, ease: Elastic.easeOut })
      .addTo(controller);

    var item2 = '#myId2';
    var scene2 = new ScrollMagic.Scene({ triggerElement: item2 })
      .setTween(item2, 0.5, { backgroundColor: 'blue', scale: 5, delay: 0.2 })
      .addTo(controller);

      //  var timeline = new TimelineMax();
      //  var tween1 = TweenMax.from("#myId", 0.7, {x: 100});
      //  var tween2 = TweenMax.to("#muId2", 0.7, {y: 100});
      //  timeline
      //     .add(tween1)
      //     .add(tween2);
      //  scene.addTween(timeline);
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
