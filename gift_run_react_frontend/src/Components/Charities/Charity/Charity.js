import React from "react";
import "../Charity/Charity.css";
import logo from "../../../Assets/spca.jpeg";
//import other three logos once I know what the charities are

const charity = () => {
  return (
    <div className="chartiy">
      <img src={logo} alt="SPCS logo" />
    </div>
  );
};

export default charity;
