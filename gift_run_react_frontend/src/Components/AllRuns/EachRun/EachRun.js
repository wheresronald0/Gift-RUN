import React, { Component } from "react";
import "./EachRun.css";

//THIS IS THE TILE so I probably just want miles and charity

class EachRun extends Component {
  render() {
    return (
      <div>
        <p>You Donated {this.props.miles} To:</p>
        {/* import charity log and insert here (will need logic to dispaly or I can just display {this.props.charity}) */}
      </div>
    );
  }
}

export default EachRun;
