import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navigation.css';
// import './AccoutHome.css';
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state={
        search:""
      }
  }

  render() {
    if(this.props.hideNav===true){
      return (
        <>
        <Navbar bg="primary" variant="light" sticky="top">
          <img
            alt=""
            src={Logo}
            width="100"
            className="d-inline-block align-top"
            />



        </Navbar>
        </>);
      }
    else{
      return (
          <>
              <Navbar bg="primary" variant="light" sticky="top">
                  <img
                      alt=""
                      src={Logo}
                      width="100"
                      className="d-inline-block align-top"
                  />



                  <Nav className="ml-auto">


                        
                          <Nav.Link href="/login">
                              Log Out
                            </Nav.Link>






                  </Nav>
              </Navbar>
          </>);
      }

  }
}

export default Navigation;
