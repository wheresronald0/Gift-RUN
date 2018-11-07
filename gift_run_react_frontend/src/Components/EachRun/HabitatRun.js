import React from "react";
import "./EachRun.css";
import Habitat from "../Charities/Charity/Habitat";

const habitatRun = props => (
  <div className="column">
    <div className="ui fluid card runDetails ">
      <div className="content">
        <h4 className="header">{props.miles} miles Gifted!</h4>
      </div>
      <Habitat />
    </div>
  </div>
);

export default habitatRun;
