import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Layout from "./layouts/Layout";
import Signup from "./components/pages/Signup";
import Home from "./components/pages/Home";
import Result from "./components/pages/Result";
import Quiz from "./components/pages/Quiz";
import Login from "./components/pages/Login";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
