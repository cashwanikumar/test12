import React from "react";
import { FormGroup, Label, Input, Button } from "reactstrap";

import './index.scss'

const Register = () => {
  return (
    <div className="registration-container">
      <h3 className="title mt-2">Registration</h3>
      <FormGroup>
        <Label>First Name</Label>
        <Input />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" />
      </FormGroup>
      <div className="form-btn">
        <Button color="danger">Cancel</Button>
        <Button color="primary">Submit</Button>
      </div>
    </div>
  );
};

export default Register;
