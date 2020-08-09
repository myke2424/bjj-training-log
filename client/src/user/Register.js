import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
    belt: '',
  });

  const { name, email, password, belt } = userInfo;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setUserInfo({ ...userInfo, [event.target.name]: value });
  };

  const submitRegisterForm = (event) => {
    event.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:8000/api/users',
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        name: name,
        email: email,
        password: password,
        belt: belt,
      },
    })
      .then((response) => {
        console.log(response);
        setUserInfo({ ...userInfo });
      })
      .catch((err) => console.log(err.message));
  };

  const registerForm = () => (
    <form>
      <div className='form-group'>
        <label>Name</label>
        <input
          type='text'
          className='form-control'
          name='name'
          value={name}
          onChange={handleInputChange}
        />
      </div>
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
      <div className='form-group'>
        <label>Belt</label>
        <input
          type='text'
          className='form-control'
          name='belt'
          value={belt}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={submitRegisterForm}>Register</button>
    </form>
  );

  return <div>{registerForm()}</div>;
}

export default Register;
