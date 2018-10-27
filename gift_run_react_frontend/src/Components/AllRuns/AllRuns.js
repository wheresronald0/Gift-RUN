import React, { Component } from "react";
import EachRun from "./EachRun/EachRun";
import "./AllRuns.css";

//need to .map jsx
class AllRuns extends Component {
  render() {
    return (
      <div className="allRuns">
        <EachRun />
        {/* {EachRun} */}
      </div>
    );
  }
}

export default AllRuns;
