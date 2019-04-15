import React, { Component } from 'react';
import Navigation from './Navigation';
import Exercise from './../models/Exercise';
import Workout from './../models/Workout';
import { Container, Media, Row, Col } from 'react-bootstrap';
import StopWatch from './StopWatch';
import Stopwatch from './StopWatch';
import {ExerciseCard, ExerciseList} from './ExerciseList';
import './WorkoutPage.css';

export class WorkoutPage extends React.Component{
    state = {
        wrkt: new Workout(
            "jimbo's stretch routine",
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
            ["good workout, helped my dick grow", "nice traps after this"]
        ),
        beginClk: false,
        btnCol: {background: 'dodgerblue'},
        btnWord: "Start"
    }

    timerState(){
        if(!this.state.beginClk){
            this.setState({
                beginClk: true,
                btnCol: {background: 'indianred'},
                btnWord: "Stop"
            })
        }
        else{
            this.setState({
                beginClk: false,
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
            <div class = "card" style={{float:'right', margin:'2em', padding:'1em'}}>
                <Stopwatch begin = {this.state.beginClk}/>
                <button class = "btn" style = {this.state.btnCol} onClick = {e => this.timerState()}>{this.state.btnWord}</button>
            </div>
            <Container style={{margin:'1em'}}>               {/* Outer Container */}

              <Row>
                <Col md={2}>                               {/* Left Side */}
                    <Row>

                    </Row>
                </Col>                                {/* Left Side Close */}
                <Col md={10} style={{background:'white'}}>                                 {/* Right Side */}
                    <Container>
                        <Row style={{display:'block'}}>
                            <h1>{this.state.wrkt.name}</h1>
                            <p style={{fontWeight:'bold'}}>focus: <span style={{fontWeight:'normal'}}>{this.state.wrkt.focus}</span> 
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
                        <div class = "form form-control-lg">
                            <label><input class = "checks" type="checkbox" value=""/></label>
                        </div>
                    </Col>
                    <Col >
                        <ExerciseCard name={ex.name} desc={ex.desc} imageUrl={ex.imageUrl} length={ex.length} sets={ex.sets} reps={ex.reps}/>
                    </Col>
                </Row>
                
                )}
            </Container>                              {/* Outer Container Close */}
        
        </>);
    }
}

export default WorkoutPage;