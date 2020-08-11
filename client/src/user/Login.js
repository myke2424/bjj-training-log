import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    error: '',
    redirectTo: false,
  });

  const { email, password, redirectTo, error } = userInfo;

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
      url: 'http://localhost:8000/api/auth',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        console.log(response);
        setUserInfo({ ...userInfo, redirectTo: true });
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
    </div>
  );
}

export default Login;
