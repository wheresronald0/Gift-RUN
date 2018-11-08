import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import "./RunSummary.css";
import Run from "../../Assets/run1.jpeg";

class RunSummary extends Component {
  state = {
    run: null,
    deleteRedirect: false
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.run ||
        (this.state.run && this.state.run._id !== this.props.match.params.id)
      ) {
        axios
          .get(
            "https://gift-run.herokuapp.com/run/" + this.props.match.params.id
          )
          // .get("http://localhost:4000/run/" + this.props.match.params.id)
          .then(response => {
            this.setState({ run: response.data });
          });
      }
    }
  }

  setDeleteRedirect = () => {
    this.setState({ deleteRedirect: true });
    this.setDeleteRedirect = this.setDeleteRedirect.bind(this);
  };

  renderOnDeleteRedirect = () => {
    if (this.state.deleteRedirect) {
      return <Redirect to="/workAround" />;
    }
  };

  deletePostHandler = () => {
    axios
      .delete("https://gift-run.herokuapp.com/run/" + this.state.run._id)
      // .delete("http://localhost:4000/run/" + this.state.run._id)
      .then(response => {
        if (response) {
          this.setDeleteRedirect();
        }
      });
  };

  render() {
    let run = null;
    if (this.state.run) {
      run = (
        <div className="ui raised very padded text container segment">
          <div>
            <h2 class="ui header">Here are the details of this Gift-RUN</h2>

            <p>
              <strong>Date of your run:&nbsp;&nbsp;&nbsp;</strong>
              {this.state.run.date}
            </p>
            <p>
              <strong>Miles you ran:&nbsp;&nbsp;&nbsp;</strong>
              {this.state.run.miles}
            </p>
            <p>
              <strong>Total time of your run:&nbsp;&nbsp;&nbsp;</strong>
              {this.state.run.totalTime}
            </p>
            <p>
              <strong>Location of your run:&nbsp;&nbsp;&nbsp;</strong>
              {this.state.run.location}
            </p>
            <p>
              <strong>
                The charity receiving your Gift:&nbsp;&nbsp;&nbsp;
              </strong>
              {this.state.run.charity}
            </p>
          </div>
          <div className="buttonWrapper">
            <NavLink to={"/all-runs/log-run"}>
              <button class="ui yellow button">Log Another Run</button>
            </NavLink>

            <NavLink to={"/all-runs/" + this.state.run._id + "/edit"}>
              <button class="ui yellow button">Edit Run Details</button>
            </NavLink>

            <button class="ui red button" onClick={this.deletePostHandler}>
              Delete This Run
            </button>
            {this.renderOnDeleteRedirect()}
          </div>
        </div>
      );
    }
    return (
      <div className="summary">
        <div>{run}</div>
      </div>
    );
  }
}

export default RunSummary;
