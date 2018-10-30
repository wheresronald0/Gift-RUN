import React from "react";
import img from "../../../Assets/runLogo3.jpg";
import "./LogoPic.css";

const logoPic = () => {
  return (
    <div>
      <img src={img} className="logoPic" alt="logo pic" />
    </div>
  );
};

export default logoPic;
