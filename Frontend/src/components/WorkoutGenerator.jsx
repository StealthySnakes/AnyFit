import React, {Component} from 'react';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Bootstrap from "react-bootstrap";
import './WorkoutGenerator.css';
import Navigation from './Navigation';




class WorkoutGenerator extends Component {

  constructor(props, context) {
      super(props, context);

      this.handleChange = this.handleChange.bind(this);

      this.state = {
        category: [],
        expertise: [],
        length: [],
        intensity: [],
      };
    }

    handleChange(value, event) {
      this.setState({ value });
    }

  render() {
    return (
      <>
      < Navigation />

    <h2> Focus</h2>
      <ToggleButtonGroup
        name="Focus"
        id="category"
        type="radio"
        value={this.state.category}
        onChange={event => this.setState({category: [event]})}
      >
        <ToggleButton value={"Strength"}>Strength</ToggleButton>
        <ToggleButton value={"Muscle"}>Muscle</ToggleButton>
        <ToggleButton value={"Mobility"}>Mobility</ToggleButton>
        <ToggleButton value={"Speed"}>Speed</ToggleButton>
        <ToggleButton value={"Flexibility"}>Flexibility</ToggleButton>
        <ToggleButton value={"Cardio"}>Cardio</ToggleButton>
      </ToggleButtonGroup>


      <h2> Expertise </h2>
      <ToggleButtonGroup
        name="Expertise"
        type="radio"
        value={this.state.expertise}
        onChange={event => this.setState({expertise: [event]})}
      >
        <ToggleButton value={1}>Beginner</ToggleButton>
        <ToggleButton value={2}>Novice</ToggleButton>
        <ToggleButton value={3}>Intermediate</ToggleButton>
        <ToggleButton value={4}>Advanced</ToggleButton>
      </ToggleButtonGroup>

      <h2> Length </h2>
        <ToggleButtonGroup
          name="Length"
          type="radio"
          value={this.state.length}
          onChange={event => this.setState({length: [event]})}
        >
          <ToggleButton value={1}>30 min</ToggleButton>
          <ToggleButton value={2}>60 min</ToggleButton>
          <ToggleButton value={3}>90 min</ToggleButton>
          <ToggleButton value={4}>120 min</ToggleButton>
        </ToggleButtonGroup>


      <h2> Intensity </h2>
        <ToggleButtonGroup
          name="Intensity"
          type="radio"
          value={this.state.intensity}
          onChange={event => this.setState({intensity: [event]})}
        >
        <ToggleButton value={1}>Easy</ToggleButton>
        <ToggleButton value={2}>Medium</ToggleButton>
        <ToggleButton value={3}>Hard</ToggleButton>
      </ToggleButtonGroup>

      <ButtonToolbar>
        <Button className="mt-4" size="lg" variant="outline-success" block>Generate</Button>
      </ButtonToolbar>
      <h2> Choose exercises to keep in Generated Workout </h2>
      <Button className="mt-4" size="lg" variant="outline-success" block>Add to Workout</Button>
    </>
    );
  }
}

export default WorkoutGenerator;
