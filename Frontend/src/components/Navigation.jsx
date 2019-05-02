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

  smallScreen = () => {
    return(
      <div id="sidebar" style={{visibility: 'hidden'}}>

        <div class="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul>
          <Link></Link>
          <Link></Link>
          <Link></Link>
        </ul>
      </div>
    )
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
                  </Nav>
              </Navbar>
          </>);
      }

  }
}

export default Navigation;
