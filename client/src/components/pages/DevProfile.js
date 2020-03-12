import React from "react";
import { Route } from 'react-router-dom'
import AppliedTable from "../developer/AppliedTable";
import AppliedList from "../developer/AppliedList";
import data from "../../data.js"

import group from "../Styling/Images/devProfileImage.jpg";
import DevProfileImage from "../Styling/DevProfileImage";
import "../Styling/DevProfileImage.css";

const columns = [
  {id: 1, label: "Job Name"},
]

function DevProfile(props) {
  return (
    <div>
      <DevProfileImage backgroundImage={group}>
        <h1 className="display-4">Welcome!</h1>
        <div className="allCards">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div className="card mb-4">
                  <div className="card-body">
                    <h2 className="card-title">About Me</h2>
                    <img src="" />
                    <p className="card-text">First Name:</p>
                    <p className="card-text">Last Name:</p>
                    <p className="card-text">Email address:</p>
                    <p className="card-text">Type of Developer:</p>
                    <p className="card-text">Type of Employment:</p>
                    <p className="card-text">Primary Languages:</p>
                    <p className="card-text">Summary:</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="card mb-4">
                  <div className="card-body">  
                    <h2 className="card-title">Applied Jobs</h2>
                      <AppliedTable columns={columns} data={data} />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <Route
                      exact path={`${props.match.url}/:id`}
                      render={(props) => <AppliedList {...props} />}
                    />
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>
      </DevProfileImage>
    </div>            
  )}

export default DevProfile