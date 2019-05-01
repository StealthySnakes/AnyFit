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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
        <WorkoutPage/>
      </div>
    );
  }
}

export default App;
