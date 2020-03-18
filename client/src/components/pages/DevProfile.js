import { Route } from "react-router-dom";
import AppliedList from "../developer/AppliedList";
import AppliedTable from "../developer/AppliedTable";
import data from "../../data";
import React, { useEffect, useState } from "react";

import group from "../Styling/Images/devProfileImage.jpg";
import DevProfileImage from "../Styling/DevProfileImage";
import "../Styling/DevProfileImage.css";
import API from "../../utils/API";

const columns = [
  {id: 1, label: "Job Name"},
]

function DevProfile(props) {

  const [userState, setUser] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    devType: "",
    empType: "",
    language: "",
    location: "",
    profile: "",
  });
  useEffect(() => {
    loadUser("5e69af9b39a8906f28d61cea");
  }, []);
  function loadUser(id) {
    API.getDev(id)
      .then(data => {
        setUser(data.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <DevProfileImage backgroundImage={group}>
        <h1 className="display-4">{`Welcome ${userState.firstName} ${userState.lastName}!`}</h1>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">About Me:</h2>
                      <p className="card-text">{`First Name: ${userState.firstName}`}</p>
                      <p className="card-text">{`Last Name: ${userState.lastName}`}</p>
                      <p className="card-text">{`Bio: ${userState.profile}`}</p>
                      <p className="card-text">{`Operating out of the: ${userState.location}`}</p>
                      <p className="card-text">{`${userState.devType} developer `}</p>
                      <p className="card-text">{`Currently seeking a: ${userState.empType} position`}</p>
                      <p className="card-text">{`Primary Language: ${userState.language}`}</p>
                      <p className="card-text">{`Contact me @: Email address --> ${userState.emailAddress}`}</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title">Applied Jobs</h2>
                  <AppliedTable columns={columns} data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </DevProfileImage>
    </div>
  );
  }

export default DevProfile;
