import React, { Component } from 'react';
import Navigation from './Navigation';
import Exercise from './../models/Exercise';
import Workout from './../models/Workout';
import { Container, Media, Row, Col, Form, Modal, Button} from 'react-bootstrap';
import {ExerciseCard, ExerciseList} from './ExerciseCard';
import './WorkoutPage.css';
import {Rating} from './Rating';
import { WorkoutRepository } from '../api/WorkoutRepository';


export class WorkoutPageEdit extends React.Component{
  
  constructor(){
    super();
 
    this.removeExercise = this.removeExercise.bind(this);
    this.newName = this.newName.bind(this);
 
    
  }
  workoutRepository = new WorkoutRepository;
    state = {
        wrkt: new Workout(
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
            'This is fun'
        ),
        name:' ',
        description:' ',
        focus:' ',
        expertise:' ',
        length:' ',
        intensity:' ',
        exercises:[],
        rating:' ',
        comments: [],

        exid: [],

        showAddExercise: false,
        customExerciseName:'placeholder',
        customExerciseDescription:'placeholder',
        customExerciseDuration:'placeholder',
        customExerciseSets:1,
        customExerciseReps:10,

        disp:'display:"block"'
    }



    updateWrkt(){
        this.setState({
            wrkt: new Workout(this.state.name, this.state.description, this.state.focus, this.state.expertise, this.state.length, this.state.intensity,
                this.state.exercises, this.state.rating, this.state.comments)
        })
        this.workoutRepository.updateWorkout(101, this.state.wrkt);
    }


   

    newName = event => {
      this.workoutRepository.updateName(102, this.state.name);
    }

  

    removeExercise(ind){
      this.setState(
        state =>{
          state.wrkt.exercises.splice(ind, 1)
        }
      );
      this.setState({disp:'display:"none"'})
      this.workoutRepository.removeExercise(102, this.state.exid[ind])
    }

    render(){
        return(
        <body style={{}}>
            <Navigation/>
            <div className = "card" style={{float:'right', margin:'0em', padding:'2em', position:'fixed', zIndex:1, right:'1em', bottom:'1em'}}>
                <button className = "btn btn-success" style={{marginTop:'1em'}}><h3>Done Editing</h3></button>
            </div>
            <Container style={{margin:'1em'}}>               {/* Outer Container */}
              <Row >
                <Col md={2}>                               {/* Left Side */}
                    <Row>
                    </Row>
                </Col>                                {/* Left Side Close */}
                <Col md={8} style={{background:'white', display:'block'}}>                                 {/* Right Side */}
                    <Container>
                        <Row style={{display:'block'}}>
                            <label for="name" style = {{float:'left'}}>Workout Name:</label>
                            <input type = "text" className = "form-control" placeholder={this.state.wrkt.name} onChange={e => this.setState({name: e.target.value})}></input>
                            <button className="btn btn-primary btn-block" style={{marginBottom:'1em'}}onClick={this.newName}>Save</button>
                          
                        </Row>
                    </Container>
                </Col>                                {/* Right Side Close */}
              </Row>
                {this.state.wrkt.exercises.map((ex, i) => 
                <Row>
                    <Col md={2}>
                        <button className="btn btn-danger btn-sm" style={{height:'4em', width:'12em', marginTop:'4em', left:'1em'}} onClick={event => this.removeExercise(i)}>Remove <br></br>this workout</button>
                    </Col>
                    <Col md={10}>
                        <ExerciseCard name={ex.name} desc={ex.desc} imageUrl={ex.imageUrl} length={ex.length} sets={ex.sets} reps={ex.reps}/>

                    </Col>
                </Row>
                )}
              

            </Container>                              {/* Outer Container Close */}

            


        </body>);
    }



    


    componentDidMount() {
      let workoutId = 102;
        if (workoutId) {
            this.workoutRepository.getWorkout(workoutId)
                .then(wrkt => {
                    var temp=[]
                    var tempid=[]
                    for(let i=0;i<wrkt.length;i++){
                      temp.push(new Exercise(wrkt[i].exercise_name, wrkt[i].exercise_desc, 
                        wrkt[i].exercise_image, wrkt[i].default_length, wrkt[i].set_count, wrkt[i].rep_count))
                      tempid.push(wrkt[i].exercise_id)
                    }
                    var tempwork=new Workout(wrkt[0].workout_name, wrkt[0].workout_desc, 
                        wrkt[0].category, wrkt[0].ExpLevel, wrkt[0].workout_length, wrkt[0].intensity,
                        temp, wrkt[0].rating, wrkt[0].comments
                        )
                    this.setState({ wrkt: tempwork,
                                    name: tempwork.name,
                                    description: tempwork.description,
                                    focus: tempwork.focus,
                                    intensity: tempwork.intensity,
                                    lenght: tempwork.length,
                                    expertise: tempwork.expertise,
                                    exid: tempid
                                    })
                  });
        }
        this.workoutGeneratorRepo.getExercises().then(      //Delete if !addexercise 
          exercises =>
          {
            var temp=[]
            for(let i=0;i<exercises.length;i++){
              temp.push(exercises[i].exercise_name)
            }
            this.setState({ exerciseOptions: temp })
          }
    
    
        );
      }
}

export default WorkoutPageEdit;
