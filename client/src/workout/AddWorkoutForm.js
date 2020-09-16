import React from 'react';
import { Alert, Button, Form, FormGroup, Input, FormText } from 'reactstrap';

const AddWorkoutForm = (props) => {
  return (
    <div className='workoutContainer'>
      <h4>SAVE YOUR WORKOUT</h4>
      <Form>
        <FormGroup>
          <Input
            type='text'
            name='type'
            value={props.type}
            onChange={props.handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='date'
            value={props.date}
            onChange={props.handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='sessionLength'
            value={props.sessionLength}
            onChange={props.handleInput}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='notes'
            value={props.notes}
            onChange={props.handleInput}
          />
        </FormGroup>
        <Button onClick={props.submitForm}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddWorkoutForm;
