import React, { Component } from 'react';
import './B_Call.css';
import { TweenLite } from 'gsap';
import ScrollMagic from "./ScrollMagic";

class B_Call extends Component {

    componentDidMount(){

      var controller = new ScrollMagic.Controller();
      var item = "#myId";
      var scene = new ScrollMagic.Scene({triggerElement:item})
              .setTween(item, 0.5, {backgroundColor: "red", scale: 3})
              .addTo(controller);
        
        
    }


  render() {
    return (
      <div className="B_Call">
        <h1>second </h1>
        <div id="myId">test</div>
      </div>
    );
  }
}

export default B_Call;
