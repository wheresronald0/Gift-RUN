import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./UpdateRun.css";
import SPCA from "../../../Components/Charities/Charity/SPCA";
import ACS from "../../../Components/Charities/Charity/ACS";
import STC from "../../../Components/Charities/Charity//STC";
import Habitat from "../../../Components/Charities/Charity/Habitat";

class UpdateRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: null,
      updateRedirect: false
    };
  }

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
        (this.state.run.id && this.state.run.id !== +this.props.match.params.id)
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

  updateRunHandler = () => {
    const data = this.state.run;

    axios
      .put(
        "https://gift-run.herokuapp.com/run/" + this.props.match.params.id,
        data
      )
      // .put("http://localhost:4000/run/" + this.props.match.params.id, data)
      .then(response => {
        if (response) {
          this.setUpdateRedirect();
        }
      });
  };

  setUpdateRedirect = () => {
    this.setState({ updateRedirect: true });
  };

  renderOnUpdateRedirect = () => {
    if (this.state.updateRedirect) {
      return <Redirect to="/all-runs" />;
    }
  };

  render() {
    let updateForm = null;
    if (this.state.run) {
      updateForm = (
        <div className="row">
          <div className="column">
            <h1>Update Your Gift-RUN</h1>
            <div className="ui form">
              <div className="field">
                <label>Date of Your Run</label>
                <input
                  type="text"
                  value={this.state.run.date}
                  onChange={event =>
                    this.setState({ run: { date: event.target.value } })
                  }
                />
              </div>
              <div className="field">
                <label>Total Miles You Ran</label>
                <input
                  type="text"
                  value={this.state.run.miles}
                  onChange={event =>
                    this.setState({ run: { miles: event.target.value } })
                  }
                />
              </div>
              <div className="field">
                <label>Total Run Time</label>
                <input
                  type="text"
                  value={this.state.run.totalTime}
                  onChange={event =>
                    this.setState({
                      run: { totalTime: event.target.value }
                    })
                  }
                />
              </div>
              <div className="field">
                <label>Location of Your Run</label>
                <input
                  type="text"
                  value={this.state.run.location}
                  onChange={event =>
                    this.setState({ run: { location: event.target.value } })
                  }
                />
              </div>
              <div className="field">
                <label>Which Charity?</label>
                <select
                  onChange={event =>
                    this.setState({ run: { charity: event.target.value } })
                  }
                  value={this.state.run.charity}
                >
                  <option> Please Select:</option>
                  <option value="SPCA">SPCA</option>
                  <option value="American Cancer Society">
                    American Cancer Society
                  </option>
                  <option value="Save the Children">Save the Children</option>
                  <option value="Habitat for Humanity">
                    Habitat for Humanity
                  </option>
                </select>
              </div>
              <button class="ui yellow button" onClick={this.updateRunHandler}>
                Update Run
              </button>
              {this.renderOnUpdateRedirect()}
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
      );
    }
    return (
      <div className="ui raised text container segment">
        <div className="ui two column grid">{updateForm}</div>
      </div>
    );
  }
}
export default UpdateRun;
