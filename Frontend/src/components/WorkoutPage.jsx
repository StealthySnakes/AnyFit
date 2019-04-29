import React, { Component } from 'react';
import Navigation from './Navigation';
import Exercise from './../models/Exercise';
import Workout from './../models/Workout';
import { Container, Media, Row, Col } from 'react-bootstrap';
import StopWatch from './StopWatch';
import Stopwatch from './StopWatch';
import {ExerciseCard, ExerciseList} from './ExerciseCard';
import './WorkoutPage.css';
import {Rating} from './Rating';
import {Comment} from './../models/Comment';
import {ReviewForm} from './reviews/reviewForm';
import {Link} from 'react-router-dom';

export class WorkoutPage extends React.Component{
    state = {
        wrkt: new Workout(
            0,
            "jimbo's stretch routine",
            "a fun workout that embiggens you",
            "Arms and Crotch",
            "Beginner",
            "8 hours",
            "Intense",
            [
                new Exercise("Planks", "lie there on the floor", "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1", 4,3,3),
                new Exercise("Jumping Jacks", "up and down boysssszzz", "https://data.whicdn.com/images/132534183/large.png", 4,4,8),
                new Exercise("Planks", "lie there on the floor", "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1", 4,3,10),
                new Exercise("Planks", "lie there on the floor", "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1", 4,10,10),
              ],
            5,
            [
                new Comment("Jimbo", "my favorite workout"),
                new Comment("Jumbo", "I am not Jimbo")
            ]
        ),
        beginClk: false,
        pauseClk: false,
        btnCol: {background: 'dodgerblue'},
        btnWord: "Start",
    }

    onNewReview(review){
        this.setState(state => {
            state.wrkt.comments.push(review);
            return state;
        });
    }

    timerState(){
        if(!this.state.beginClk){
            this.setState({
                beginClk: true,
                btnCol: {background: 'indianred'},
                btnWord: "Reset"
            })
        }
        else{
            this.setState({
                beginClk: false,
                pauseClk: true,
                btnCol: {background: 'dodgerblue'},
                btnWord: "Start"
            })
        }
        return(<></>);

    }

    render(){
        return(
        <>
            <Navigation/>
            <div className = "card" style={{float:'right', margin:'2em', padding:'5em', position:'fixed', zIndex:1, right:'1em'}}>
                <Stopwatch beginClk = {this.state.beginClk} pauseClk = {this.state.pauseClk}/>
                <button className = "btn" style = {this.state.btnCol} onClick = {e => this.timerState()}>{this.state.btnWord}</button>
            </div>
            <Container style={{margin:'1em'}}>               {/* Outer Container */}

              <Row >
                <Col md={2}>                               {/* Left Side */}
                    <Row>

                    </Row>
                </Col>                                {/* Left Side Close */}
                <Col md={10} style={{background:'white', display:'block'}}>                                 {/* Right Side */}
                    <Container>
                        <Row style={{display:'block'}}>
                            <h1>{this.state.wrkt.name}</h1>
                             <button type="button" class="btn btn-warning btn-block">Edit Workout</button>
                            <Rating value = {this.state.wrkt.rating} />
                            <button className="btn btn-primary"style={{marginLeft:'2em', marginBottom:'1em', marginTop:'0.5em'}}>Rate Workout</button>
                            <p style={{fontWeight:'bold'}}><span style={{fontWeight:'normal'}}>{this.state.wrkt.description}<br></br></span>focus: <span style={{fontWeight:'normal'}}>{this.state.wrkt.focus}</span> 
                            <span style={{marginLeft:'1em'}}>expertise level: <span style={{fontWeight:'normal'}}>{this.state.wrkt.expertise}</span></span>
                            <span style={{marginLeft:'1em'}}>length: <span style={{fontWeight:'normal'}}>{this.state.wrkt.length}</span></span>
                            <span style={{marginLeft:'1em'}}>intensity: <span style={{fontWeight:'normal'}}>{this.state.wrkt.intensity}</span></span></p>
                        </Row>
                    </Container>
                </Col>                                {/* Right Side Close */}
              </Row>
                {this.state.wrkt.exercises.map((ex) => 
                <Row>
                    <Col md={2}>
                        <div className = "form form-control-lg">
                            <label><input className = "checks" type="checkbox" value=""/></label>
                        </div>
                    </Col>
                    <Col md={10}>
                        <ExerciseCard name={ex.name} desc={ex.desc} imageUrl={ex.imageUrl} length={ex.length} sets={ex.sets} reps={ex.reps}/>
                    </Col>
                </Row>
                
                )}
            </Container>                              {/* Outer Container Close */}

            <div style={{margin:'2em', textAlign:'left'}}>
                <ReviewForm reviews={this.state.wrkt.comments} onNewReview={a => this.onNewReview(a)}/>
            </div>
            
        
        </>);
    }
}

export default WorkoutPage;
