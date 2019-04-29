import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';
import {Addimg} from "./Addimg";
import Navigationunlog from './NavigationUnlog';



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
          <Navigationunlog></Navigationunlog>
          <div className="card">
            <div className="panel-heading">
              <h1>Sign Up</h1>
            </div>
            <div className="panel-body">
              <div className="form-group">
                  <label htmlFor="name"></label>
                  <input type="text" className='form-control' name="name" id="name" placeholder="Name"></input>
              </div>
              <div class="form-group">
                <label htmlFor="username"></label>
                <input type="text" className='form-control' name="Username" id="username" placeholder="Username"></input>
              </div>
              <div class="form-group">
                <label htmlFor="email"></label>
                <input type="email" className='form-control' name="Email" id="email" placeholder="Email"></input>
              </div>
              <div className="form-group">
                <label htmlFor="password"></label>
                <input type="text" className='form-control' name="Password" id="password" type="password" placeholder="Password"></input>
              </div>
              <h1 class="imghead">Upload Avatar:</h1>
              <img src="https://placehold.it/150x150" width="150" height="150"></img>
              <div className="form-group">
                <label htmlFor="img"></label>
                <input type="text" className='form-control' name="Img" id="addimg" placeholder="Add image link here"></input>
              </div>
              <button className="btn btn-primary">Enter</button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Signup;
