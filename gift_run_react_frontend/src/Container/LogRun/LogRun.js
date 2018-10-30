import React, { Component } from "react";
import axios from "axios";
import "./LogRun.css";
import Charities from "../../Components/Charities/Charities";

class LogRun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      run: {
        date: "",
        miles: "",
        totalTime: "",
        location: "",
        charity: ""
      }
    };
  }

  postRunHandler = () => {
    const data = {
      date: this.state.date,
      miles: this.state.miles,
      totalTime: this.state.totalTime,
      location: this.state.location,
      charity: this.state.charity
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then(response => {
        console.log(response);
        console.log("data posted!!!");
      });
  };

  render() {
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
          <select value={this.state.charity}>
            <option value="SPCA">SPCA</option>
            <option value="Cat House on the Kings">
              Cat House on the Kings
            </option>
            <option value="Wounded Warriors">Wounded Warriors</option>
            <option value="Red Cross">Red Cross</option>
          </select>
          <button onClick={this.postRunHandler}>Log Run</button>
        </div>
        <div className="charities">
          <Charities />
        </div>
      </div>
    );
  }
}
export default LogRun;
