import { Route } from 'react-router-dom';
import PostedTable from "../employer/PostedTable";
import PostedList from "../employer/PostedList";
import data from "../../data.js";
import React, { useState, useEffect } from "react";

import desk from "../Styling/Images/empProfileImage.jpg";
import EmpProfileImage from "../Styling/DevProfileImage";
import "../Styling/EmpProfileImage.css";
import API from "../../utils/API";

const columns = [
  {id: 1, label: "Job Name"},
]

function EmpProfile(props) {
=======
function EmpProfile() {
  const [companyState, setCompanyState] = useState({
    text: "",
    companyName: "",
    email: "",
    phone: "",
    location: "",
    about: ""
  });
  useEffect(() => {
    loadCompany("5e69af9b39a8906f28d61ce9");
  });

  function loadCompany(id) {
    API.getEmployer(id)
      .then(data => {
        setCompanyState(data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <EmpProfileImage backgroundImage={desk}>
        <h1 className="display-4">{`Welcome: ${companyState.companyName}!`}</h1>
        <div className="container">
          <div className="row">
            <div className="col-5">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="card-title">About the Company:</h2>
                  <img src="" />
                  <p class="card-text">{`Company Name: ${companyState.companyName}`}</p>
                  <p class="card-text">{`Operating out of the: ${companyState.location}`}</p>
                  <p class="card-text">{`Email Address: ${companyState.email}`}</p>
                  <p class="card-text">{`Phone Number: ${companyState.phone}`}</p>
                  <p class="card-text">
                    Summary: <br />
                    {`${companyState.about}`}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-7">
              <div class="card mb-4">
                <div class="card-body">
                  <h2 class="card-title">Posted Jobs</h2>
                  <li class="card-text">Jr. Front End Developer </li>
                  <li class="card-text">Jr. Back End Developer </li>
                  <li class="card-text">Jr. Full Stack Developer </li>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div class="card">
                <div class="card-body">
                  <h2 class="card-title">Current Jobs:</h2>
                  <h4 className="card-title">Jr. Front End Dev</h4>
                  <p class="card-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <h4 className="card-title">Jr. Back End Dev</h4>
                  <p class="card-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                  <h4 className="card-title">Jr. Full Stack Dev</h4>
                  <p class="card-text">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EmpProfileImage>
    </>
  );
}

export default EmpProfile;
