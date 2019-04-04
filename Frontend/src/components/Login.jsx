import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from "react-bootstrap";
import './Login.css';
import Navigation from './Navigation';

class Login extends Component {

  constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: ""
        };

  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }
  render() {
    return (
      <>
      < Navigation />

    <h1> Login </h1>


      <div id="login" className="Login mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>Email address</Form.Label>
              <Form.Group controlId="email" bsSize="large">
                <Form.Control
                  autoFocus
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <Form.Text className="text-muted">
      We'll never share your email with anyone except Fontenot.
    </Form.Text>
              </Form.Group>
              <Form.Group controlId="password" bsSize="large">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                />
              </Form.Group>
              <Button
                block
                bsSize="large"
                type="submit"
              >
                Login
              </Button>
              <a className="text-muted">Click Here to Sign UP</a>
            </Form>
          </div>
          </>
    );
  }
}

export default Login;
