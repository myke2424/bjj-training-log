import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import axios from 'axios';

function Workout() {
  const [workoutInfo, setWorkoutInfo] = useState({
    type: '',
    userId: localStorage.getItem('userId'),
    date: '',
    sessionLength: '',
    techniques: ['arm-bar', 'testing'],
    notes: '',
  });

  const { type, userId, date, sessionLength, techniques, notes } = workoutInfo;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setWorkoutInfo({ ...workoutInfo, [event.target.name]: value });
  };

  const submitWorkoutForm = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:8080/api/workouts',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': localStorage.getItem('x-auth-token'),
      },
      data: {
        type: type,
        userId: userId,
        date: date,
        sessionLength: sessionLength,
        techniques: techniques,
        notes: notes,
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log(`${userId} submitted a workout`);
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const workoutForm = () => (
    <div className='workoutContainer'>
      <h4>SAVE YOUR WORKOUT</h4>
      <Form>
        <FormGroup>
          <Input
            type='text'
            name='type'
            value={type}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='date'
            value={date}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='sessionLength'
            value={sessionLength}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='notes'
            value={notes}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button onClick={submitWorkoutForm}>Submit</Button>
      </Form>
    </div>
  );

  return <div>{workoutForm()}</div>;
}

export default Workout;
