import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

const landingPage = () => {
  return (
    <div className="landingPageWrapper">
      <h2>Welcome. Please Log a Gift-RUN!</h2>

      <NavLink to={"/log-run"}>
        <button className="bigLandingButton">Log a Run</button>
      </NavLink>
    </div>
  );
};

export default landingPage;
