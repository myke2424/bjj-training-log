import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Register from './user/Register';
import Login from './user/Login';
import Dashboard from './user/Dashboard';

const routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/register' exact component={Register} />
        <Route path='/' exact component={Login} />
        <Route path='/user/dashboard' exact component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default routes;
