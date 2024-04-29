import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";
import TextInput from "./TextInput";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();
  const { signUp } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return toast.error("Passwords don't match!");
    } else if (password.length < 6) {
      return toast.error("Password is too small!");
    }

    try {
      setLoading(true);
      await signUp(email, password, name);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Failed to create an account!");
    }
  };

  return (
    <Form className="signup form" onSubmit={handleSubmit}>
      <h1>Create an account</h1>

      <TextInput
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter name"
        icon="person"
        autoComplete="name"
      />
      <TextInput
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        autoComplete="email"
      />
      <TextInput
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
        icon="lock"
        autoComplete="new-password"
      />
      <TextInput
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        autoComplete="confirm-password"
      />

      <CheckBox
        required
        text="I agree to the Terms & Conditions"
        type="checkbox"
      />

      <Button disabled={loading} className="button" type="submit">
        <span>{loading ? "Submitting..." : "Submit Now"}</span>
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
      <Toaster />
    </Form>
  );
};

export default SignupForm;
