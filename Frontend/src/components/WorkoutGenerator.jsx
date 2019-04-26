import React, {Component} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Bootstrap from "react-bootstrap";
import './WorkoutGenerator.css';
import {Card, Form, Modal} from 'react-bootstrap';
import Navigation from './Navigation';
import axios from 'axios';

import {Exercise} from '../models/Exercise';
import {Workout} from '../models/Workout';

import { ExerciseCard, ExerciseList } from './ExerciseList';
import { WorkoutGeneratorRepository } from '../api/workoutGenRepo';

function FormOptions(props){
  return <>
  {props.opts.map((opt) => <option value={opt}>{opt}</option>)  }
    </>
}

class WorkoutGenerator extends Component {

  workoutGeneratorRepo = new WorkoutGeneratorRepository;

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
  componentDidMount() {
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => {
    //     const persons = res.data;
    //     console.log(persons)
    //     this.setState({ persons });
    //   })

    var ex=new Exercise("Jumping Jacks", "up and down boysssszzz", "https://data.whicdn.com/images/132534183/large.png", 4,4,8);
    var wrkt = new Workout(
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
        [
            new Comment("Jimbo", "my favorite workout"),
            new Comment("Jumbo", "I am not Jimbo")
        ]
    )

    this.workoutGeneratorRepo.getExercises().then(exercises => console.log("getExercises:      "+exercises.toSource()));
    // this.workoutGeneratorRepo.getExercisePic("Squats").then(image => console.log("getExercisePic:      "+image.toSource()));
    // this.workoutGeneratorRepo.getGeneratedWorkout(1, 2, 3, 4).then(workout => console.log("getGeneratedWorkout:      "+workout.toSource()));
    // this.workoutGeneratorRepo.addWorkout(wrkt);
    // this.workoutGeneratorRepo.addExerciseToWorkout(wrkt.name,ex);
    // this.workoutGeneratorRepo.getUserId("lifter97","password").then(user_id => console.log("getUserId:      "+user_id.toSource()));




    // console.log("what the fuck")
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

    console.log(workout)
    // axios.post(`https://jsonplaceholder.typicode.com/users`, { workout })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })

  //add workout array to backend ----exercisesGenerated and all workout meta data
    this.setState({category: [], expertise: [], length: [], intensity: [], showAddWorkout:false});
  }

  render() {
    return (<> < Navigation />
    <h1>Generate Workout</h1>
   <h2>  Focus</h2>
   <div >
    <ToggleButtonGroup className="w-100" name="Focus" id="category" type="radio" value={this.state.category} onChange={event => this.setState({category: [event]})}>
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
    <ToggleButtonGroup className="w-75" name="Expertise" type="radio" value={this.state.expertise} onChange={event => this.setState({expertise: [event]})}>
      <ToggleButton value={1}>Beginner</ToggleButton>
      <ToggleButton value={2}>Novice</ToggleButton>
      <ToggleButton value={3}>Intermediate</ToggleButton>
      <ToggleButton value={4}>Advanced</ToggleButton>
    </ToggleButtonGroup>

    <h2>
      Length
    </h2>
    <ToggleButtonGroup className="w-50" name="Length" type="radio" value={this.state.length} onChange={event => this.setState({length: [event]})}>
      <ToggleButton value={1}>30 min</ToggleButton>
      <ToggleButton value={2}>60 min</ToggleButton>
      <ToggleButton value={3}>90 min</ToggleButton>
      <ToggleButton value={4}>120 min</ToggleButton>
    </ToggleButtonGroup>

    <h2>
      Intensity
    </h2>
    <ToggleButtonGroup className="w-25"  name="Intensity" type="radio" value={this.state.intensity} onChange={event => this.setState({intensity: [event]})}>
      <ToggleButton value={1}>Easy</ToggleButton>
      <ToggleButton value={2}>Medium</ToggleButton>
      <ToggleButton value={3}>Hard</ToggleButton>
    </ToggleButtonGroup>
    </div>
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

           // alert(this.state.chosenExercises)

         }
       }

           />
         <Button onClick={event => this.setState({ showAddWorkout: true })} className="mt-4" size="lg" variant="outline-success" block="block">Add to Workouts</Button>


           <Modal show={this.state.showAddWorkout} onHide={event => this.setState({ showAddWorkout: false })}>
                   <Modal.Header closeButton>
                     <Modal.Title>Add Workout</Modal.Title>
                   </Modal.Header>
                   <Modal.Body>



                     <Form>
                       <Form.Group controlId="exampleForm.ControlInput1">
                         <Form.Label>Workout Name</Form.Label>
                         <Form.Control type="text" placeholder="2n semester workout" onChange={event =>  {this.setState({workoutName: event.currentTarget.value})}}/>
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
                     <Button variant="primary" onClick={this.handleWorkoutSubmit}>
                       Add Workout
                     </Button>
                   </Modal.Footer>
                 </Modal>
  </>);
  }
}

export default WorkoutGenerator;
