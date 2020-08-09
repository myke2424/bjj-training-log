import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInfo;

  const submitLoginForm = (event) => {
    event.preventDefault();
  };

  const loginForm = () => (
    <form>
      <div className='form-group'>
        <label>Email</label>
        <input type='email' className='form-control' />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input type='password' className='form-control' />
      </div>
      <button>Login</button>
    </form>
  );

  return <div>{loginForm()}</div>;
}

export default Login;
