import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './Signup.css';
import {Addimg} from "./Addimg";
import Navigationunlog from './NavigationUnlog';
import {SignupRepository} from './../../api/SignupRepository';
import Logo from './../../assets/logo.png';



class Signup extends React.Component {
  signupRepository = new SignupRepository;
  state = {
    nname: '',
    nusername: '',
    npassword: '',
    imag: 'https://placehold.it/150x150',
    id: ''
  };


  newAcc = event =>{
    var acc = {
      name: this.state.nname, 
      username: this.state.nusername,
      password: this.state.npassword,
      image: this.state.imag
    }
    this.setState({
      id: this.signupRepository.addAccount(acc)
    })
  }



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
                  <input type="text" className='form-control' name="name" 
                  id="name" placeholder="Name" 
                  value={this.state.nname} onChange={e => this.setState({nname: e.target.value})}></input>
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
                <input type="text" className='form-control' name="Password" 
                id="password" type="password" placeholder="Password"
                value={this.state.npassword} onChange={e => this.setState({npassword: e.target.value})}></input>
              </div>
              <h1 class="imghead">Upload Avatar:</h1>
              <img src={this.state.imag} width="150" height="150"></img>
              <div className="form-group">
                <label htmlFor="img"></label>
                <input type="text" className='form-control' name="Img" 
                id="addimg" placeholder="Add image link here"
                onChange={e => this.setState({imag: e.target.value})}></input>
              </div>
              <button className="btn btn-primary" >Create Account</button>
            </div>
          </div>
        </body>
      </div>
    );
  }
}

export default Signup;
