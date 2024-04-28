import React from "react";
import { Link } from "react-router-dom";
import Accounts from "./Accounts";
import logo from "../assets/images/logo-bg.png";
import "./styles/Nav-style.css";

const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>JavaScript Quiz</h3>
          </Link>
        </li>
      </ul>
      <Accounts />
    </nav>
  );
};

export default Nav;
