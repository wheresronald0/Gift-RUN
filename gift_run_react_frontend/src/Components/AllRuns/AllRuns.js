import React, { Component } from "react";
import EachRun from "./EachRun/EachRun";
import "./AllRuns.css";
import RunSummary from "../RunSummary/RunSummary";
import axios from "axios";
import { Link, Route } from "react-router-dom";

//need to .map jsx on Layout component
class AllRuns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: [],
      runId: null
    };
    // this.runSummarySelectedHandler = this.runSummarySelectedHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/run") //might need || statement on these to deploy
      .then(response => {
        // console.log(response.data);
        this.setState({ run: response.data });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }

  // update the runId state to tile clicked
  // runSummarySelectedHandler = id => {
  //   this.setState({ runId: id });
  //   console.log("Hello from the runSummarySelected Handler!");
  // };

  render() {
    console.log(this.props);
    let populateRuns = this.state.run.map(obj => {
      return (
        <Link to={"/all-runs/" + obj._id} key={obj._id}>
          <EachRun
            id={obj._id}
            date={obj.date}
            miles={obj.miles}
            totalTime={obj.totalTime}
            location={obj.location}
            charity={obj.charity}
            // clicked={() => this.runSummarySelectedHandler(obj.id)}
          />
        </Link>
      );
    });

    return (
      <div>
        <h1>Your Gift Runs</h1>

        <Route path={this.props.match.url + "/:id"} component={RunSummary} />

        <div className="allRuns">{populateRuns}</div>
      </div>
    );
  }
}

export default AllRuns;

// get data from api
// set state with all the data
// map each
