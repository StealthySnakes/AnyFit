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
import {WorkoutRepository} from './../api/WorkoutRepository';

export class WorkoutPage extends React.Component{
    workoutRepository = new WorkoutRepository;
    state = {
        workout: new Workout(
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
            "how about that, jumbo"
        ),
        wrkt: [],
        beginClk: false,
        pauseClk: false,
        btnCol: {background: 'dodgerblue'},
        btnWord: "Start",
        rating: 0
    }

    onNewReview(review){
        this.workoutRepository.updateComment()
    }

    newRating(){
        this.workoutRepository.updateRating(123, this.state.rating)
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
            <div className = "card" style={{float:'right', margin:'2em', padding:'3em', textAlign:'center',position:'fixed', zIndex:1, right:'1em'}}>
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
                            <h1>{this.state.workout.name}</h1>
                             <button type="button" className="btn btn-warning btn-block">Edit Workout</button>
                            <Rating value = {this.state.workout.rating} />
                            <label for='rating' style={{display:'inline'}}></label>
                            <select className="form-control" 
                            onChange={e => this.setState({ rating: e.target.value })} 
                            style={{display:'inline', width:'4em', marginLeft:'1em'}}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            </select>
                            <button className="btn btn-primary"
                            style={{marginLeft:'2em', marginBottom:'1em', marginTop:'0.5em'}} onClick={this.newRating()}>Rate Workout</button>
                            <p style={{fontWeight:'bold'}}><span style={{fontWeight:'normal'}}>{this.state.workout.description}<br></br></span>Focus: <span style={{fontWeight:'normal'}}>{this.state.workout.focus}</span> 
                            <span style={{marginLeft:'1em'}}>Expertise Level: <span style={{fontWeight:'normal'}}>{this.state.workout.expertise}</span></span>
                            <span style={{marginLeft:'1em'}}>Length: <span style={{fontWeight:'normal'}}>{this.state.workout.length}</span></span>
                            <span style={{marginLeft:'1em'}}>Intensity: <span style={{fontWeight:'normal'}}>{this.state.workout.intensity}</span></span></p>
                        </Row>
                    </Container>
                </Col>                                {/* Right Side Close */}
              </Row>
                {this.state.workout.exercises.map((ex) => 
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
                <ReviewForm reviews={this.state.workout.comments} onNewReview={a => this.onNewReview(a)}/>
            </div>
            
        
        </>);
    }

    placeWorkout(wrkt){
        
    }

    componentDidMount() {
        let workoutId = 123;
        if (workoutId) {
            this.workoutRepository.getWorkout(workoutId)
                .then(wrkt => {
                    var temp=[]
                    for(let i=0;i<wrkt.length;i++){
                      temp.push(new Exercise(wrkt[i].exercise_name, wrkt[i].exercise_desc, 
                        wrkt[i].exercise_image, wrkt[i].default_length, wrkt[i].set_count, wrkt[i].rep_count))

                    }
                    var tempwork=new Workout(wrkt[0].workout_name, wrkt[0].workout_desc, 
                        wrkt[0].category, wrkt[0].ExpLevel, wrkt[0].workout_length, wrkt[0].intensity,
                        temp, wrkt[0].rating, wrkt[0].comments
                        )
                    this.setState({ workout: tempwork})
                  });
        }
    }
}

export default WorkoutPage;
