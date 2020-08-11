import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Register from './user/Register';
import Login from './user/Login';

const Router = () => {
  return (
    <Router>
      <Route path='/register' exact component={Register}></Route>
      <Route path='/login' exact component={Login}></Route>
    </Router>
  );
};

export default Router;
