import React, { Component } from 'react';
import './App.css';
import Grid from './Grid';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Minesweeper</h1>
        </header>
        <Grid rows={10} columns={10} mines={20}/>
      </div>
    );
  }
}

export default App;
