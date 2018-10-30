import React from "react";
import "./EachRun.css";

//THIS IS THE TILE so I probably just want miles and charity

const eachRun = props => (
  <article className="runDetails" onClick={props.clicked}>
    <p>{props.title}</p>
    {/* real props below 
      <p>{props.id}</p>
      <p>{props.date}</p>
      <p>{props.miles}</p>
      <p>{props.totalTime}</p>
      <p>{props.location}</p> 
      <p>{props.charity}</p> */}
  </article>
);

export default eachRun;
