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
    this.handleCustomAdditionSubmit = this.handleCustomAdditionSubmit.bind(this);
    this.removeExercise = this.removeExercise.bind(this);
    this.newName = this.newName.bind(this);
    this.newDesc = this.newDesc.bind(this);
    
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

        showAddExercise: false,
        customExerciseName:'placeholder',
        customExerciseDesciption:'placeholder',
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


    handleCustomAdditionSubmit() {
      //add to generated workouts
               this.setState(
                 state => {state.exercises.push(new Exercise(this.state.customExerciseName,
                   this.state.customExerciseDescription,
                   "https://i1.wp.com/muscleandbrawn.com/wp-content/uploads/2009/11/100.jpg?resize=150%2C150",
                   this.state.customExerciseDuration,
                   this.state.customExerciseSets,
                   this.state.customExerciseReps))
                   return state;
                 })
    }

    newName = event => {
      this.workoutRepository.updateName(102, this.state.name);
    }

    newDesc = event =>{
      this.workoutRepository.updateDescription(102, this.state.description);
    }

    newFocus = event =>{
      this.workoutRepository.updateFocus(102, this.state.focus);
    }

    newLength = event =>{
      this.workoutRepository.updateLength(102, this.state.length);
    }

    newExpertise = event =>{
      this.workoutRepository.updateExpertise(102, this.state.expertise);
    }

    newIntensity = event =>{
      this.workoutRepository.updateIntensity(102, this.state.intensity);
    }

    removeExercise(ind){
      this.setState(
        state =>{
          state.wrkt.exercises.splice(ind, 1)
        }
      );
      this.setState({disp:'display:"none"'})

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
                            <label for="description" style = {{float:'left'}}>Description:</label>
                            <input type = "text" className = "form-control" placeholder={this.state.wrkt.description} onChange={e => this.setState({description: e.target.value})}></input>
                            <button className="btn btn-primary btn-block"onClick={this.newDesc}>Save</button>
                            <label for="focus" style={{float:'left'}}>Focus:</label>
                            <input type = "text" className = "form-control" placeholder={this.state.wrkt.focus} onChange={e => this.setState({focus: e.target.value})}></input>
                            <button className="btn btn-primary btn-block"style={{marginBottom:'1em'}}onClick={this.newFocus}>Save</button>
                            <label for="expertise-level" style={{float:'left'}}>Expertise Level:</label>
                            <input type = "text" className = "form-control" placeholder={this.state.wrkt.expertise} onChange={e => this.setState({expertise: e.target.value})}></input>
                            <button className="btn btn-primary btn-block"style={{marginBottom:'1em'}}onClick={this.newExpertise}>Save</button>
                            <label for="length" style={{float:'left'}}>Length:</label>
                            <input type = "text" className = "form-control" placeholder={this.state.wrkt.length} onChange={e => this.setState({length: e.target.value})}></input>
                            <button className="btn btn-primary btn-block"style={{marginBottom:'1em'}}onClick={this.newLength}>Save</button>
                            <label for="intensity" style={{float:'left'}}>Intensity:</label>
                            <input type = "text" className = "form-control" placeholder={this.state.wrkt.intensity} onChange={e => this.setState({intensity: e.target.value})}></input>
                            <button className="btn btn-primary btn-block"style={{marginBottom:'1em'}}onClick={this.newIntensity}>Save</button>
                        </Row>
                    </Container>
                </Col>                                {/* Right Side Close */}
              </Row>
                {this.state.wrkt.exercises.map((ex, i) => 
                <Row>
                    <Col md={2}>
                        <button className="btn btn-danger btn-sm" style={{height:'4em', width:'12em', marginTop:'4em', left:'1em'}} onClick={event => this.removeExercise(i)}><i className="fa fa-trash"></i>Remove <br></br>this workout</button>
                    </Col>
                    <Col md={10}>
                        <ExerciseCard name={ex.name} desc={ex.desc} imageUrl={ex.imageUrl} length={ex.length} sets={ex.sets} reps={ex.reps}/>

                    </Col>
                </Row>
                )}
                <Row>
                    <Col md={2}>
                    </Col>
                    <Col md={10}>
                        <button className="btn btn-primary btn-large btn-block" style={{marginTop:'1em'}} onClick={event => this.setState({ showAddExercise: true })}>Add Exercise</button>
                    </Col>
                </Row>
                

            </Container>                              {/* Outer Container Close */}

            <Modal show={this.state.showAddExercise} onHide={event => this.setState({ showAddExercise: false })}>
            <Modal.Header closeButton>
              <Modal.Title>Add Custom Exercise</Modal.Title>
            </Modal.Header>
            <Modal.Body>


              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Exercise Name</Form.Label>
                  <Form.Control type="text"
                    onChange={event =>  {this.setState({customExerciseName: event.currentTarget.value})}}>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Sets</Form.Label> 
                  <Form.Control as="select"
                    onChange={event =>  {this.setState({customExerciseSets: event.currentTarget.value})}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Reps</Form.Label>
                  <Form.Control as="select" onChange={event =>  {this.setState({customExerciseReps: event.currentTarget.value})}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control as="select" onChange={event =>  {this.setState({customExerciseDuration: event.currentTarget.value})}}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={event =>  {this.setState({customExerciseDescription: event.currentTarget.value})}} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary"style={this.state.disp} onClick={event => this.setState({ showAddExercise: false })}>
                Cancel
              </Button>
              <Button variant="primary" onClick={this.handleCustomAdditionSubmit}>
                Add Exercise
              </Button>
            </Modal.Footer>
          </Modal>


        </body>);
    }



    


    componentDidMount() {
      let workoutId = 102;
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
                    this.setState({ wrkt: tempwork,
                                    name: tempwork.name,
                                    description: tempwork.description,
                                    focus: tempwork.focus,
                                    intensity: tempwork.intensity,
                                    lenght: tempwork.length,
                                    expertise: tempwork.expertise
                                    })
                  });
        }
      }
}

export default WorkoutPageEdit;
