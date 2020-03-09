import React from "react";
import { Redirect } from 'react-router-dom'

const columns = [
  {id: 1, label: "Job Name"},
  {id: 2, label: "Date Applied"}
]

function DevProfile(props) {
  return (
    <>
    <div className='container'>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome!</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-4">
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
        <div className="col-8">
          <div className="card mb-4">
            <div className="card-body">  
              <h2 className="card-title">Applied Jobs</h2>
                <DevApplied columns={columns} data={data} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <Route
                exact path={`${props.match.url}/:id`}
                render={(props) => <ListItem {...props} />}
                />
            </div>
          </div>  
        </div>
      </div>
    </div>
    </>            
  )}

export default DevProfile