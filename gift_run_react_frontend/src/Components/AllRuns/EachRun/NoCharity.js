import React from "react";
import "./EachRun.css";
import ACS from "../../Charities/Charity/ACS";

const acsRun = props => (
  <div className="column">
    <div className="ui fluid card runDetails">
      <div className="content">
        <h4 className="header">{props.miles} miles Gifted!</h4>
      </div>
      <ACS />
    </div>
  </div>
);

export default acsRun;
