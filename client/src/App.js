import React from 'react';
import './App.css';
import Login from './user/Login';
import NavBar from './base/NavBar';
import Register from './user/Register';
import Workout from './workout/workout';
import routes from './routes';

function App() {
  return (
    <div className='App'>
      <div className='container'>{routes()}</div>
    </div>
  );
}

export default App;
