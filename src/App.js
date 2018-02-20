import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './index.js';
import Board from './index.js';
import Square from './index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Game />
          <Board />
          <Square />
      </div>
    );
  }
}

export default App;
