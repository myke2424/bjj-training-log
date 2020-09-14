import React, { useState } from 'react';
import axios from 'axios';
import RegisterForm from './RegistrationForm';

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
      url: 'http://localhost:8080/api/users',
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

  return (
    <div>
      <RegisterForm
        name={name}
        email={email}
        password={password}
        belt={belt}
        inputHandler={handleInputChange}
        submitForm={submitRegisterForm}
      />
    </div>
  );
}

export default Register;
