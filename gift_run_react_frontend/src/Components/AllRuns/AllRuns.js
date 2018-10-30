import React, { Component } from "react";
import EachRun from "./EachRun/EachRun";
import "./AllRuns.css";
import RunSummary from "../RunSummary/RunSummary";
import axios from "axios";

//need to .map jsx on Layout component
class AllRuns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: [],
      runId: null
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        console.log(response.data);
        this.setState({ run: response.data });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // update the runId state to tile clicked
  runSummarySelectedHandler = id => {
    console.log(id);
    console.log(this.state.runId);
    this.setState({ runId: id });
    console.log(this.state.runId);
  };

  render() {
    let populateRuns = this.state.run.map(obj => {
      return (
        <EachRun
          title={obj.title}
          key={obj.id}
          // miles={this.state.miles}
          // charity={this.state.charity}
          clicked={() => this.runSummarySelectedHandler(obj.id)}
        />
      );
    });

    return (
      <div>
        <h1>Your Gift Runs</h1>
        <div>
          <RunSummary id={this.state.runId} />
        </div>
        <div className="allRuns">{populateRuns}</div>
      </div>
    );
  }
}

export default AllRuns;

// get data from api
// set state with all the data
// map each
