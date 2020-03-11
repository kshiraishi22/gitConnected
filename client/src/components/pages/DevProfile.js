import { Route } from 'react-router-dom'
import AppliedList from "../developer/AppliedList";
import AppliedTable from "../developer/AppliedTable";
import data from "../../data"

import React, { Fragment } from "react";
import { useAuth0 } from "../../react-auth0-spa";


const columns = [
  {id: 1, label: "Job Name"},
]

function DevProfile(props) {
  const { loading, user } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    return <div>User not found</div>
  }
  return (
    <div>
    <Fragment>
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
    </Fragment>
    
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