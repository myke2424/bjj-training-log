import React from 'react';
import { Alert, Button, Form, FormGroup, Input, FormText } from 'reactstrap';

const LoginForm = (props) => {
  return (
    <div className='loginContainer'>
      <h4>SIGN IN TO YOUR ACCOUNT</h4>
      <Form>
        <FormGroup>
          <Input
            className='loginInput'
            type='email'
            name='email'
            value={props.userEmail}
            placeholder='cobrakai@gmail.com'
            onChange={props.inputHandler}
          />
        </FormGroup>
        <FormGroup>
          <Input
            className='loginInput'
            type='password'
            name='password'
            value={props.userPassword}
            placeholder='**************'
            onChange={props.inputHandler}
          />
        </FormGroup>
        <Button className='loginBtn' onClick={props.submitForm}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
