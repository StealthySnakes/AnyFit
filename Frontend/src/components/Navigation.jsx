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

          <Form inline id="searchform" style={{maxWidth: '60%', marginLeft: '2rem', marginRight: '0rem'}}>
            <FormControl type="text" placeholder="Search" className="mx-2 probChild" />
            <Button className="probChild sbtn" variant="outline-dark" >Search</Button>
          </Form>


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

                  <Form inline id="insearchform" style={{maxWidth: '55%', marginLeft: '.25rem', marginRight: '0rem'}}>
                      <FormControl type="text" placeholder="Search" className="mx-sm-2 probChild" />
                      <Button className="probChild sbtn" variant="outline-dark">Search</Button>

                  </Form>

                  <Nav className="ml-auto">


                        <Link to={{
                            pathname: '/home',
                            state: {
                              "accountId": this.props.accountId
                            }
                          }}>
                          <Nav.Link href="/home" className="navitems">
                              Home
                            </Nav.Link>
                          </Link>
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
