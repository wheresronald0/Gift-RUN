import React from "react";
import "../Charity/Charity.css";
import ACS from "../../../Assets/ACS.jpg";

const acs = () => {
  return (
    <div className="chartiy">
      <img src={ACS} alt="American Cancer Society logo" />
    </div>
  );
};

export default acs;
