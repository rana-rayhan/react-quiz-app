import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";

import AuthProvider from "./contexts/AuthContext";
import Home from "./components/pages/Home";
import Layout from "./layouts/Layout";
import Login from "./components/pages/Login";
import Result from "./components/pages/Result";
import Signup from "./components/pages/Signup";
import Quiz from "./components/pages/Quiz";

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
