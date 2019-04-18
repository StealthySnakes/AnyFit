import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AccountHome from './components/AccountHome';
import Login from './components/Login';
import WorkoutGenerator from './components/WorkoutGenerator';
import WorkoutPage from './components/WorkoutPage';
import StopWatch from './components/StopWatch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <WorkoutPage/>
      </div>
    );
  }
}

export default App;
