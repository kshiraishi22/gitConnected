import React from "react";
import JobDetails from "./JobDetails";
import { Link, Route } from "react-router-dom";

function JobCard(props) {
    return (
        <>
            <div className="card" style={{marginTop: "5px"}}>
                <div className="card-header">
                    Company Name
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Position</p>
                    <p className="card-text">Salary</p>
                    <p className="card-text">Location</p>
                    {/* <Link to={`${props.match.url}jobdetails`} role="button" className="btn btn-secondary btn-block" style={{ position: "absolute", bottom: "5px" }}>
                    Update Profile
                    </Link>{" "}
                    <Route exact path={`${props.match.url}jobdetails`} component={JobDetails} /> */}

                    {/* <a href="#" className="btn btn-primary">Details</a> */}
                </div>
            </div>
           
            
        </>
    )
}

export default JobCard;