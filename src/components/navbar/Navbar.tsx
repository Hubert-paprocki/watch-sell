import React from "react";
import "./navbar.scss";

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <p>(add logo)</p>
      </div>
      <button className="menu-button" aria-label="Open menu">
        ☰
      </button>
    </header>
  );
}

export default Navbar;
