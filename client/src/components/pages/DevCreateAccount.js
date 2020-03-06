import React, { useState, useEffect } from "react";
import API from "../../utils/API";



function DevCreateAccount() {

const [formObject, setFormObject] = useState({})

function handleInputChange(event) {
  const { name, value } = event.target;
  setFormObject({...formObject, [name]: value})
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
          <input type="text" className="form-control" id="firstName" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="lastName" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input onChange={handleInputChange} name="emailAddress" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label>Type of Developer</label>
          <select className="form-control" id="typeofdeveloper">
            <option data-value='fullStack'>Full-Stack</option>
            <option data-value='frontEnd'>Front End</option>
            <option data-value='backEnd'>Back End</option>
          </select>
        </div>
        <div className="form-group">
          <label>Type of Employment</label>
          <select className="form-control" id="typeofdeveloper">
            <option data-value='fullTime'>Full-Time</option>
            <option data-value='partTime'>Part-Time</option>
            <option data-value='contract'>Contract</option>
            <option data-value='volunteer'>Volunteer</option>
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
      <button type="button" class="btn btn-success">Submit</button>
    </div>
  )
};

export default DevCreateAccount;