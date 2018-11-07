import React from "react";
import "./EachRun.css";
import SPCA from "../Charities/Charity/SPCA";

const SPCARun = props => (
  <div className="column">
    <div className="ui fluid card runDetails">
      <div className="content">
        <h4 className="header">{props.miles} miles Gifted!</h4>
      </div>
      <SPCA />
    </div>
  </div>
);

export default SPCARun;
