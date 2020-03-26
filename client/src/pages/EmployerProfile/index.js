import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Image from "./image";

import PostedTable from "../../components/employer/PostedTable";
import PostedList from "../../components/employer/PostedList";
import EmpNavbar from "../../components/EmpNavbar";
// import data from "../../data"

// style:
import background from "../../assets/employerProfile-bg.jpg";
import "./style.css";

// API:
import API from "../../utils/API";

const columns = [{ id: 1, label: "Job Name" }];

function EmployerProfile(props) {
  const [currentUser, setCurrentUser] = useState({});
  
  useEffect(() => {
    loadUser();
  });

  function loadUser() {
    API.getEmployer(props.userID)
      .then(data => setCurrentUser(data.data))
      .catch(err => console.log(err));
  }
  return (
    <>
      <EmpNavbar />
      <Image backgroundImage={background}>
        <br />
        <h1 id="employerhead" className="display-6">Hi {currentUser.companyName}</h1>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="card-title">About the Company</h2>
                  <p class="card-text">
                    Company Name:
                    {currentUser.companyName}
                  </p>
                  <p class="card-text">
                    Summary:
                    {currentUser.about}
                  </p>
                  <p class="card-text">
                    Location:
                    {currentUser.location}{" "}
                  </p>
                  <p class="card-text">
                    Email Address:
                    {currentUser.email}
                  </p>
                  <p class="card-text">
                    Phone Number:
                    {currentUser.phone}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 className="card-title">Posted Jobs</h2>
                  {
                    currentUser.posted
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </Image>
    </>
  );
}

export default EmployerProfile;
