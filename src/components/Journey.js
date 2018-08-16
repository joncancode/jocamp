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
              fontSize: '26px',
              position: 'relative',
              fontFamily: 'Courier New',
              right: '5%',
              opacity: '0',
            }}
          >
            {steps[i].part}
          </span>

          <img alt="step" src={steps[i].image} width="300" height="200" />
        </div>
        <p
          className="para-text"
          style={{ width: '50%', paddingBottom: '200px', margin: 'auto' }}
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

    new ScrollMagic.Scene({
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
  
      new ScrollMagic.Scene({
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
  
      new ScrollMagic.Scene({
        triggerElement: item3,
        duration: 1000
      })
        .setTween(tl3)
        .setPin(item3)
        .addTo(controller);



          // const item4 = '.section4';
          // const tl4 = new TimelineLite();
          // tl4.add(TweenLite.to('.step', 1.3, {}));
          // tl4.add(TweenLite.to('.step', 1.5, { opacity: 1, backgroundColor: 'pink' }));
      
          // new ScrollMagic.Scene({
          //   triggerElement: item4,
          //   duration: 1000
          // })
          //   .setTween(tl4)
          //   .setPin(item4)
          //   .addTo(controller);

          //   const item5 = '.section5';
          //   const tl5 = new TimelineLite();
          //   tl5.add(TweenLite.to('.step', 1.3, {}));
          //   tl5.add(TweenLite.to('.step', 1.5, { opacity: 1, backgroundColor: 'yellow' }));
        
          //   new ScrollMagic.Scene({
          //     triggerElement: item5,
          //     duration: 1000
          //   })
          //     .setTween(tl5)
          //     .setPin(item5)
          //     .addTo(controller);

          //     const item6 = '.section6';
          //     const tl6 = new TimelineLite();
          //     tl6.add(TweenLite.to('.step', 1.3, {}));
          //     tl6.add(TweenLite.to('.step', 1.5, { opacity: 1, backgroundColor: 'gray' }));
          
          //     new ScrollMagic.Scene({
          //       triggerElement: item6,
          //       duration: 1000
          //     })
          //       .setTween(tl6)
          //       .setPin(item6)
          //       .addTo(controller);
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
