import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/AuthContext";
import TextInput from "./TextInput";
import Button from "./Button";
import Form from "./Form";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(null);

  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      return toast.error("Password is too small!");
    }

    try {
      setLoading(true);
      await login(email, password);
      setLoading(false);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      toast.error("Failed to login!");
    }
  };
  return (
    <Form className="login form" onSubmit={handleSubmit}>
      <h1>Login to your account</h1>
      <TextInput
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter email"
        icon={"alternate_email"}
        autoComplete="email"
      />
      <TextInput
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
        icon={"lock"}
        autoComplete="current-password"
      />

      <Button type="submit" className="button">
        <span>{loading ? "Login...." : "Login Now"}</span>
      </Button>

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
      <Toaster />
    </Form>
  );
};

export default LoginForm;
