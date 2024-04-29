import React from "react";
import { Link } from "react-router-dom";
import "./styles/Account-style.css";
import { useAuthContext } from "../contexts/AuthContext";

const Account = () => {
  const { currentUser, logout } = useAuthContext();
  return (
    <div className="account">
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span className="profile">{currentUser.displayName}</span>
          <span onClick={logout} class="material-icons-outlined" title="Logout">
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Account;
