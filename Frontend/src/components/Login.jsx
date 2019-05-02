import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Bootstrap from "react-bootstrap";
import './Login.css';
import Navigation from './Navigation';
import { WorkoutGeneratorRepository } from '../api/workoutGenRepo';
import Logo from '../assets/logo.png';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

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
          username: "",
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
    // "lifter97","password"
    this.workoutGeneratorRepo.getUserId(this.state.username,this.state.password).then(

      login_success => {

        if (login_success){
          alert("Login success will redirect now..")
          this.props.history.push(
            {
              pathname: '/home',
              state: {
                accountId: login_success[0].user_id,
              }
            }
          )
        }
        else{
          this.setState({ failed_login: true })
        }
      }
    );

    //should be able to access using: const { fromNotifications } = this.props.location.state


  }
  render() {
    return (
      <>
      <Navigation hideNav={true} />


      <img
                  alt=""
                  src={Logo}
                  width="300"
                  className="d-inline-block align-top"
                  />
                <p/>
      <h2> Sign in to Anyfit</h2>
      <div id="login" className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Label>Username</Form.Label>
              <Form.Group controlId="username" bsSize="large">
                <Form.Control
                  autoFocus
                  type="username"
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
              <Button type="submit" style={{width: '100%'}}>
                Login
              </Button>

              <Link to={`/signup`}>Click Here to Sign Up</Link>
            </Form>

            <FailedLogin isLoggedIn={this.state.failed_login}/>
          </div>
          </>
    );
  }
}

export default Login;
