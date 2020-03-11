import { Route } from 'react-router-dom'
import AppliedList from "../developer/AppliedList";
import AppliedTable from "../developer/AppliedTable";
import data from "../../data"

import React from "react";


const columns = [
  {id: 1, label: "Job Name"},
]

function DevProfile(props) {
 
  return (
    <div>
    <div className='container'>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome!</h1>
        </div>
      </div>
    </div>
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
  )}

export default DevProfile