import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
// import './AccoutHome.css';
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state={
        search:""
      }


  }
  render() {
    if(this.props.hideNav==true){
      return (
        <>
        <Navbar bg="primary" variant="light" sticky="top">
          <img
            alt=""
            src={Logo}
            width="100"
            className="d-inline-block align-top"
            />
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mx-sm-2" />
            <Button variant="outline-dark">Search</Button>
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
                  <Form inline>
                      <FormControl type="text" placeholder="Search" className="mx-sm-2" />
                      <Button variant="outline-dark">Search</Button>
                  </Form>

                  <Nav className="ml-auto">


                        <Link to={{
                            pathname: '/home',
                            state: {
                              "accountId": this.props.accountId
                            }
                          }}>
                          <Nav.Link href="/home">
                              Home
                            </Nav.Link>


                          </Link>
                      <Nav.Link href="#friends">Friends</Nav.Link>
                      <NavDropdown title="My Account" id="collasible-nav-dropdown" alignRight={true}>
                          <NavDropdown.Item href="#action/3.1">Favorites</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="/login">Log Out</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar>
          </>);
      }

  }
}

export default Navigation;
