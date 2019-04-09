import React, {Component} from 'react';
import {Card, Form, Button} from 'react-bootstrap';


function ExerciseCard(props) {
  return <>

  <Card style={{ width: '18rem' }}>

    <Form.Group  controlId="formBasicCheckbox">
        <Form.Check  type="checkbox" label="Add exercise" />
      </Form.Group>


    <Card.Img variant="top" src={props.imageUrl} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
      <Card.Text>

        {props.length}

        {props.desc}
      </Card.Text>
      <Button variant="primary">Go to exercise page</Button>
    </Card.Body>
  </Card>


</>
}

function ExerciseList(props) {

  return <div class="card-group">

    {props.exercises.map((ex) => <ExerciseCard name={ex.name} desc={ex.desc} imageUrl={ex.imageUrl} length={ex.length}/>)}
  </div>
}

export {
  ExerciseCard,
  ExerciseList,
};
