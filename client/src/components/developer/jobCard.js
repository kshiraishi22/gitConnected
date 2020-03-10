import React from "react";
import JobDetails from "./JobDetails";
import { Link, Route } from "react-router-dom";
// import nextId from "react-id-generator";


function JobCard(props) {
  return (
    <>
      <div className="card" style={{ marginTop: "5px" }}>
        <div className="card-header">Company Name</div>
        <div className="card-body">
          <h5 className="card-title">{props.data.title}</h5>
          <p className="card-text">{props.data.position}</p>
          <p className="card-text">{props.data.salary}</p>
          <p className="card-text">{props.data.empType}</p>
        </div>
      </div>
    </>
  );
}

export default JobCard;
