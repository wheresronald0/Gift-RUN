import React from "react";
import "../Charities/Charities.css";
import Charity from "../Charities/Charity/Charity";

const charities = () => {
  return (
    <div className="charities">
      <div>
        <h1>SPCA</h1>
        <Charity />
      </div>
      <div>
        <h1>Kat House on The Kings</h1>
        <Charity />
      </div>
      <div>
        <h1>Wounded Warriors</h1>
        <Charity />
      </div>
      <div>
        <h1>Red Cross</h1>
        <Charity />
      </div>
    </div>
  );
};

export default charities;
