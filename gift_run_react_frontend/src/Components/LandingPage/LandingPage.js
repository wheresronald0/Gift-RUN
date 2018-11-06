import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

const landingPage = () => {
  return (
    <div className="landingPageWrapper">
      <h1 className="welcomeMessage ">Welcome. Please Log a Gift-RUN!</h1>

      <NavLink to={"/all-runs/log-run"}>
        <button className="bigLandingButton">Log a Run</button>
      </NavLink>
    </div>
  );
};

export default landingPage;
