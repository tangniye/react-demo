import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {

  async getDynamic() {
    const { join } = await import(/* webpackChunkName: "lodash" */ 'lodash')
    return join(['a', 'b', 'c'], '-')
  }

  render() {
    this.getDynamic().then(str => {
      console.log(str)
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
