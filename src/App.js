import React, { Component } from 'react';
import './App.css';
import A_Intro from './components/A_Intro';
import A_Ordinary from './components/A_Ordinary';
import B_Call from './components/B_Call';


class App extends Component {
  render() {
    return (
      <div className="App">
        <A_Intro />
        <A_Ordinary />
        <B_Call />
      </div>
    );
  }
}

export default App;
