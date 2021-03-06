import React, { Component } from 'react';
import { TweenLite, TweenMax, TimelineLite, Power0 } from 'gsap';
import ScrollMagic from './ScrollMagic';
import tie from '../images/Intro/tie.jpg';

class Intro extends Component {
  componentDidMount() {
    const controller = new ScrollMagic.Controller();

    const item = '.intro-text';
    const tl = new TimelineLite();
    tl.add(TweenLite.to('.intro-text', 1.5, { opacity: 1, y: 50 }));

    const scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);

    const item2 = '.tie img';
    const tl2 = new TimelineLite();
    tl2.add(TweenLite.to('.tie', 0.5, { opacity: 1, x: 10 }));
    tl2.add(TweenLite.to('.tie', 2.5, { opacity: 0, x: '90%', y: '100' }));

    const scene2 = new ScrollMagic.Scene({
      triggerElement: item2,
      duration: '100%'
    })
      .setTween(tl2)
      .addTo(controller);

    const item3 = '.lucas-intro';
    const tl3 = new TimelineLite();
    tl3.add(TweenLite.to('.lucas-intro', 2.5, { opacity: 1, x: 150 }));
    tl3.add(TweenLite.to('.lucas-intro2', 2.5, { opacity: 1, x: -150 }));

    const scene3 = new ScrollMagic.Scene({ triggerElement: item3 })
      .setTween(tl3)
      .addTo(controller);
  }

  render() {
    return (
      <div className="container" >
        <div style={{ height: '120vh', backgroundColor: 'rgba(0,0,0, 1)' }}>
          <del style={{ color: 'rgba(255,255,250, 0.3)' }}>
            <p
              className="intro-text"
              style={{
                color: 'rgba(250,250,0, 1)',
                align: 'center',
                margin: 'auto',
                fontSize: '64pt',
                fontFamily: 'Courier New',
                maxWidth: '60%'
              }}
            >
              <i>Star Wars</i>
              <br />
              {'&'} The Hero's Journey.
            </p>
          </del>
        </div>
        <div
          className="tie"
          style={{
            paddingTop: '100px',
            paddingBottom: '200px',
            color: 'rgba(255,255,250, 1)',
            float: 'left',
            position: 'relative',
            opacity: '0.0'
          }}
        >
          <img alt="tie" src={tie} width="400" height="300" />
        </div>
        <p
          className="lucas-intro"
          style={{
            color: 'rgba(255,255,250, 1)',
            width: '30%',
            fontSize: '32px',
            margin: '800px 100px 0 0',
            position: 'relative',
            fontFamily: 'Courier New',
            opacity: '1'
          }}
        >
          George Lucas was an admirer of Joseph Campbell, who popularized the
          Hero's Journey.{' '}
        </p>
        <br />
        <p
          className="lucas-intro2"
          style={{
            color: 'rgba(255,255,250, 1)',
            width: '30%',
            fontSize: '32px',
            marginTop: '200px',
            paddingBottom: '300px',
            position: 'relative',
            fontFamily: 'Courier New',
            float: 'right',
            opacity: '1'
          }}
        >
          The 1977 film directly reflected the steps outlined in The Hero with a
          Thousand Faces.
        </p>
      </div>
    );
  }
}

export default Intro;
