import React, { Component } from 'react';
import './App.css';
import A_Intro from './components/A_Intro';
import B_Ordinary from './components/B_Ordinary';
import C_Call from './components/C_Call';


class App extends Component {
  render() {
    return (
      <div className="App">
        <A_Intro />
        <B_Ordinary />
        <C_Call />
      </div>
    );
  }
}

export default App;
