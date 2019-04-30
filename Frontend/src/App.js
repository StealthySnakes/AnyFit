import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes.js'
=======
import AccountHome from './components/accountPage/AccountHome';
import Login from './components/Login';
import WorkoutGenerator from './components/WorkoutGenerator';
import WorkoutPage from './components/WorkoutPage';
import StopWatch from './components/StopWatch';
>>>>>>> frontend


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>

          <Switch>
            { ROUTES.map(x =><Route key={x.path} {...x} /> ) }
          </Switch>

        </Router>

      </div>
    );
  }
}

export default App;
