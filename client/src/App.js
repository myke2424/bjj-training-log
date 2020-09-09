import React from 'react';
import './App.css';
import Login from './user/Login';
import Register from './user/Register';
import Workout from './workout/workout';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Login />
        <Workout />
      </div>
    </div>
  );
}

export default App;
