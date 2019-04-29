import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from './../../assets/logo.png';
// import './AccoutHome.css';

class Navigationunlog extends Component {
  render() {
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
        </>
    );
  }
}

export default Navigationunlog;
