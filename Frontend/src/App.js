import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AccountHome from './components/AccountHome';
import Login from './components/Login';
import WorkoutGenerator from './components/WorkoutGenerator';
import WorkoutPage from './components/WorkoutPage';
import WorkoutPageEdit from './components/WorkoutPageEdit';
import StopWatch from './components/StopWatch';
import Signup from './components/SignupPage/Signup';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup/>
      </div>
    );
  }
}

export default App;
