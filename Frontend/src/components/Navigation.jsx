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
                  <Form inline id="insearchform" style={{maxWidth: '50%', marginLeft: '1rem', marginRight: '0rem'}}>
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
                      <Nav.Link href="#friends" className="navitems">Friends</Nav.Link>
                      <NavDropdown className="navitems" title="My Account" id="collasible-nav-dropdown" alignRight={true}>
                          <NavDropdown.Item className="navitems" href="#action/3.1">Favorites</NavDropdown.Item>
                          <NavDropdown.Item className="navitems" href="#action/3.3">Settings</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item className="navitems" href="/login">Log Out</NavDropdown.Item>
                      </NavDropdown>

                      {/* Smaller screen version */}


                      <Button className="btn btn-primary dd-btn" style={{maxWidth: '1rem', marginRight: '.5rem'}}>{'\u2630'}</Button>
                  </Nav>
              </Navbar>
          </>);
      }

  }
}

export default Navigation;
