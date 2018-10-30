import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./RunSummary.css";

class RunSummary extends Component {
  state = {
    run: null
  };

  componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.run ||
        (this.state.run && this.state.run.id !== this.props.id)
      ) {
        axios
          .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
          .then(response => {
            this.setState({ run: response.data });
            console.log(this.state.run);
          });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete("/api/" + this.props.run.id);
    // .then() redirect to AllRuns- not sure if the component will unmount
  };
  render() {
    console.log("HI from Run Summary");
    console.log(this.state.run);
    let run = <p />;
    if (this.state.run) {
      run = (
        <div className="runSummaryDetails">
          <div>
            <p>{this.state.run.title}</p>
            <p>Hola!</p>
            {/* //real props below */}
            {/* <p>{this.state.id}</p>
          <p>{this.state.date}</p>
          <p>{this.state.miles}</p>
          <p>{this.state.totalTime}</p>
          <p>{this.state.location}</p> */}
          </div>
          <div>
            <NavLink to={"/log-run"}>
              <button className="editButtons">Log Another Run</button>
            </NavLink>
            <NavLink to={"/update-run"}>
              <button className="editButtons">Edit Run Details</button>
            </NavLink>

            <button className="editButtons" onClick={this.deletePostHandler}>
              Delete This Run
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div>{run}</div>
      </div>
    );
  }
}

export default RunSummary;
