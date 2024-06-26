import React from "react";
import Nav from "./Nav";
import "./styles/Layout-style.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
};

export default Layout;
