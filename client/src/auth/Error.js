import React from 'react';
import { Alert } from 'reactstrap';

const Error = (props) => {
  return (
    <div>
      <Alert color='danger'> {props.errorMsg} </Alert>
    </div>
  );
};

export default Error;
