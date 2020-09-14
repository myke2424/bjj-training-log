import React from 'react';
import { Alert, Button, Form, FormGroup, Input, FormText } from 'reactstrap';

const LoginForm = (props) => {
  return (
    <div className='authContainer'>
      <h4>SIGN IN TO YOUR ACCOUNT</h4>
      <Form>
        <FormGroup>
          <Input
            className='authInput'
            type='email'
            name='email'
            value={props.email}
            placeholder='cobrakai@gmail.com'
            onChange={props.inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='authInput'
            type='password'
            name='password'
            value={props.password}
            placeholder='**************'
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

export default LoginForm;
