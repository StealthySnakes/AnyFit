import React, {Component} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Bootstrap from "react-bootstrap";
import './WorkoutGenerator.css';
import {Card, Form, Modal, Container, Row, Col} from 'react-bootstrap';
import Navigation from './Navigation';
import axios from 'axios';
import Workout from '../models/Workout';

import {Exercise} from '../models/Exercise';

import { ExerciseCard} from './ExerciseList';


function FormOptions(props){
  return <>
  {props.opts.map((opt) => <option value={opt}>{opt}</option>)  }
    </>
}

class WorkoutGenerator extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      wrkt: new Workout(
        1,
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
    id:0,
    name:'placeholder',
    description:'placeholder',
    focus:'placeholder',
    expertise:'placeholder',
    length:0,
    intensity:'placeholder',
    exercises:[],
    rating:0,
    comments: [],

    showAddExercise: false,
    customExerciseName:'placeholder',
    customExerciseDesciption:'placeholder',
    customExerciseDuration:'placeholder',
    customExerciseSets:1,
    customExerciseReps:10
  }

  }


  handleWorkoutGenerate(event) {
    axios.get('https://site.com/', {
      params: {
        category:this.state.category,
        expertise:this.state.expertise,
        length:this.state.length,
        intensity:this.state.intensity
      }
    })
    //generate the the workout using the button chosen parameters

  }
  handleCustomAdditionSubmit(event) {
    //add to generated workouts

             this.setState(
               state => {state.exercisesGenerated.push(new Exercise(this.state.customExerciseName,
                 this.state.customExerciseDescription,
                 "https://i1.wp.com/muscleandbrawn.com/wp-content/uploads/2009/11/100.jpg?resize=150%2C150",
                 //"https://via.placeholder.com/150",
                 this.state.customExerciseDuration,
                 this.state.customExerciseSets,
                 this.state.customExerciseReps))
                 return state;
               })

  }
  handleWorkoutSubmit(event){

    event.preventDefault();

    const workout = {
      chosenExercises:    this.state.chosenExercises,
      workoutName:    this.state.workoutName,
      workoutIntensity:   this.state.workoutIntensity,
      workoutExperience:    this.state.workoutExperience,
      workoutDuration:    this.state.workoutDuration,
      workoutDescription:   this.state.workoutDescription
    };


    axios.post(`https://jsonplaceholder.typicode.com/users`, { workout })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

  //add workout array to backend ----exercisesGenerated and all workout meta data
    this.setState({category: [], expertise: [], length: [], intensity: [], showAddWorkout:true});
  }

  render() {
    return (<>
      <Navigation/>
      <div class = "card" style={{float:'right', margin:'2em', padding:'5em', position:'fixed', zIndex:1, right:'1em'}}>
          <button class = "btn btn-primary btn-lg" style = {this.state.btnCol} onClick = {e => this.updateWrkt()}><h1>Save Changes</h1></button>
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
                      <input type = "text" class = "form-control" value={this.state.name} onChange={e => this.setState({name: e.target.value})}></input>
                      <label for="description" style = {{float:'left'}}>Description:</label>
                      <input type = "text" class = "form-control" value={this.state.description} onChange={e => this.setState({description: e.target.value})}></input>
                      <label for="focus" style={{float:'left'}}>Focus:</label>
                      <input type = "text" class = "form-control" value={this.state.focus} onChange={e => this.setState({focus: e.target.value})}></input>
                      <label for="expertise-level" style={{float:'left'}}>Expertise Level:</label>
                      <input type = "text" class = "form-control" value={this.state.expertise} onChange={e => this.setState({expertise: e.target.value})}></input>
                      <label for="length" style={{float:'left'}}>Length:</label>
                      <input type = "text" class = "form-control" value={this.state.length} onChange={e => this.setState({length: e.target.value})}></input>
                      <label for="intensity" style={{float:'left'}}>Intensity:</label>
                      <input type = "text" class = "form-control" value={this.state.length} onChange={e => this.setState({length: e.target.value})}></input>

                  </Row>
              </Container>
          </Col>                                {/* Right Side Close */}
        </Row>
          {this.state.wrkt.exercises.map((ex) => 
          <Row>
              <Col md={2}>
                  <button className="btn btn-danger" style={{heigh:'4em', marginTop:'4em'}}><i className="fa fa-trash"></i>Remove this workout</button>
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
                  <Form.Label>Exercises</Form.Label>
                  <Form.Control as="select"
                    onChange={event =>  {this.setState({customExerciseName: event.currentTarget.value})}}>
                    <FormOptions opts={["plank", "situp"]}/>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Sets</Form.Label>
                  <Form.Control as="select"
                    onChange={event =>  {this.setState({customExerciseSets: event.currentTarget.value})}}>
                    <FormOptions opts={[1,2,3,4,5]}/>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Reps</Form.Label>
                  <Form.Control as="select" onChange={event =>  {this.setState({customExerciseReps: event.currentTarget.value})}}>
                    <FormOptions opts={[1,2,3,4,5]}/>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control as="select" onChange={event =>  {this.setState({customExerciseDuration: event.currentTarget.value})}}>
                    <FormOptions opts={[1,2,3,4,5]}/>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={event =>  {this.setState({customExerciseDescription: event.currentTarget.value})}} />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={event => this.setState({ showAddExercise: false })}>
                Cancel
              </Button>
              <Button variant="primary" onClick={this.handleCustomAdditionSubmit}>
                Add Exercise
              </Button>
            </Modal.Footer>
          </Modal>
  </>);
  }

  componentDidMount() {
    this.setState({
      name: this.state.wrkt.name,
      id: this.state.wrkt.id,
      focus: this.state.wrkt.focus,
      description: this.state.wrkt.description,
      focus: this.state.wrkt.focus,
      expertise: this.state.wrkt.expertise,
      length: this.state.wrkt.length,
      intensity: this.state.wrkt.intensity,
      exercises: this.state.wrkt.exercises,
      rating: this.state.wrkt.rating,
      comments: this.state.wrkt.comments,
  })
}
}

export default WorkoutGenerator;
