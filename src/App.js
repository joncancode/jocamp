import React, { Component } from 'react';
import './App.css';
import Intro from './components/Intro';
import Journey from './components/Journey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Intro />
        <Journey />
      </div>
    );
  }
}

export default App;
