import React, { Component } from "react";
import EachRun from "./EachRun/EachRun";
import "./AllRuns.css";
import RunSummary from "../RunSummary/RunSummary";
import axios from "axios";
import { Link, Route, Switch } from "react-router-dom";
import UpdateRun from "../../Container/LogRun/UpdateRun/UpdateRun";

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
        // console.log(response.data);
        this.setState({ run: response.data });
        console.log(this.state);
      })
      .catch(error => {
        console.log(error);
      });
  }
  // update the runId state to tile clicked
  runSummarySelectedHandler = id => {
    this.setState({ runId: id });
    console.log("Hello from the runSummarySelected Handler!");
  };

  render() {
    let populateRuns = this.state.run.map(obj => {
      return (
        <Link to={"/all-runs/" + obj.id} key={obj.id}>
          {/* <Link to={"/all-runs/" + obj.id} key={obj.id}> */}
          <EachRun
            title={obj.title}
            // miles={this.state.miles}
            // charity={this.state.charity}
            clicked={() => this.runSummarySelectedHandler(obj.id)}
          />
        </Link>
      );
    });

    return (
      <div>
        <h1>Your Gift Runs</h1>
        <Switch>
          <Route path={"/all-runs/:id/edit"} component={UpdateRun} />
          <Route path={this.props.match.url + "/:id"} component={RunSummary} />
        </Switch>

        <div className="allRuns">{populateRuns}</div>
      </div>
    );
  }
}

export default AllRuns;

// get data from api
// set state with all the data
// map each
