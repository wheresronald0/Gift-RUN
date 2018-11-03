import React from "react";
import "../Charities/Charities.css";
import SPCA from "./Charity/SPCA";
import CatHouse from "./Charity/CatHouse";
import WoundedWarriors from "./Charity/WoundedWarriors";
import RedCross from "./Charity/RedCross";

const charities = () => {
  return (
    <div className="charities">
      <div>
        <h1>SPCA</h1>
        <SPCA />
      </div>
      <div>
        <h1>Cat House on The Kings</h1>
        <CatHouse />
      </div>
      <div>
        <h1>Wounded Warrior Project</h1>
        <WoundedWarriors />
      </div>
      <div>
        <h1>American Red Cross</h1>
        <RedCross />
      </div>
    </div>
  );
};

export default charities;
