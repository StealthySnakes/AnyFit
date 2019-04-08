import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';
// import './AccoutHome.css';
function navOp(){
  return
}
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
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#friends">Friends</Nav.Link>
                      <NavDropdown title="My Account" id="collasible-nav-dropdown" alignRight={true}>
                          <NavDropdown.Item href="#action/3.1">Favorites</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Log Out</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
              </Navbar>
          </>);
      }

  }
}

export default Navigation;
