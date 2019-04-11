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

// function customExercise(props){
//
//   return
// }

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
      chosenExercises:[],
      showAddExercise:false,
      showAddWorkout:false
    };
    this.handleWorkoutGenerate = this.handleWorkoutGenerate.bind(this);
    this.handleCustomAddition = this.handleCustomAddition.bind(this);
    this.handleCustomAdditionClose = this.handleCustomAdditionClose.bind(this);
    this.handleWorkoutSubmit = this.handleWorkoutSubmit.bind(this);
    this.handleWorkoutSubmitClose = this.handleWorkoutSubmitClose.bind(this);
  }

  handleWorkoutGenerate(event) {

    this.setState({ showAddWorkout: true });

  }
  handleCustomAddition(event) {

    this.setState({ showAddExercise: true });

  }
  handleCustomAdditionClose(event) {

    this.setState({ showAddExercise: false });

  }
  handleWorkoutSubmit(event) {
    this.setState({category: [], expertise: [], length: [], intensity: [], showAddWorkout:true});
  }
  handleWorkoutSubmitClose(event) {

    this.setState({ showAddWorkout: false });

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
      <Button onClick={this.handleCustomAddition} className="m-4" size="lg"  variant="outline-secondary">Add custom exercise</Button>
    </ButtonToolbar>

    <hr></hr>
    <Modal show={this.state.showAddExercise} onHide={this.handleCustomAdditionClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Custom Exercise</Modal.Title>
            </Modal.Header>
            <Modal.Body>



              <Form>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Exercises</Form.Label>
                  <Form.Control as="select">
                    <option>Planks</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Sets</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Reps</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Cancel
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
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


           <Modal show={this.state.showAddWorkout} onHide={this.handleWorkoutSubmitClose}>
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
                         <Form.Control as="select">
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                         </Form.Control>
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>Experience Level</Form.Label>
                         <Form.Control as="select">
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                         </Form.Control>
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlSelect1">
                         <Form.Label>Duration</Form.Label>
                         <Form.Control as="select">
                           <option>1</option>
                           <option>2</option>
                           <option>3</option>
                           <option>4</option>
                           <option>5</option>
                         </Form.Control>
                       </Form.Group>
                       <Form.Group controlId="exampleForm.ControlTextarea1">
                         <Form.Label>Workout Description</Form.Label>
                         <Form.Control as="textarea" rows="3" />
                       </Form.Group>
                     </Form>
                   </Modal.Body>
                   <Modal.Footer>
                     <Button variant="secondary" onClick={this.handleClose}>
                       Cancel
                     </Button>
                     <Button variant="primary" onClick={this.handleClose}>
                       Add Exercise
                     </Button>
                   </Modal.Footer>
                 </Modal>
  </>);
  }
}

export default WorkoutGenerator;
