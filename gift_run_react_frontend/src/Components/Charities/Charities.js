import React from "react";
import "../Charities/Charities.css";
import Charity from "../Charities/Charity/Charity";

const charities = props => {
  return (
    <div className="charities">
      <Charity />
      <Charity />
      <Charity />
      <Charity />
    </div>
  );
};

export default charities;
