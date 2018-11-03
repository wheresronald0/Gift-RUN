import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./LogRun.css";
// import Charities from "../../Components/Charities/Charities";
import SPCA from "../../Components/Charities/Charity/SPCA";
import CatHouse from "../../Components/Charities/Charity/CatHouse";
import WoundedWarriors from "../../Components/Charities/Charity//WoundedWarriors";
import RedCross from "../../Components/Charities/Charity/RedCross";

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
      console.log(response);
      console.log("data posted!!!");
      if (response) {
        this.setRedirect();
      }
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="wrapper">
        <div className="logRun">
          <h1>Tell Us About Your Run</h1>
          <label>Date of Your Run</label>
          <input
            type="text"
            value={this.state.date}
            onChange={event => this.setState({ date: event.target.value })}
          />
          <label>Total Miles You Ran</label>
          <input
            type="text"
            value={this.state.miles}
            onChange={event => this.setState({ miles: event.target.value })}
          />
          <label>Total Run Time</label>
          <input
            type="text"
            value={this.state.totalTime}
            onChange={event => this.setState({ totalTime: event.target.value })}
          />
          <label>Location of Your Run</label>
          <input
            type="text"
            value={this.state.location}
            onChange={event => this.setState({ location: event.target.value })}
          />
          <label>Which Charity?</label>
          <select
            value={"Please Select:"}
            onChange={event =>
              this.setState({ run: { charity: event.target.value } })
            }
          >
            <option> Please Select:</option>
            <option value="SPCA">SPCA</option>
            <option value="Cat House on the Kings">
              Cat House on the Kings
            </option>
            <option value="Wounded Warriors">Wounded Warriors</option>
            <option value="Red Cross">Red Cross</option>
          </select>
          <button onClick={this.postRunHandler}>Log Run</button>
          {this.renderRedirect()}
        </div>
        <div>
          <SPCA />
          <CatHouse />
          <WoundedWarriors />
          <RedCross />
        </div>
      </div>
    );
  }
}
export default LogRun;
