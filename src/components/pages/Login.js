import React from "react";
import Illustratuon from "../Illustratuon";
import LoginForm from "../LoginForm";
import "../../styles/Auth-style.css";

const Login = () => {
  return (
    <>
      <div className="column">
        <Illustratuon />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
