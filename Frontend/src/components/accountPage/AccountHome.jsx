import React, { Component } from 'react';
import Navigation from '../Navigation';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './AccountHome.css';
import Account from '../../models/Account';
import { HomeRepository } from '../../api/HomeRepository';
import Timeline from './Timeline';
import { Link } from 'react-router-dom';

class AccountHome extends Component {

  repo = new HomeRepository();
  currentAccount = new Account();

  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      bio: '',
      friends: [],
      workouts: [],
      favorites: [],
      history: []
    }
  }

  componentDidMount() {

    alert("here is the passed in accountId: "+this.props.location.state.accountId)

    this.repo.getProfilePic(this.props.userID).then(avi => {
      this.setState.avatar({avi})
    });
    this.repo.getBio(this.props.userID).then(info => {
      this.setState.bio({info})
    });
    this.repo.getFriends(this.props.userID).then(buddies => {
      this.setState.friends({buddies})
    });

  }

  render() {
    return (
        <>
            <Navigation/>

            <Container id="enclosed" fluid>               {/* Outer Container */}

              <Row>

                <Col xs={12} sm={6} md={4} lg={4} xl={3}>                      {/* Left Side */}

                  <Row>                                   {/* Row 1 */}
                     <img
                        style={{maxWidth: '100%', height: 'auto'}}
                        className="mr-3"
                        src="http://placehold.it/240x240"
                        alt="Profile"
                      />
                  </Row>
                  <Row>
                      <h3 className="details">Bio</h3>
                  </Row>
                  <Row>
                    <p>
                      Tell us about yourself
                    </p>
                  </Row>
                </Col>                                                          {/* Left Side Close */}


                <Col xs={12} sm={6} md={5} lg={5} xl={4}>                                 {/* Center Timeline */}
                  <Container>
                  <Row>
                  {/*<Link className="btn btn-info">                                 Link to the other page
                    Generate Workout!
                  </Link> */ }
                  </Row>
                  <Row>
                    <Timeline user={this.currentAccount.id} repository={this.repo}/>
                  </Row>                                                         {/* Timeline component */}
                  </Container>
                </Col>


                <Col xs={12} sm={12} md={2} lg={3} xl={5}>                                 {/* Right Side */}
                  <Container>
                    <Row className="justify-content-xs-between">
                      <Col xs={4} sm={6} md={6} lg={6} xl={6}>
                        <h2 className="details" id="friends">Friends</h2>
                      </Col>
                      <Col xs={{span: 4, offset: 1}} sm={{span: 4, offset: 1}} md={{span: 4, offset: 1}} lg={{span: 4, offset: 1}} xl={{span: 4, offset: 1}}>
                        <Button variant="success" size="sm">Add Friend</Button>
                      </Col>
                    </Row>
                    {/* List of friends would be here */}
                  </Container>
                  
                  <Container>
                    <Row>
                      <Col xs={4} sm={6} md={6} lg={6} xl={6}>
                        <h2 className="details" id="customs">Favorites</h2>
                      </Col>
                      <Col >

                      </Col>
                    </Row>
                    <Row>
                      <Card>

                      </Card>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col xs={4}>
                        <h2 className="details" id="previews">History</h2>
                      </Col>
                    </Row>
                  </Container>
                </Col>                                {/* Right Side Close */}

              </Row>
            </Container>                              {/* Outer Container Close */}

        </>
    );
  }
}

export default AccountHome;
