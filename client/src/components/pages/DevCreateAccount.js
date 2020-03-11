import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import developers from "../Styling/Images/developer_image.jpg"
import DevCreateImage from "../Styling/DevCreateImage";
import "../Styling/DevCreateImage.css"

function DevCreateAccount() {
  const [formObject, setFormObject] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    devType: "Full-Stack",
    empType: "Full-Time",
    language: "JavaScript",
    location: "",
    profile: ""
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }
  function handleDropDownChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      !formObject.firstName &&
      !formObject.lastName &&
      !formObject.emailAddress
    ) {
      alert("Required fields must be filled out!");
      return;
    }
    if (validateEmail(formObject.emailAddress) === false) {
      return;
    }
    console.log("everything valid");
    API.createDev(formObject)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div>
      <DevCreateImage backgroundImage={developers}>
        <h1 className="display-4">Hello Fellow Developer!</h1>
        <h2 className="lead">
          Let's get started. Fill out the following to create an account.
        </h2>
        <form>
          <div className="accountForm">
            <div className="form-group">
              <input
                onChange={handleInputChange}
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name (Required)"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleInputChange}
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name (Required)"
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                onChange={handleInputChange}
                name="emailAddress"
                type="email"
                className="form-control"
                placeholder="name@example.com (Required)"
              />
            </div>
            <div className="form-group">
              <label>Type of Developer</label>
              <select
                className="form-control"
                name="devType"
                value={formObject.devType}
                onChange={handleDropDownChange}
              >
                <option name="devType" value="fullStack">
                  Full-Stack
                </option>
                <option name="devType" value="frontEnd">
                  Front End
                </option>
                <option name="devType" value="backEnd">
                  Back End
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Type of Employment</label>
              <select
                className="form-control"
                name="empType"
                value={formObject.empType}
                onChange={handleDropDownChange}
              >
                <option name="empType" value="fullTime">
                  Full-Time
                </option>
                <option name="empType" value="partTime">
                  Part-Time
                </option>
                <option name="empType" value="contract">
                  Contract
                </option>
                <option name="empType" value="volunteer">
                  Volunteer
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Select your primary language</label>
              <select
                className="form-control"
                name="language"
                value={formObject.language}
                onChange={handleDropDownChange}
              >
                <option name="language" value="JavaScript">
                  JavaScript
                </option>
                <option name="language" value="Java">
                  Java
                </option>
                <option name="language" value="C">
                  C
                </option>
                <option name="language" value="C++">
                  C++
                </option>
                <option name="language" value="PHP">
                  PHP
                </option>
                <option name="language" value="Python">
                  Python
                </option>
                <option name="language" value="Ruby">
                  Ruby
                </option>
                <option name="language" value="Other">
                  Other
                </option>
              </select>
            </div>
            <div className="form-group">
              <label>Tell us a little bit about yourself</label>
              <textarea
                onChange={handleInputChange}
                name="profile"
                className="form-control"
                rows="3"
              ></textarea>
            </div>
          </div>
        </form>
        <button
          onChange={handleInputChange}
          name="profile"
          type="button"
          className="btn btn-success"
          disabled={
            !(
              formObject.firstName &&
              formObject.lastName &&
              formObject.emailAddress
            )
          }
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </DevCreateImage>
    </div>
  );
}

export default DevCreateAccount;
