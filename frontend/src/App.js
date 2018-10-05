import React, { Component } from 'react';
import './App.css';
import SeriesList from './components/seriesList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>FEATHERS</p>
        <SeriesList/>
      </div>
    );
  }
}

export default App;
