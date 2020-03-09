import React, { useState, useEffect } from "react";
import API from "../../utils/API";



function DevCreateAccount() {

  useEffect(() => {}, [])
  const [formObject, setFormObject] = useState({});
  const [devData, setDevData] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    console.log(formObject)
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.firstName && formObject.lastName && formObject.emailAddress) {
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
  };
  return (

    <div className='container'>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Hello Fellow Developer!</h1>
          <p className="lead">Let's get started.  Fill out the following to create an account.</p>
        </div>
      </div>
      
      <form>
        <div className="form-group">
          <input onChange={handleInputChange} name="firstName" type="text" className="form-control" id="firstName" placeholder="First Name (Required)"/>
        </div>
        <div className="form-group">
          <input onChange={handleInputChange} name="lastName" type="text" className="form-control" id="lastName" placeholder="Last Name (Required)"/>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input onChange={handleInputChange} name="emailAddress" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com (Required)"/>
        </div>
        <div className="form-group">
          <label>Type of Developer</label>
          <select className="form-control" id="typeofdeveloper">
            <option onChange={handleInputChange} name="devType" value='fullStack' data-value='fullStack'>Full-Stack</option>
            <option onChange={handleInputChange} name="devType" value='frontEnd' data-value='frontEnd'>Front End</option>
            <option onChange={handleInputChange} name="devType" value='backEnd' data-value='backEnd'>Back End</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type of Employment</label>
          <select className="form-control" id="typeofdeveloper">
            <option onChange={handleInputChange} name="empType" value='fullTime' data-value='fullTime'>Full-Time</option>
            <option onChange={handleInputChange} name="empType" value='partTime' data-value='partTime'>Part-Time</option>
            <option onChange={handleInputChange} name="empType" value='contract' data-value='contract'>Contract</option>
            <option onChange={handleInputChange} name="empType" value='volunteer' data-value='volunteer'>Volunteer</option>
          </select>
        </div>
        <div className="form-group">
          <label>Select primary languages</label>
          <div className="form-check">
            <input onChange={handleInputChange} name="languages" className="form-check-input" type="checkbox" value="javascript" id="checkbox"/>
            <label className="form-check-label">
              JavaScript
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleInputChange} name="languages" className="form-check-input" type="checkbox" value="java" id="checkbox"/>
            <label className="form-check-label">
              Java
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleInputChange} name="languages" className="form-check-input" type="checkbox" value="c" id="checkbox"/>
            <label className="form-check-label">
              C
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleInputChange} name="languages" className="form-check-input" type="checkbox" value="c++" id="checkbox"/>
            <label className="form-check-label">
              C++
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleInputChange} name="languages" className="form-check-input" type="checkbox" value="python" id="checkbox"/>
            <label className="form-check-label">
              Python
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleInputChange} name="languages" className="form-check-input" type="checkbox" value="ruby" id="checkbox"/>
            <label className="form-check-label">
              Ruby
            </label>
          </div>
          <div className="form-check">
            <input onChange={handleInputChange} name="languages" className="form-check-input" type="checkbox" value="php" id="checkbox"/>
            <label className="form-check-label">
              PHP
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Tell us a little bit about yourself</label>
          <textarea className="form-control" id="aboutMe" rows="3"></textarea>
        </div>
      </form>
      <button onChange={handleInputChange} name="profile" type="button" class="btn btn-success" disabled={!(formObject.firstName && formObject.lastName && formObject.emailAddress)} onClick={handleFormSubmit}>Submit</button>
    </div>
  )
};

export default DevCreateAccount;