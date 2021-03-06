import React, { Component } from "react";
import "./AllRuns.css";
import RunSummary from "../RunSummary/RunSummary";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import SPCARun from "../../Components/EachRun/SPCARun";
import ACSRun from "../../Components/EachRun/ACSRun";
import STCRun from "../../Components/EachRun/STCRun";
import HabitatRun from "../../Components/EachRun/HabitatRun";

class AllRuns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: [],
      runId: null,
      isLoaded: false
    };
  }

  componentDidMount() {
    axios
      .get("https://gift-run.herokuapp.com/run")
      // .get("http://localhost:4000/run$delay=5")
      .then(response => {
        this.setState({ run: response.data, isLoaded: true });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let populateRuns = null;
    if (this.state.isLoaded) {
      populateRuns = this.state.run.map(obj => {
        if (obj.charity === "SPCA") {
          return (
            <Link to={"/all-runs/" + obj._id} key={obj._id}>
              <SPCARun
                id={obj._id}
                date={obj.date}
                miles={obj.miles}
                totalTime={obj.totalTime}
                location={obj.location}
                charity={obj.charity}
              />
            </Link>
          );
        } else if (obj.charity === "American Cancer Society") {
          return (
            <Link to={"/all-runs/" + obj._id} key={obj._id}>
              <ACSRun
                id={obj._id}
                date={obj.date}
                miles={obj.miles}
                totalTime={obj.totalTime}
                location={obj.location}
                charity={obj.charity}
              />
            </Link>
          );
        } else if (obj.charity === "Save the Children") {
          return (
            <Link to={"/all-runs/" + obj._id} key={obj._id}>
              <STCRun
                id={obj._id}
                date={obj.date}
                miles={obj.miles}
                totalTime={obj.totalTime}
                location={obj.location}
                charity={obj.charity}
              />
            </Link>
          );
        } else if (obj.charity === "Habitat for Humanity") {
          return (
            <Link to={"/all-runs/" + obj._id} key={obj._id}>
              <HabitatRun
                id={obj._id}
                date={obj.date}
                miles={obj.miles}
                totalTime={obj.totalTime}
                location={obj.location}
                charity={obj.charity}
              />
            </Link>
          );
        } else {
          return (
            <Link to={"/all-runs/" + obj._id} key={obj._id}>
              <HabitatRun
                id={obj._id}
                date={obj.date}
                miles={obj.miles}
                totalTime={obj.totalTime}
                location={obj.location}
                charity={obj.charity}
              />
            </Link>
          );
        }
      });
    } else {
      return (
        <div className="spinner">
          Loading Your Runs
          <div className="bounce1" />
          <div className="bounce2" />
          <div className="bounce3" />
        </div>
      );
    }

    return (
      <section className="container">
        <div className="allRuns">
          <h1>Your Gift Runs</h1>

          <div className="ui four column grid populateAllRuns">
            {populateRuns}
          </div>

          <div className="summary">
            <Route
              path={this.props.match.url + "/:id"}
              component={RunSummary}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default AllRuns;
