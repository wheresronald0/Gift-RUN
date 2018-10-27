import React, { Component } from "react";
import "./LogRun.css";
import Charities from "../../Components/Charities/Charities";

class LogRun extends Component {
  state = {
    run: [{}]
  };

  //need to update db: this will be an axios post call tripp by onClick event from buttom
  //   const logThisRun = (run) => {
  //         this.setState({run})
  //     }

  render() {
    return (
      <div className="wrapper">
        <div className="logRun">
          <h1>Tell Us About Your Run</h1>
          <label>Date of Your Run</label>
          <input
            type="text"
            //value={this.state.date}
            onChange={event => this.setState({ date: event.target.value })}
          />
          <label>Total Miles Yoiu Ran</label>
          <input
            type="text"
            //value={this.state.miles}
            onChange={event => this.setState({ miles: event.target.value })}
          />
          <label>Total Run Time</label>
          <input
            type="text"
            //value={this.state.totalTime}
            onChange={event => this.setState({ totalTime: event.target.value })}
          />
          <label>Location of Your Run</label>
          <input
            type="text"
            //value={this.state.location}
            onChange={event => this.setState({ location: event.target.value })}
          />
          <label>Which Charity Woiuld You Like to Donate Miles To?</label>
          <select>
            <option value="SPCA">SPCA</option>
            <option value="Cat House on the Kings">
              Cat House on the Kings
            </option>
            <option value="Wounded Warriors">Wounded Warriors</option>
            <option value="Red Cross">Red Cross</option>
          </select>
          <button>Log Run</button>
        </div>
        <div className="charities">
          <Charities />
        </div>
      </div>
    );
  }
}
export default LogRun;
