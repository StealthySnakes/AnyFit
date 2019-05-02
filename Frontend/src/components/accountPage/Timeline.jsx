import React, { Component } from 'react';
import { Alert, Card, Container, Row, Col, Image } from 'react-bootstrap';

class Timeline extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeline: []
        };
    }

    months = ["Jan", "Feb", "Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov","Dec"];

    retrieveDate = (date) => {                                                  //This is how I get the date of an activity
        date = new Date(date)                                                   // Unsure if I will use this
        let m = date.getMonth();
        let d = date.getDate();
        let y = date.getFullYear();
        let theDate = "";
        let officMonth = this.months[m];
        theDate = `${officMonth} ${d}, ${y}`;

        return theDate;
    }

    noActivity = () => {
        return(
            <Alert variant="primary">
                There appears to be nothing here. Add friends to see their activity here.
            </Alert>
        );
    }

    componentDidMount() {
        // this.props.repository.getTimeline(this.props.user).then(timeline => {
        //     this.setState({timeline})
        // });
    }


    render() {
        return(
            <>
                <h2 style={{fontWeight: 'bold'}}>Timeline</h2>

                {
                    this.state.timeline.length === 0 ? this.noActivity() : ""
                }
                {
                    this.state.timeline.map(friend => (
                        <Container>
                            <Card className="mt-2">
                                <Card.Header>
                                    <Container>
                                        <Row>
                                            <Col xs='2' sm='2' md='2' lg='2' xl='2'>                       {/* Profile pic of friend*/}
                                                <Image rounded src={friend.avatar}/>
                                            </Col>
                                            <Col xs='10' sm='10' md='10' lg='10' xl='10'>                       {/* Their Name */}
                                                {friend.userName}
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Header>
                            </Card>
                        </Container>
                    )
                    )
                }

            </>
        );
    }

}

export default Timeline;
