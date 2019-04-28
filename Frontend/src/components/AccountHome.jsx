import React, { Component } from 'react';
import Navigation from './Navigation';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './AccountHome.css';

class AccountHome extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
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
                      <h2 className="details">Timeline</h2>
                    </Row>
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
                      <Col xs={4}>
                        <h2 className="details" id="customs">Favorites</h2>
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
