import React from "react";
import "../Charity/Charity.css";
import WoundedWarriors from "../../../Assets/Wounded-Warrior-Project-Logo.jpg";

const woundedWarriors = () => {
  return (
    <div className="chartiy">
      <img src={WoundedWarriors} alt="Wounded Warriors logo" />
    </div>
  );
};

export default woundedWarriors;
