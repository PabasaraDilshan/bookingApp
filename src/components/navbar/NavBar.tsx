import React from "react";
import "./navbar.css";
function NavBar() {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
            logo
        </span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>

        </div>
      </div>
    </div>
  );
}

export default NavBar;
