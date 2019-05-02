import React, {Component} from 'react';
import {Card, Form, Button, Nav} from 'react-bootstrap';
import {Exercise} from '../models/Exercise';

function ExerciseCard(props) {




  return <>

  < Card style = {{ width: '18rem' }} >
    <Card.Header>

    </Card.Header>
    <Card.Img variant="top" src={props.imageUrl}/>
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>

        <h6>Duration: {props.length} min </h6>
        <h6>Sets/reps: {props.sets}x{props.reps}</h6>

        {props.desc}
      </Card.Text>
    </Card.Body>
  </Card>

</>
}

function ExerciseList(props) {

  return <div class="card-group">
    {props.onExerciseSelected}
    {props.exercises.map((ex) => <ExerciseCard onExerciseSelection={() => props.onExerciseSelected} name={ex.name} desc={ex.desc} imageUrl={ex.imageUrl} length={ex.length} sets={ex.sets} reps={ex.reps}/>)}
  </div>
}

export {
  ExerciseCard,
  ExerciseList
};
