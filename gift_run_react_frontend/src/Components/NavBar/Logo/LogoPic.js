import React from "react";
import Logo from "../../../Assets/runLogo_black.jpg";
import "./LogoPic.css";

const logoPic = () => {
  return (
    <div>
      <img src={Logo} className="logoPic" alt="logo pic" />
    </div>
  );
};

export default logoPic;
