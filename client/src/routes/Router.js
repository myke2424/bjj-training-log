import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../user/Dashboard';
import AddWorkout from '../workout/AddWorkout';
import WorkoutList from '../workout/WorkoutList';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/' exact component={Login} />
        <Route path='/user/dashboard' exact component={Dashboard} />
        <Route path='/user/workout' exact component={AddWorkout} />
        <Route path='/user/workouts' exact component={WorkoutList} />
      </Switch>
    </Router>
  );
};

export default routes;
