import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import axios from 'axios';

import localStorageManager from '../utils/LocalStorageManager';

function WorkoutList() {
  const { jwtToken, user } = localStorageManager.getUser();

  const getWorkouts = () => {
    axios({
      url: 'http://localhost:8080/api/workouts',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': jwtToken,
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log(`${user.name} workouts`);
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return <div>{getWorkouts()}</div>;
}

export default WorkoutList;
