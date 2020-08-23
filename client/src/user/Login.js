import React, { useState } from 'react';
import { Alert, Button, Form, FormGroup, Input, FormText } from 'reactstrap';
import axios from 'axios';
import './user.css';

function Login() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    error: '',
    redirectTo: false,
  });

  const { email, password, error, redirectTo } = userInfo;

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
      url: 'http://localhost:8080/api/login',
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
        const jwtToken = response.data;
        localStorage.setItem('x-auth-token', jwtToken); // send this auth token in headers for api endpoints
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
    <div className='loginContainer'>
      <h4>SIGN IN TO YOUR ACCOUNT</h4>
      <Form>
        <FormGroup>
          <Input
            className='loginInput'
            type='email'
            name='email'
            value={email}
            placeholder='cobrakai@gmail.com'
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='loginInput'
            type='password'
            name='password'
            value={password}
            placeholder='**************'
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button className='loginBtn' onClick={submitLoginForm}>
          Submit
        </Button>
      </Form>
    </div>
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
