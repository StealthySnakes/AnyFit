import React, { Component } from 'react';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';
import Navigation from "./NavigationUnlog";
import {Addimg} from "./Addimg";


class Signup extends React.Component {
  state = {
    corEm: true,
    corUs: true,
    corPas: true,
    imag: false
  };
  render() {
    return (
      <div className="Signup">
        <header className="Signup-header">
        <title>Make an Account</title>
        </header>
        <body>
          <Navigation/>
          <div className="card">
            <div className="panel-heading">
              <h1>Sign Up</h1>
            </div>
            <div className="panel-body">
              <div className="form-group">
                  <label htmlFor="name"></label>
                  <input type="text" name="name" id="email" placeholder="Name"></input>
              </div>
              <div class="form-group">
                <label htmlFor="username"></label>
                <input type="text" name="Username" id="username" placeholder="Username"></input>
              </div>
              <div class="form-group">
                <label htmlFor="email"></label>
                <input type="text" name="Email" id="email" placeholder="Email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="password"></label>
                <input type="text" name="Password" id="password" type="password" placeholder="Password"></input>
              </div>
              <Addimg/>
              <button className="btn btn-primary">Enter</button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Signup;
