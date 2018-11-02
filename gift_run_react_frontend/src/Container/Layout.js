import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import "../Container/Layout.css";
import backdrop from "../Assets/backdrop.jpeg";
import LogRun from "./LogRun/LogRun";
import Charities from "../Components/Charities/Charities";
import AllRuns from "../Components/AllRuns/AllRuns";
import LandingPage from "../Components/LandingPage/LandingPage";
class Layout extends Component {
  render() {
    console.log("Hello from layout");

    return (
      <div
        className="outerWrap"
        style={{ backgroundImage: "url(" + backdrop + ")" }}
      >
        <div>
          <NavBar />
        </div>

        <div className="layout">
          <Switch>
            <Route path="/all-runs" component={AllRuns} />
            <Route path="/charities" component={Charities} />
            <Route path="/log-run" component={LogRun} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;

// Your Gift Runs Psuedo:
// on click of navbar link, load the AllRiuns Component
// get requests, and map to Layout compont via jsx
