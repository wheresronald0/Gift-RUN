import React, { Component } from "react";
import NavBar from "../Components/NavBar/NavBar";
import "../Container/Layout.css";
import backdrop from "../Assets/backdrop.jpeg";
// import LogRun from "./LogRun/LogRun";
// import RunSummary from "../Components/RunSummary/RunSummary";
// import Charities from "../Components/Charities/Charities";
// import AllRuns from "../Components/AllRuns/AllRuns";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="outerWrap"
        style={{ backgroundImage: "url(" + backdrop + ")" }}
      >
        <NavBar />
        <div className="layout">
          <h2>Welcome. Please Log a Gift-RUN!</h2>
        </div>
      </div>
    );
  }
}

export default Layout;
