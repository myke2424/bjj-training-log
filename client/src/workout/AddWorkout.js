import React, { useState } from 'react';
import axios from 'axios';
import AddWorkoutForm from './AddWorkoutForm';

import localStorageManager from '../utils/LocalStorageManager';

function Workout() {
  const [workoutInfo, setWorkoutInfo] = useState({
    type: '',
    userId: localStorage.getItem('userId'),
    date: '',
    sessionLength: '',
    techniques: ['arm-bar', 'testing'],
    notes: '',
  });

  const { jwtToken, user } = localStorageManager.getUser();

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
        'x-auth-token': jwtToken,
      },
      data: {
        type: type,
        userId: user.id,
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

  return (
    <div>
      <AddWorkoutForm
        type={type}
        date={date}
        sessionLength={sessionLength}
        notes={notes}
        handleInput={handleInputChange}
        submitForm={submitWorkoutForm}
      />
    </div>
  );
}

export default Workout;
