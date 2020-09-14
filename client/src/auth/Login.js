import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './auth.css';

import LoginForm from './LoginForm';
import Error from './Error';

import localStorageManager from '../utils/LocalStorageManager';

function Login() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    error: '',
  });

  const { email, password, error } = userInfo;

  // Dynamic handler (Handle multiple input changes)
  const handleInputChange = (event) => {
    const value = event.target.value;
    setUserInfo({ ...userInfo, [event.target.name]: value });
  };

  // TODO - store auth token when user registers and pass to headers (x-auth-token)
  const submitLoginForm = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:8080/api/auth',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        password: password,
      },
      withCredentials: true,
    })
      .then((response) => {
        console.log('User Login Succesful!');
        console.log(response);

        localStorageManager.saveUser(response.data);
        setUserInfo({ ...userInfo });
      })
      .catch((err) => {
        console.log(err.message);
        setUserInfo({ ...userInfo, error: err.message });
      });
  };

  const redirectUser = () => {
    if (localStorageManager.getUser()) return <Redirect to='/user/dashboard' />;
    else return <Redirect to='/' />;
  };

  return (
    <div>
      <LoginForm
        userEmail={email}
        userPassword={password}
        inputHandler={handleInputChange}
        submitForm={submitLoginForm}
      />
      {redirectUser()}
      {error ? <Error errorMsg={error} /> : null}
    </div>
  );
}

export default Login;
