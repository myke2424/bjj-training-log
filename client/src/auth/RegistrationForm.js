import React from 'react';
import { Alert, Button, Form, FormGroup, Input, FormText } from 'reactstrap';

const RegistrationForm = (props) => {
  return (
    <div className='authContainer'>
      <h4>CREATE ACCOUNT</h4>
      <Form>
        <FormGroup>
          <Input
            className='authInput'
            type='text'
            name='name'
            value={props.email}
            onChange={props.inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='authInput'
            type='email'
            name='email'
            value={props.email}
            onChange={props.inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='authInput'
            type='password'
            name='password'
            value={props.password}
            onChange={props.inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='authInput'
            type='belt'
            name='belt'
            value={props.belt}
            onChange={props.inputHandler}
          />
        </FormGroup>
        <Button className='authBtn' onClick={props.submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
