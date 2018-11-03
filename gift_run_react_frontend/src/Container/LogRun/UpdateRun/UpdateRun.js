import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import "./UpdateRun.css";
// import Charities from "../../../Components/Charities/Charities";

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
        // (this.state.run && this.state.run.id !== this.props.id)
      ) {
        axios
          .get("http://localhost:4000/run/" + this.props.match.params.id)
          .then(response => {
            console.log("...is this loadData working");
            this.setState({ run: response.data });
            console.log(this.state.run);
            console.log("update loadData working");
          });
      }
    }
  }

  updateRunHandler = () => {
    const data = this.state.run;

    axios
      .put("http://localhost:4000/run/" + this.props.match.params.id, data)
      .then(response => {
        console.log(response);
        console.log("Updated data posted!!!");
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

  // runDataBeingUpdated = event => {
  //   this.setState({ run: { title: event.target.value } });
  //   //this.runDataBeingUpdated = this.runDataBeingUpdated.bind(this);
  // }; //events are handles in form so I don't need this (can delete)

  render() {
    // console.log("props are coming through to 'render'!!");
    console.log(this.props);
    console.log(this.state);
    let updateForm = null;
    if (this.state.run) {
      updateForm = (
        <div className="logRun">
          {/* <label>Fake News</label>
          <input
            type="text"
            value={this.state.run.title}
            onChange={event => {
              this.setState({ run: { title: event.target.value } });
            }}
          /> */}
          <label>Date of Your Run</label>
          <input
            type="text"
            value={this.state.run.date}
            onChange={event =>
              this.setState({ run: { date: event.target.value } })
            }
          />
          <label>Total Miles You Ran</label>
          <input
            type="text"
            value={this.state.run.miles}
            onChange={event =>
              this.setState({ run: { miles: event.target.value } })
            }
          />
          <label>Total Run Time</label>
          <input
            type="text"
            value={this.state.run.totalTime}
            onChange={event =>
              this.setState({ run: { totalTime: event.target.value } })
            }
          />
          <label>Location of Your Run</label>
          <input
            type="text"
            value={this.state.run.location}
            onChange={event =>
              this.setState({ run: { location: event.target.value } })
            }
          />
          <label>Which Charity?</label>
          <select
            onChange={event =>
              this.setState({ run: { charity: event.target.value } })
            }
            value={this.state.run.charity}
          >
            <option value="SPCA">SPCA</option>
            <option value="Cat House on the Kings">
              Cat House on the Kings
            </option>
            <option value="Wounded Warriors">Wounded Warriors</option>
            <option value="Red Cross">Red Cross</option>
          </select>
          <button onClick={this.updateRunHandler}>Update Run</button>
          {this.renderOnUpdateRedirect()}
        </div>
      );
    }
    return <div className="wrapper">{updateForm}</div>;
  }
}
export default UpdateRun;

//// --Pre the route update with all 3 componentnt still dispalying in AllRunss
// import React, { Component } from "react";
// import axios from "axios";
// import "./UpdateRun.css";
// // import Charities from "../../../Components/Charities/Charities";

// class UpdateRun extends Component {
//   state = {
//     run: {},
//     runId: null
//     //runId is render control for this form
//   };

//   updateRunHandler = () => {
//     const data = {
//       id: this.state.props,
//       date: this.state.date,
//       miles: this.state.miles,
//       totalTime: this.state.totalTime,
//       location: this.state.location,
//       charity: this.state.charity
//     };
//     axios
//       .put("https://jsonplaceholder.typicode.com/posts/" + data.id, data)
//       //not sure if this put struction with 3 arguments is correct
//       .then(response => {
//         console.log(response);
//         console.log("Updated data posted!!!");
//         //maybe put the redirect to AllRuns here?
//       });
//   };

//   render() {
//     console.log(this.props);
//     console.log("props are coming through!!");
//     //need conditional render so that it doesn't display!
//     let updateForm = "This need to be updated man!";
//     if (this.props.render) {
//       updateForm = (
//         <div className="logRun">
//           <h1>Update Your Run</h1>
//           <label>Fake News</label>
//           <input
//             type="text"
//             value={this.props.dataah.title}
//             onChange={event => this.setState({ date: event.target.value })}
//           />
//           <label>Date of Your Run</label>
//           <input
//             type="text"
//             value={this.props.date}
//             onChange={event => this.setState({ date: event.target.value })}
//           />
//           <label>Total Miles You Ran</label>
//           <input
//             type="text"
//             value={this.props.miles}
//             onChange={event => this.setState({ miles: event.target.value })}
//           />
//           <label>Total Run Time</label>
//           <input
//             type="text"
//             value={this.props.totalTime}
//             onChange={event => this.setState({ totalTime: event.target.value })}
//           />
//           <label>Location of Your Run</label>
//           <input
//             type="text"
//             value={this.props.location}
//             onChange={event => this.setState({ location: event.target.value })}
//           />
//           <label>Which Charity?</label>
//           <select value={this.props.charity}>
//             <option value="SPCA">SPCA</option>
//             <option value="Cat House on the Kings">
//               Cat House on the Kings
//             </option>
//             <option value="Wounded Warriors">Wounded Warriors</option>
//             <option value="Red Cross">Red Cross</option>
//           </select>
//           <button onClick={this.updateRunHandler}>Update Run</button>
//         </div>
//       );
//     }
//     return (
//       <div className="wrapper">
//         {updateForm}
//         {/* <div className="charities">
//           <Charities />
//         </div> */}
//       </div>
//     );
//   }
// }
// export default UpdateRun;
