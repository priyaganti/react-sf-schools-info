import React, { Component } from 'react';
import './App.css';
import logo from './images/school.jpg';
import Schools from './Schools.js';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">San Francisco Schools</h1>
        </header>
        <Schools />
      </div>
    );
  }
}

export default App;
