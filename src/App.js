import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  click = () => {
    fetch('http://localhost:8080/api')
      .then(res => {
        return res.json()
      })
      .then (res => {
        console.log(res);
      })
  }
  
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.click}>PRESS</button>
      </div>
    );
  }
}

export default App;
