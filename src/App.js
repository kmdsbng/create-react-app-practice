import React, { Component } from 'react';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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

        <Button>
          hoge
        </Button>

        <br />
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <div>
          secret code:
          {process.env.REACT_APP_SECRET_CODE}
        </div>
      </div>
    );
  }
}

export default App;