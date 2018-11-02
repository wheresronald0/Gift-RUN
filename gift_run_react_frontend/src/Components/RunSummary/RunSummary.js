import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import "./RunSummary.css";
import UpdateRun from "../../Container/LogRun/UpdateRun/UpdateRun";

class RunSummary extends Component {
  state = {
    run: null,
    updateRunId: null
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
        (this.state.run.id && this.state.run.id !== +this.props.match.params.id)
        // (this.state.run && this.state.run.id !== this.props.id)
      ) {
        axios
          .get(
            "https://jsonplaceholder.typicode.com/posts/" +
              this.props.match.params.id
          )
          .then(response => {
            console.log("...is this loadData working");
            this.setState({ run: response.data });
            console.log(this.state.run);
            console.log("is this loadData working");
          });
      }
    }
  }

  updateRunSelectedHandler = () => {
    this.setState({ updateRunId: true });
  };

  deletePostHandler = () => {
    axios.delete("/api/" + this.props.run.id);
    // .then() redirect to AllRuns- not sure if the component will unmount
  };
  render() {
    console.log("HI from Run Summary");
    console.log(this.state.run);
    let run = null;
    if (this.state.run) {
      run = (
        <div className="runSummaryDetails">
          <div>
            <p>{this.state.run.title}</p>
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
            <NavLink to={"/all-runs/" + this.state.run.id + "/edit"}>
              <button
                className="editButtons"
                onClick={this.updateRunSelectedHandler}
              >
                Edit Run Details
              </button>
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

//2nd DO NOT TOUCH - this is pre-routing with data flowing all the way thnrough to update form, BUT this, run summary, and all runs all populated together
// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import "./RunSummary.css";
// import UpdateRun from "../../Container/LogRun/UpdateRun/UpdateRun";

// class RunSummary extends Component {
//   state = {
//     run: null,
//     updateRunId: null
//   };

//   componentDidMount() {
//     this.loadData();
//   }

//   componentDidUpdate() {
//     this.loadData();
//   }

//   loadData() {
//     if (this.props.match.params.id) {
//       if (
//         !this.state.run ||
//         (this.state.run.id && this.state.run.id !== +this.props.match.params.id)
//         // (this.state.run && this.state.run.id !== this.props.id)
//       ) {
//         axios
//           .get(
//             "https://jsonplaceholder.typicode.com/posts/" +
//               this.props.match.params.id
//           )
//           .then(response => {
//             console.log("...is this loadData working");
//             this.setState({ run: response.data });
//             console.log(this.state.run);
//             console.log("is this loadData working");
//           });
//       }
//     }
//   }

//   updateRunSelectedHandler = () => {
//     this.setState({ updateRunId: true });
//   };

//   deletePostHandler = () => {
//     axios.delete("/api/" + this.props.run.id);
//     // .then() redirect to AllRuns- not sure if the component will unmount
//   };
//   render() {
//     console.log("HI from Run Summary");
//     console.log(this.state.run);
//     let run = null;
//     if (this.state.run) {
//       run = (
//         <div className="runSummaryDetails">
//           <div>
//             <p>{this.state.run.title}</p>
//             {/* //real props below */}
//             {/* <p>{this.state.id}</p>
//           <p>{this.state.date}</p>
//           <p>{this.state.miles}</p>
//           <p>{this.state.totalTime}</p>
//           <p>{this.state.location}</p> */}
//           </div>
//           <div>
//             <NavLink to={"/log-run"}>
//               <button className="editButtons">Log Another Run</button>
//             </NavLink>
//             <NavLink to={"/update-run"}>
//               <button
//                 className="editButtons"
//                 onClick={this.updateRunSelectedHandler}
//               >
//                 Edit Run Details
//               </button>
//             </NavLink>

//             <button className="editButtons" onClick={this.deletePostHandler}>
//               Delete This Run
//             </button>
//           </div>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <div>
//           <UpdateRun dataah={this.state.run} render={this.state.updateRunId} />
//           {run}
//         </div>
//       </div>
//     );
//   }
// }

// export default RunSummary;

// ---- DON NOT TOUCH -----
////Funtionality prior to messing with the Edit/Update CRUD
// import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
// import "./RunSummary.css";

// class RunSummary extends Component {
//   state = {
//     run: null
//   };

//   componentDidUpdate() {
//     if (this.props.id) {
//       if (
//         !this.state.run ||
//         (this.state.run && this.state.run.id !== this.props.id)
//       ) {
//         axios
//           .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
//           .then(response => {
//             this.setState({ run: response.data });
//             console.log(this.state.run);
//           });
//       }
//     }
//   }

//   deletePostHandler = () => {
//     axios.delete("/api/" + this.props.run.id);
//     // .then() redirect to AllRuns- not sure if the component will unmount
//   };
//   render() {
//     console.log("HI from Run Summary");
//     console.log(this.state.run);
//     let run = <p />;
//     if (this.state.run) {
//       run = (
//         <div className="runSummaryDetails">
//           <div>
//             <p>{this.state.run.title}</p>
//             <p>Hola!</p>
//             {/* //real props below */}
//             {/* <p>{this.state.id}</p>
//           <p>{this.state.date}</p>
//           <p>{this.state.miles}</p>
//           <p>{this.state.totalTime}</p>
//           <p>{this.state.location}</p> */}
//           </div>
//           <div>
//             <NavLink to={"/log-run"}>
//               <button className="editButtons">Log Another Run</button>
//             </NavLink>
//             <NavLink to={"/update-run"}>
//               <button className="editButtons" on>Edit Run Details</button>
//             </NavLink>

//             <button className="editButtons" onClick={this.deletePostHandler}>
//               Delete This Run
//             </button>
//           </div>
//         </div>
//       );
//     }
//     return (
//       <div>
//         <div>{run}</div>
//       </div>
//     );
//   }
// }

// export default RunSummary;
