import React from "react";
import "./NavBar.css";

const navBar = props => {
  return (
    <header>
      <nav className="navBar">
        <h1>Gift-RUN</h1>
        <ul>
          <p>Your Gift-RUNS</p>
          <p>Charities</p>
          <p>Home</p>
        </ul>
      </nav>
    </header>
  );
};

export default navBar;
