import React from "react";
import "./EachRun.css";
import STC from "../Charities/Charity/STC";

const stcRun = props => (
  <div className="column">
    <div className="ui fluid card runDetails">
      <div className="content">
        <h4 className="header">{props.miles} miles Gifted!</h4>
      </div>
      <STC />
    </div>
  </div>
);

export default stcRun;
