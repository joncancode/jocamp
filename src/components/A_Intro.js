import React, { Component } from 'react';
import { TweenLite, TweenMax, TimelineLite, Power0 } from 'gsap';
import ScrollMagic from './ScrollMagic';
import tie from '../images/A_Intro/tie.jpg';

class A_Intro extends Component {
  componentDidMount() {
    var controller = new ScrollMagic.Controller();

    var item = '.intro-text';
    var tl = new TimelineLite();
    tl.add(TweenLite.to('.intro-text', 1.5, { opacity: 1, y: 50 }));

    var scene1 = new ScrollMagic.Scene({ triggerElement: item })
      .setTween(tl)
      .addTo(controller);

      var item2 = '.tie';
      var tl2 = new TimelineLite();
      tl2.add(TweenLite.to('.tie', 0.1, { opacity: 1, x: 10, }));
      tl2.add(TweenLite.to('.tie', 2.5, { opacity: 0.0, x: 800, y: 100 }));
  
      var scene2 = new ScrollMagic.Scene({ triggerElement: item2 })
        .setTween(tl2)
        .addTo(controller)

        var item3 = '.lucas-intro';
        var tl3 = new TimelineLite();
        tl3.add(TweenLite.to('.lucas-intro', 2.5, { opacity: 1, x: 150 }));
        tl3.add(TweenLite.to('.lucas-intro2', 2.5, { opacity: 1, x: -150 }));
    
        var scene3 = new ScrollMagic.Scene({ triggerElement: item3 })
          .setTween(tl3)
          .addTo(controller)
  }

  render() {
    return (
      <div className="container" style={{width: "100%"}}>
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
              <i>Star Wars</i><br/>{'&'} The Hero's Journey.
            </p>
          </del>
        </div>
        <div className="tie"
          style={{
            paddingTop: '100px',
            paddingBottom: '200px',
            color: 'rgba(255,255,250, 1)',
            float: 'left',
            position: 'relative',
            opacity: '0.0'
          }}>
          <img alt="tie" src={tie} width="400" height="300" />
          </div>
          <p className="lucas-intro" style={{
            color: 'rgba(255,255,250, 1)',
            width: '30%',
            fontSize: '32px',
            margin: '800px 100px 0 0',
            position: 'relative',
            fontFamily: 'Courier New',
            opacity: '1'}} >George Lucas was an admirer of Joseph Campbell, who popularized the Hero's Journey. </p><br/>
            <p className="lucas-intro2" style={{
            color: 'rgba(255,255,250, 1)',
            width: '30%',
            fontSize: '32px',
            marginTop: '200px',
            position: 'relative',
            fontFamily: 'Courier New',
            float: 'right',
            opacity: '1'}}>The 1977 film directly reflected the steps outlined in The Hero with a Thousand Faces.</p>
      </div>
    );
  }
}

export default A_Intro;
