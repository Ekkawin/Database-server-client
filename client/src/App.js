import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import firstpage from './component/firstpage';
import result from './component/result';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={firstpage} />
        <Route path="/second" component={result} />
      </div>
    );
  }
}

export default App;
