import React, { Component } from 'react';
import { TweenLite, TimelineLite } from 'gsap';
import ScrollMagic from './ScrollMagic';
import steps from './Step';

class Journey extends Component {
  entireSteps = steps.map((step, i) => {
    return (
      <div key={steps[i].number} className="container">
        <div className={steps[i].number} style={{ display: 'block' }}>
          <span
            className={steps[i].step}
            style={{
              fontSize: '26px',
              position: 'relative',
              fontFamily: 'Courier New',
              right: '5%',
              opacity: '0',
              height: '90px',
              paddingBottom: '100px'
            }}
          >
            {steps[i].part}
          </span>

          <img
            style={{}}
            alt="step"
            src={steps[i].image}
            width="300"
            height="200"
          />
        </div>

        <p
          className="para-text"
          style={{ width: '50%', padding: '50px 0px 200px 0px', margin: 'auto' }}
        >
          {steps[i].description}
        </p>
      </div>
    );
  });

  componentDidMount() {
    const controller = new ScrollMagic.Controller();

    const timedStyling = {
      opacity: 1,
      y: 100,
      color: 'rgba(250,250,0, 1)'
    };

    //section1
    const item1 = '.section1';
    const tl1 = new TimelineLite();
    tl1.add(TweenLite.to('.step1', 0.3, { opacity: 0 }));
    tl1.add(TweenLite.to('.step1', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item1,
      duration: 1000
    })
      .setTween(tl1)
      .setPin(item1)
      .addTo(controller);

    //section2
    const item2 = '.section2';
    const tl2 = new TimelineLite();
    tl2.add(TweenLite.to('.step2', 0.3, { opacity: 0 }));
    tl2.add(TweenLite.to('.step2', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item2,
      duration: 1000
    })
      .setTween(tl2)
      .setPin(item2)
      .addTo(controller);

    //section3
    const item3 = '.section3';
    const tl3 = new TimelineLite();
    tl3.add(TweenLite.to('.step3', 0.3, { opacity: 0 }));
    tl3.add(TweenLite.to('.step3', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item3,
      duration: 1000
    })
      .setTween(tl3)
      .setPin(item3)
      .addTo(controller);

    //section4
    const item4 = '.section4';
    const tl4 = new TimelineLite();
    tl4.add(TweenLite.to('.step4', 0.3, { opacity: 0 }));
    tl4.add(TweenLite.to('.step4', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item4,
      duration: 1000
    })
      .setTween(tl4)
      .setPin(item4)
      .addTo(controller);

    //section5
    const item5 = '.section5';
    const tl5 = new TimelineLite();
    tl5.add(TweenLite.to('.step5', 0.3, { opacity: 0 }));
    tl5.add(TweenLite.to('.step5', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item5,
      duration: 1000
    })
      .setTween(tl5)
      .setPin(item5)
      .addTo(controller);

    //section6
    const item6 = '.section6';
    const tl6 = new TimelineLite();
    tl6.add(TweenLite.to('.step6', 0.3, { opacity: 0 }));
    tl6.add(TweenLite.to('.step6', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item6,
      duration: 1000
    })
      .setTween(tl6)
      .setPin(item6)
      .addTo(controller);

    //section7
    const item7 = '.section7';
    const tl7 = new TimelineLite();
    tl7.add(TweenLite.to('.step7', 0.3, { opacity: 0 }));
    tl7.add(TweenLite.to('.step7', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item7,
      duration: 1000
    })
      .setTween(tl7)
      .setPin(item7)
      .addTo(controller);

    //section8
    const item8 = '.section8';
    const tl8 = new TimelineLite();
    tl8.add(TweenLite.to('.step8', 0.3, { opacity: 0 }));
    tl8.add(TweenLite.to('.step8', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item8,
      duration: 1000
    })
      .setTween(tl8)
      .setPin(item8)
      .addTo(controller);

    //section9
    const item9 = '.section9';
    const tl9 = new TimelineLite();
    tl9.add(TweenLite.to('.step9', 0.3, { opacity: 0 }));
    tl9.add(TweenLite.to('.step9', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item9,
      duration: 1000
    })
      .setTween(tl9)
      .setPin(item9)
      .addTo(controller);

    //section10
    const item10 = '.section10';
    const tl10 = new TimelineLite();
    tl10.add(TweenLite.to('.step10', 0.3, { opacity: 0 }));
    tl10.add(TweenLite.to('.step10', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item10,
      duration: 1000
    })
      .setTween(tl10)
      .setPin(item10)
      .addTo(controller);

    //section11
    const item11 = '.section11';
    const tl11 = new TimelineLite();
    tl11.add(TweenLite.to('.step11', 0.3, { opacity: 0 }));
    tl11.add(TweenLite.to('.step11', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item11,
      duration: 1000
    })
      .setTween(tl11)
      .setPin(item11)
      .addTo(controller);

    //section12
    const item12 = '.section12';
    const tl12 = new TimelineLite();
    tl12.add(TweenLite.to('.step12', 0.3, { opacity: 0 }));
    tl12.add(TweenLite.to('.step12', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item12,
      duration: 1000
    })
      .setTween(tl12)
      .setPin(item12)
      .addTo(controller);

    //section13
    const item13 = '.section13';
    const tl13 = new TimelineLite();
    tl13.add(TweenLite.to('.step13', 0.3, { opacity: 0 }));
    tl13.add(TweenLite.to('.step13', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item13,
      duration: 1000
    })
      .setTween(tl13)
      .setPin(item13)
      .addTo(controller);

    //section14
    const item14 = '.section14';
    const tl14 = new TimelineLite();
    tl14.add(TweenLite.to('.step14', 0.3, { opacity: 0 }));
    tl14.add(TweenLite.to('.step14', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item14,
      duration: 1000
    })
      .setTween(tl14)
      .setPin(item14)
      .addTo(controller);

    //section15
    const item15 = '.section15';
    const tl15 = new TimelineLite();
    tl15.add(TweenLite.to('.step15', 0.3, { opacity: 0 }));
    tl15.add(TweenLite.to('.step15', 1.5, timedStyling));

    new ScrollMagic.Scene({
      triggerElement: item15,
      duration: 1000
    })
      .setTween(tl15)
      .setPin(item15)
      .addTo(controller);
  }

  render() {
    return <div>{this.entireSteps}</div>;
  }
}

export default Journey;
