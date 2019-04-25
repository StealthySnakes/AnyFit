import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from "react-bootstrap";
import './Login.css';
import Navigation from './Navigation';
import { WorkoutGeneratorRepository } from '../api/workoutGenRepo';
import Logo from '../assets/logo.png';


function FailedLogin(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <div class="alert alert-primary" role="alert">
  Login FAAAILED
</div>;
  }
  return <></>;
}



class Login extends Component {
  workoutGeneratorRepo = new WorkoutGeneratorRepository;

  constructor(props) {
        super(props);

        this.state = {
          email: "",
          password: "",
          failed_login:false
        };

  };
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    // login_success = this.workoutGeneratorRepo.getUserId(this.state.email, this.state.password);
    //add redirect if login success not null
    // else show login failed
    this.setState({ failed_login: true })

  }
  render() {
    return (
      <>
      < Navigation hideNav={true} />


      <img
                  alt=""
                  src={Logo}
                  width="300"
                  className="d-inline-block align-top"
                  />
                <p/>
      <h2> Sign in to Anyfit</h2>
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

              <a href="http://www.google.com">Click Here to Sign UP</a>
            </Form>

            <FailedLogin isLoggedIn={this.state.failed_login}/>
          </div>
          </>
    );
  }
}

export default Login;
