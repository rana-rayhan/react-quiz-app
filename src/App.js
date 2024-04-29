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
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute element={Signup} />} />
            <Route path="/login" element={<PublicRoute element={Login} />} />

            <Route path="/quiz/:id" element={<PrivateRoute element={Quiz} />} />
            <Route
              path="/result/:id"
              element={<PrivateRoute element={Result} />}
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
