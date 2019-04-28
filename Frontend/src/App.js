import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from './routes.js'


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
