import React, { Component } from 'react';
import './App.css';

import Hooks from './hooks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hooks type="useState"></Hooks>
      </div>
    );
  }
}

export default App;
