import React, { useState, useEffect } from "react";
import API from "../../utils/API";



function DevCreateAccount(props) {

  useEffect(() => {}, []);
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
    console.log(formObject)
  };

  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true)
    }
    else {
      alert("You have entered an invalid email address!")
      return (false)
    }
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    // this.setState(initialState)
    validateEmail(formObject.emailAddress);
    if (formObject.firstName && formObject.lastName && formObject.emailAddress) {
      console.log(formObject)
      API.createDev(
        {
          firstName: formObject.firstName,
          lastName: formObject.lastName,
          emailAddress: formObject.emailAddress,
          location: formObject.location,
          devType: formObject.value,
          empType: formObject.value,
          languages: formObject.value,
          profile: formObject.profile
        }
      ).catch(err => console.log(err));
    };
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
          <input onChange={handleInputChange} name="emailAddress" type="email" className="form-control" id="emailAddress" placeholder="name@example.com (Required)"/>
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
          <label>Select your primary language</label>
          <select className="form-control" id='languages'>
            <option onChange={handleInputChange} name="empType" value='fullTime' data-value='fullTime'>JavaScript</option>
            <option onChange={handleInputChange} name="empType" value='partTime' data-value='partTime'>Java</option>
            <option onChange={handleInputChange} name="empType" value='contract' data-value='contract'>C</option>
            <option onChange={handleInputChange} name="empType" value='volunteer' data-value='volunteer'>C++</option>
            <option onChange={handleInputChange} name="empType" value='volunteer' data-value='volunteer'>PHP</option>
            <option onChange={handleInputChange} name="empType" value='volunteer' data-value='volunteer'>Python</option>
            <option onChange={handleInputChange} name="empType" value='volunteer' data-value='volunteer'>Ruby</option>
            <option onChange={handleInputChange} name="empType" value='volunteer' data-value='volunteer'>Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tell us a little bit about yourself</label>
          <textarea onChange={handleInputChange} name="profile" className="form-control" id="aboutMe" rows="3"></textarea>
        </div>
      </form>
      <button onChange={handleInputChange} name="profile" type="button" className="btn btn-success" disabled={!(formObject.firstName && formObject.lastName && formObject.emailAddress)} onClick={handleFormSubmit}>Submit</button>
    </div>
  )
};

export default DevCreateAccount;