import React, { Component } from 'react';
import Navigation from './Navigation';
import { Container, Media, Row, Col } from 'react-bootstrap';
import './AccountHome.css';

class AccountHome extends Component {

  render() {
    return (
        <>
            <Navigation/>

            <Container id="enclosed">               {/* Outer Container */}

              <Row>
                <Col>                               {/* Left Side */}
                <Row>                                   {/* Row 1 */}
                  <Media>
                    <img
                      width={300}
                      height={300}
                      className="mr-3"
                      src="http://placehold.it/300x300"
                      alt="Profile"
                    />
                  </Media>
                </Row>                                  {/* Row 1 Close */}
                <Row>                                   {/* Row 2 */}
                  <h3>Bio</h3>
                </Row>                                  {/* Row 2 Close */}
                <Row>
                  <p>Talk about yourself</p>
                </Row>
                </Col>                                {/* Left Side Close */}


                <Col>                                 {/* Right Side */}
                  <Container>
                    <Row>
                      <h2 className="details" id="friends">Friends</h2>
                    </Row>
                    {/* List of friends would be here */}
                  </Container>
                  <Container>
                    <Row>
                      <h2 className="details" id="customs">Custom Workouts</h2>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <h2 className="details" id="previews">previews</h2>
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
