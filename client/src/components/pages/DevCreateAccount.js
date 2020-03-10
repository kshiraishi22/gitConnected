import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function DevCreateAccount() {
  const [formObject, setFormObject] = useState({
    firstName:"",
    lastName:"",
    emailAddress:"",
    devType:"",
    empType:"",
    languages:[],
    location:"",
    profile:"",
  });
  console.log(formObject);

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    console.log(formObject);
  }
  function handleDropDownChange(event) {
    const { name, value } = event.target;
    console.log(name + "   " + value);
    setFormObject({ ...formObject, [name]: value });
  }

  function validateEmail(mail) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
        formObject.emailAddress.value
      )
    ) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    validateEmail(formObject.emailAddress);
    if (
      formObject.firstName &&
      formObject.lastName &&
      formObject.emailAddress
    ) {
      API.createDev({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        emailAddress: formObject.emailAddress,
        location: formObject.location,
        devType: formObject.devType,
        empType: formObject.empType,
        languages: formObject.languages,
        profile: formObject.profile
      })
        .then(() => console.log(formObject))
        .catch(err => console.log(err));
    }
  }

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hello Fellow Developer!</h1>
          <p className="lead">
            Let's get started. Fill out the following to create an account.
          </p>
        </div>
      </div>

      <form>
        <div className="form-group">
          <input
            onChange={handleInputChange}
            name="firstName"
            type="text"
            className="form-control"
            id="firstName"
            placeholder="First Name (Required)"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleInputChange}
            name="lastName"
            type="text"
            className="form-control"
            id="lastName"
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
            id="exampleFormControlInput1"
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
            value={formObject.empType}
            name="empType"
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
            <option name="empType" value="volunteer" >
              Volunteer
            </option>
          </select>
        </div>
        <div className="form-group">
          <label>Select primary languages</label>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              name="languages"
              className="form-check-input"
              type="checkbox"
              value="javascript"
              id="checkbox"
            />
            <label className="form-check-label">JavaScript</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              name="languages"
              className="form-check-input"
              type="checkbox"
              value="java"
              id="checkbox"
            />
            <label className="form-check-label">Java</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              name="languages"
              className="form-check-input"
              type="checkbox"
              value="c"
              id="checkbox"
            />
            <label className="form-check-label">C</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              name="languages"
              className="form-check-input"
              type="checkbox"
              value="c++"
              id="checkbox"
            />
            <label className="form-check-label">C++</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              name="languages"
              className="form-check-input"
              type="checkbox"
              value="python"
              id="checkbox"
            />
            <label className="form-check-label">Python</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              name="languages"
              className="form-check-input"
              type="checkbox"
              value="ruby"
              id="checkbox"
            />
            <label className="form-check-label">Ruby</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleInputChange}
              name="languages"
              className="form-check-input"
              type="checkbox"
              value="php"
              id="checkbox"
            />
            <label className="form-check-label">PHP</label>
          </div>
        </div>
        <div className="form-group">
          <label>Tell us a little bit about yourself</label>
          <textarea className="form-control" id="aboutMe" rows="3"></textarea>
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
    </div>
  );
}

export default DevCreateAccount;
