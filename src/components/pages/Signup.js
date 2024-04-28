import React from "react";
import Illustratuon from "../Illustratuon";
import SignupForm from "../SignupForm";
import "../../styles/Auth-style.css";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustratuon />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
