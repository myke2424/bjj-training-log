import React, { useState } from 'react';
import NavBar from '../base/NavBar';
import { Redirect } from 'react-router-dom';
import localStorageManager from '../utils/LocalStorageManager';

function Dashboard() {
  // If the user doesn't exist - redirect to the login page
  const isAuthenticated = () => {
    if (!localStorageManager.getUser()) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div>
      <NavBar />
      {isAuthenticated()}
    </div>
  );
}

export default Dashboard;
