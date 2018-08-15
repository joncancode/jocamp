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

    const item = '.section1';
    const tl = new TimelineLite();
    tl.add(TweenLite.to('.step', 1.3, {}));
    tl.add(TweenLite.to('.step', 1.5, { opacity: 1, y: 50 }));

    const pinnedIntro = new ScrollMagic.Scene({
      triggerElement: item,
      duration: 1000
    })
      .setTween(tl)
      .setPin(item)
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
