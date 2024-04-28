import React from "react";
import Illustratuon from "../Illustratuon";
import LoginForm from "../LoginForm";
import "../../styles/Auth-style.css";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustratuon />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
