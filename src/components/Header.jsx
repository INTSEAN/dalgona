import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo-text">
          d<span style={{ color: "#F72F38" }}>ALGO</span>na
        </h1>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <a href="#download">Download</a>
          </li>
          <li>
            <a href="#footer">Developer Info</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
