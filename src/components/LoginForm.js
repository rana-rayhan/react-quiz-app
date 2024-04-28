import React from "react";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import Button from "./Button";
import Form from "./Form";

const LoginForm = () => {
  return (
    <Form className="login form">
      <TextInput
        type="text"
        placeholder="Enter email"
        icon={"alternate_email"}
      />
      <TextInput type="password" placeholder="Enter password" icon={"lock"} />

      <Button className="button">
        <span>Submit Now</span>
      </Button>

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
};

export default LoginForm;
