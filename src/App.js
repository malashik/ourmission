import React, { Component } from 'react';
import logo from './logo.svg';
import Ourmission from './ourmission/ourmission';
import './App.css';

class App extends Component {
  render() {
    return (
      <Ourmission title="our mission" text="Our mission is to become the most respected nearshore software delivery partner in Europe, championing quality over revenue, recruiting and retaining the 'best of the best', and by doing software development...properly. "/>
    );
  }
}

export default App;
