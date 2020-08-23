import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    error: '',
    redirectTo: false,
    loggedIn: false,
  });

  const { email, password, error, redirectTo, loggedIn } = userInfo;

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
    })
      .then((response) => {
        console.log('User Login Succesful!');
        const jwtToken = response.data;
        localStorage.setItem('x-auth-token', jwtToken); // send this auth token in headers for api endpoints
        setUserInfo({ ...userInfo, redirectTo: true, loggedIn: true });
      })
      .catch((err) => {
        console.log(err.message);
        setUserInfo({ ...userInfo, error: err.message });
      });
  };

  const showError = () => <div>{error}</div>;

  const redirectUser = () => {
    if (redirectTo) console.log('redirecting placeholder...');
  };

  const LoggedInText = () => (
    <div>
      <h1>Logged In</h1>
    </div>
  );

  const userStatus = () => {
    if (loggedIn && !error) {
      return <LoggedInText />;
    }
  };

  const userLogout = () => {
    setUserInfo({ ...userInfo, loggedIn: false });
  };

  const loginForm = () => (
    <form>
      <h3>Sign In</h3>
      <div className='form-group'>
        <label>Email</label>
        <input
          type='text'
          className='form-control'
          name='email'
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='text'
          className='form-control'
          name='password'
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={submitLoginForm}>Login</button>
    </form>
  );

  return (
    <div>
      {loginForm()}
      {redirectUser()}
      {showError()}
      {userStatus()}
    </div>
  );
}

export default Login;
