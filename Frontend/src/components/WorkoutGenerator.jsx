import React, {Component} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Bootstrap from "react-bootstrap";
import './WorkoutGenerator.css';
import {Card, Form, Modal} from 'react-bootstrap';
import Navigation from './Navigation';


import {Exercise} from '../models/Exercise';

import { ExerciseCard, ExerciseList } from './ExerciseList';


function FormOptions(props){
  return <>
  {props.opts.map((opt) => <option value={opt}>{opt}</option>)  }
    </>
}

class WorkoutGenerator extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      category: [],
      expertise: [],
      length: [],
      intensity: [],
      exercisesGenerated: [
        new Exercise("Planks", "lie there on the floor", "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1", 4,3,3),
        new Exercise("Jumping Jacks", "up and down boysssszzz", "https://data.whicdn.com/images/132534183/large.png", 4,4,8),
        new Exercise("Planks", "lie there on the floor", "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1", 4,3,10),
        new Exercise("Planks", "lie there on the floor", "https://static-s.aa-cdn.net/img/ios/1132834831/eb7c52c5f7fd82798ff99ad6264c8727?v=1", 4,10,10),
      ],
      //these are the exercise that have been kept
      chosenExercises:[],
      showAddExercise:false,
      showAddWorkout:false,
      customExerciseName:"",
      customExerciseSets:0,
      customExerciseReps:0,
      customExerciseDuration:0,
      customExerciseDescription:0,
      workoutName:0,
      workoutIntensity:0,
      workoutExperience:0,
      workoutDuration:0,
      workoutDescription:0
    };
    this.handleWorkoutGenerate = this.handleWorkoutGenerate.bind(this);
    this.handleCustomAdditionSubmit = this.handleCustomAdditionSubmit.bind(this);
    this.handleWorkoutSubmit = this.handleWorkoutSubmit.bind(this);
  }

  handleWorkoutGenerate(event) {

    //get backend exercise recommendations

  }
  handleCustomAdditionSubmit(event) {
    //add to generated workouts
    this.setState({ showAddExercise: false });
  }
  handleWorkoutSubmit(event) {
    this.setState({category: [], expertise: [], length: [], intensity: [], showAddWorkout:true});
  }

  render() {
    return (<> < Navigation />
    <h1>Generate Workout</h1>
   <h2>  Focus</h2>
    <ToggleButtonGroup name="Focus" id="category" type="radio" value={this.state.category} onChange={event => this.setState({category: [event]})}>
      <ToggleButton value={"Strength"}>Strength</ToggleButton>
      <ToggleButton value={"Muscle"}>Muscle</ToggleButton>
      <ToggleButton value={"Mobility"}>Mobility</ToggleButton>
      <ToggleButton value={"Speed"}>Speed</ToggleButton>
      <ToggleButton value={"Flexibility"}>Flexibility</ToggleButton>
      <ToggleButton value={"Cardio"}>Cardio</ToggleButton>
    </ToggleButtonGroup>

    <h2>
      Expertise
    </h2>
    <ToggleButtonGroup name="Expertise" type="radio" value={this.state.expertise} onChange={event => this.setState({expertise: [event]})}>
      <ToggleButton value={1}>Beginner</ToggleButton>
      <ToggleButton value={2}>Novice</ToggleButton>
      <ToggleButton value={3}>Intermediate</ToggleButton>
      <ToggleButton value={4}>Advanced</ToggleButton>
    </ToggleButtonGroup>

    <h2>
      Length
    </h2>
    <ToggleButtonGroup name="Length" type="radio" value={this.state.length} onChange={event => this.setState({length: [event]})}>
      <ToggleButton value={1}>30 min</ToggleButton>
      <ToggleButton value={2}>60 min</ToggleButton>
      <ToggleButton value={3}>90 min</ToggleButton>
      <ToggleButton value={4}>120 min</ToggleButton>
    </ToggleButtonGroup>

    <h2>
      Intensity
    </h2>
    <ToggleButtonGroup name="Intensity" type="radio" value={this.state.intensity} onChange={event => this.setState({intensity: [event]})}>
      <ToggleButton value={1}>Easy</ToggleButton>
      <ToggleButton value={2}>Medium</ToggleButton>
      <ToggleButton value={3}>Hard</ToggleButton>
    </ToggleButtonGroup>

    <ButtonToolbar bsPrefix="inline-flex">
      <Button onClick={this.handleWorkoutGenerate} className="m-4" size="lg" variant="outline-primary">Generate Workout</Button>
      <Button onClick={event => this.setState({ showAddExercise: true })} className="m-4" size="lg"  variant="outline-secondary">Add custom exercise</Button>
    </ButtonToolbar>

    <hr></hr>
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

    <h2>
      Choose exercises to keep in Generated Workout
      <br></br>
    </h2>
    <ExerciseList exercises={this.state.exercisesGenerated} onExerciseSelected=
       {(exerciseName) =>
         {

         this.setState(
           state => {state.chosenExercises.push(exerciseName)
             return state;
           })

           alert(this.state.chosenExercises)

         }
       }

           />
         <Button onClick={this.handleWorkoutSubmit} className="mt-4" size="lg" variant="outline-success" block="block">Add to Workouts</Button>


           <Modal show={this.state.showAddWorkout} onHide={event => this.setState({ showAddWorkout: false })}>
                   <Modal.Header closeButton>
                     <Modal.Title>Add Workout</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>



                     <Form>
                       <Form.Group controlId="exampleForm.ControlInput1">
                         <Form.Label>Workout Name</Form.Label>
                         <Form.Control type="text" placeholder="2n semester workout" />
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>Intensity</Form.Label>
                         <Form.Control as="select" onChange={event =>  {this.setState({workoutIntensity: event.currentTarget.value})}}>
                           <FormOptions opts={[1,2,3,4,5]}/>
                         </Form.Control>
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>Experience Level</Form.Label>
                         <Form.Control as="select" onChange={event =>  {this.setState({workoutExperience: event.currentTarget.value})}}>
                           <FormOptions opts={[1,2,3,4,5]}/>
                         </Form.Control>
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>Duration</Form.Label>
                         <Form.Control as="select" onChange={event =>  {this.setState({workoutDuration: event.currentTarget.value})}}>
                           <FormOptions opts={[1,2,3,4,5]}/>
                         </Form.Control>
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlTextarea1">
                         <Form.Label>Workout Description</Form.Label>
                         <Form.Control as="textarea" rows="3" onChange={event =>  {this.setState({workoutDescription: event.currentTarget.value})}}/>
                       </Form.Group>
                     </Form>
                   </Modal.Body>
                   <Modal.Footer>
                     <Button variant="secondary" onClick={event => this.setState({ showAddWorkout: false })}>
                       Cancel
                     </Button>
                     <Button variant="primary" onClick={event => this.setState({ showAddWorkout: false })}>
                       Add Workout
                     </Button>
                   </Modal.Footer>
                 </Modal>
  </>);
  }
}

export default WorkoutGenerator;
