import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import "../Container/Layout.css";
import backdrop from "../Assets/backdrop.jpeg";
import LogRun from "./LogRun/LogRun";
import Charities from "../Components/Charities/Charities";
import AllRuns from "../Components/AllRuns/AllRuns";
import LandingPage from "../Components/LandingPage/LandingPage";
import UpdateRun from "../Container/LogRun/UpdateRun/UpdateRun";
// import ButtonExampleButton from "../Components/Semantic UI Components/Button";
class Layout extends Component {
  render() {
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
            <Redirect from="/workAround" to="/all-runs" />
            <Route path="/all-runs/:id/edit" component={UpdateRun} />
            <Route path="/all-runs/log-run" component={LogRun} />
            <Route path="/charities" component={Charities} />
            <Route path="/all-runs" component={AllRuns} />
            <Route path="/" component={LandingPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Layout;
