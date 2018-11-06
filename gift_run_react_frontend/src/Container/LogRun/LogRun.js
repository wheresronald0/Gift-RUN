import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./LogRun.css";
import SPCA from "../../Components/Charities/Charity/SPCA";
import ACS from "../../Components/Charities/Charity/ACS";
import STC from "../../Components/Charities/Charity//STC";
import Habitat from "../../Components/Charities/Charity/Habitat";
class LogRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  setRedirect = () => {
    this.setState({ redirect: true });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/all-runs" />;
    }
  };

  postRunHandler = () => {
    const data = this.state;
    axios.post("http://localhost:4000/run/new", data).then(response => {
      if (response) {
        this.setRedirect();
      }
    });
  };

  render() {
    return (
      <div className="ui raised text container segment">
        <div className="ui two column grid">
          <div className="row">
            <div className="column">
              <h1>Tell Us About Your Run</h1>
              <div className="ui form">
                <div className="field">
                  <label>Date of Your Run</label>
                  <input
                    type="text"
                    value={this.state.date}
                    onChange={event =>
                      this.setState({ date: event.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Total Miles You Ran</label>
                  <input
                    type="text"
                    value={this.state.miles}
                    onChange={event =>
                      this.setState({ miles: event.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Total Run Time</label>
                  <input
                    type="text"
                    value={this.state.totalTime}
                    onChange={event =>
                      this.setState({ totalTime: event.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Location of Your Run</label>
                  <input
                    type="text"
                    value={this.state.location}
                    onChange={event =>
                      this.setState({ location: event.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label>Which Charity?</label>
                  <select
                    onChange={event =>
                      this.setState({ run: { charity: event.target.value } })
                    }
                  >
                    <option> Please Select:</option>
                    <option value="SPCA">SPCA</option>
                    <option value="American Cancer Society">
                      American Cencer Society
                    </option>
                    <option value="Save the Children">Save the Children</option>
                    <option value="Habitat for Humanity">
                      Habitat for Humanity
                    </option>
                  </select>
                </div>
                <button class="ui yellow button" onClick={this.postRunHandler}>
                  Log Run
                </button>
                {this.renderRedirect()}
              </div>
            </div>
            <div className="row">
              <div className="column logos">
                <SPCA />
                <ACS />
                <STC />
                <Habitat />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LogRun;
