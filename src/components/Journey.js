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
            className="step"
            style={{
              fontSize: '32px',
              position: 'relative',
              fontFamily: 'Courier New',
              right: '5%',
              opacity: '0',
              width: '10%'
            }}
          >
            {steps[i].part}
          </span>

          <img alt="step" src={steps[i].image} width="300" height="200" />
        </div>
        <p
          className="para-text"
          style={{ width: '100%', marginBottom: '300px' }}
        >
          {steps[i].description}
        </p>
      </div>
    );
  });

  componentDidMount() {
    const controller = new ScrollMagic.Controller();

    const item1 = '.section1';
    const tl1 = new TimelineLite();
    tl1.add(TweenLite.to('.step', 1.3, {}));
    tl1.add(TweenLite.to('.step', 1.5, { opacity: 1, y: 50 }));

    const pinnedIntro = new ScrollMagic.Scene({
      triggerElement: item1,
      duration: 1000
    })
      .setTween(tl1)
      .setPin(item1)
      .addTo(controller);

      const item2 = '.section2';
      const tl2 = new TimelineLite();
      tl2.add(TweenLite.to('.step', 1.3, {}));
      tl2.add(TweenLite.to('.step', 1.5, { opacity: 1, color: 'green' }));
  
      const pinnedIntro2 = new ScrollMagic.Scene({
        triggerElement: item2,
        duration: 1000
      })
        .setTween(tl2)
        .setPin(item2)
        .addTo(controller);

      const item3 = '.section3';
      const tl3 = new TimelineLite();
      tl3.add(TweenLite.to('.step', 1.3, {}));
      tl3.add(TweenLite.to('.step', 1.5, { opacity: 1, backgroundColor: 'blue' }));
  
      const pinnedIntro3 = new ScrollMagic.Scene({
        triggerElement: item3,
        duration: 1000
      })
        .setTween(tl3)
        .setPin(item3)
        .addTo(controller);
  }

  render() {
    return (
      <div>
        {this.entireSteps}
      </div>
    );
  }
}

export default Journey;
