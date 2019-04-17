import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AccountHome from './components/AccountHome';
import Login from './components/Login';
import WorkoutGenerator from './components/WorkoutGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountHome/>
      </div>
    );
  }
}

export default App;
