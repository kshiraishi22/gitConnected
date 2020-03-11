import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function EmpCreateAccount() {
  const [formObject, setFormObject] = useState({
    companyName: "",
    email: "",
    phone: "",
    location: "",
    about: ""
  });

  function handleInputChange(event) {
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
    if (!formObject.companyName && !formObject.email) {
      alert("Required fields must be filled out!");
      return;
    }
    if (validateEmail(formObject.email) === false) {
      return;
    }
    API.createEmployer(formObject)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Let's find you a developer (or more)</h1>
          <p className="lead">
            Fill out the following to register your company.
          </p>
        </div>
      </div>

      <form>
        <div className="form-group">
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            name="companyName"
            placeholder="Company Name (Required)"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            name="email"
            placeholder="example@email.com (Required)"
          />
        </div>
        <div className="form-group">
          <input
            onChange={handleInputChange}
            type="text"
            className="form-control"
            name="phone"
            placeholder="Phone Number"
          />
        </div>
        <div className="form-group">
          <label>Company Location</label>
          <select
            onChange={handleInputChange}
            className="form-control"
            name="location"
            value={formObject.location}
          >
            <option name="location" value="West-Coast">
              West Coast
            </option>
            <option name="location" value="East-Coast">
              East Coast
            </option>
            <option name="location" value="MidWest">
              Midwest
            </option>
          </select>
        </div>
        <div className="form-group">
          <label>Tell us a little bit about your company</label>
          <textarea
            onChange={handleInputChange}
            name="about"
            className="form-control"
            rows="3"
          ></textarea>
        </div>
      </form>
      <button
        // onChange={handleInputChange}
        name="profile"
        type="button"
        className="btn btn-success"
        disabled={!(formObject.companyName && formObject.email)}
        onClick={handleFormSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default EmpCreateAccount;
