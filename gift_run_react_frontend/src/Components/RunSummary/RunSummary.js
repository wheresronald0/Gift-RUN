import React from "react";

const runSummary = props => {
  return (
    <div>
      <p>{props.date}</p>
      <p>{props.miles}</p>
      <p>{props.totalTime}</p>
      <p>{props.location}</p>
    </div>
  );
};

export default runSummary;
