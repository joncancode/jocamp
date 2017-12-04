import React, { Component } from 'react';
import './B_Call.css';
import { TweenLite } from 'gsap';

class B_Call extends Component {

    componentDidMount(){

        TweenLite.to(window, 2.8, {scrollTo: '#myId'});
        
        
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
