import React, { Component } from 'react';
import Navigation from './Navigation';
import Exercise from './../models/Exercise';
import Workout from './../models/Workout';
import { Container, Media, Row, Col, Form, Modal, Button} from 'react-bootstrap';
import {ExerciseCard, ExerciseList} from './ExerciseCard';
import './WorkoutPage.css';
import {Rating} from './Rating';


export class WorkoutPageEdit extends React.Component{
  constructor(){
    super();
    this.handleCustomAdditionSubmit = this.handleCustomAdditionSubmit.bind(this);
    this.removeExercise = this.removeExercise.bind(this);
  }

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
            [
                new Comment("Jimbo", "my favorite workout"),
                new Comment("Jumbo", "I am not Jimbo")
            ]
        ),
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



    updateWrkt(){
        this.setState({
            wrkt: new Workout(this.state.name, this.state.description, this.state.focus, this.state.expertise, this.state.length, this.state.intensity,
                this.state.exercises, this.state.rating, this.state.comments)
        })
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

    removeExercise(ind){
      this.setState(
        state =>{
          state.wrkt.exercises.splice(ind)
        }
      )
    }

    render(){
        return(
        <>
            <Navigation/>
            <div className = "card" style={{float:'right', margin:'2em', padding:'3em', position:'fixed', zIndex:1, right:'1em'}}>
                <button className = "btn btn-primary btn-lg" onClick = {e => this.updateWrkt()}><h1>Save Changes</h1></button>
                <button className = "btn btn-secondary btn-lg" style={{marginTop:'1em'}}><h1>Cancel</h1></button>
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
                            <input type = "text" className = "form-control" value={this.state.name} onChange={e => this.setState({name: e.target.value})}></input>
                            <label for="description" style = {{float:'left'}}>Description:</label>
                            <input type = "text" className = "form-control" value={this.state.description} onChange={e => this.setState({description: e.target.value})}></input>
                            <label for="focus" style={{float:'left'}}>Focus:</label>
                            <input type = "text" className = "form-control" value={this.state.focus} onChange={e => this.setState({focus: e.target.value})}></input>
                            <label for="expertise-level" style={{float:'left'}}>Expertise Level:</label>
                            <input type = "text" className = "form-control" value={this.state.expertise} onChange={e => this.setState({expertise: e.target.value})}></input>
                            <label for="length" style={{float:'left'}}>Length:</label>
                            <input type = "text" className = "form-control" value={this.state.length} onChange={e => this.setState({length: e.target.value})}></input>
                            <label for="intensity" style={{float:'left'}}>Intensity:</label>
                            <input type = "text" className = "form-control" value={this.state.length} onChange={e => this.setState({length: e.target.value})}></input>

                        </Row>
                    </Container>
                </Col>                                {/* Right Side Close */}
              </Row>
                {this.state.wrkt.exercises.map((ex, i) => 
                <Row>
                    <Col md={2}>
                        <button className="btn btn-danger" style={{heigh:'4em', marginTop:'4em'}} onClick={event => this.removeExercise(i)}><i className="fa fa-trash"></i>Remove this workout</button>
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

export default WorkoutPageEdit;