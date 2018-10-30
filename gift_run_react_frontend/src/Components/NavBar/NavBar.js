import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import LogoPic from "./Logo/LogoPic";

const navBar = props => {
  return (
    <header>
      <nav className="navBar">
        <div className="logoImg">
          <LogoPic />
        </div>
        <ul>
          <li>
            <NavLink to={"/all-runs"}>Your Gift-RUNS</NavLink>
          </li>

          <li>
            <NavLink to={"/log-run"}>Log a Run</NavLink>
          </li>

          <li>
            <NavLink to={"/charities"}>Charities</NavLink>
          </li>

          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default navBar;
