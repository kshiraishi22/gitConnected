import React from "react";
import { Redirect } from 'react-router-dom'

function JobPost() {
  return (
    <>
    <div className='container'>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Post a job!</h1>
          <p className="lead">Employers, post a job by filling out the form below!</p>        
        </div>
      </div>
    <form>
    <div className="form-group">
      <input type="text" className="form-control" id="companyName" placeholder="Company Name"/>
    </div>
      <div className="form-group">
        <input type="text" className="form-control" id="jobTitle" placeholder="Job Title"/>
      </div>
      <div className="form-group">
        <label>Type of Position</label>
        <select className="form-control" id="position">
          <option data-value='Full-Stack'>Full Stack</option>
          <option data-value='Front-End'>Front End</option>
          <option data-value='Back-End'>Back End</option>
        </select>
      </div>
      <div className="form-group">
        <label>Company Location</label>
        <select className="form-control" id="location">
          <option data-value='West-Coast'>West Coast</option>
          <option data-value='East-Coast'>East Coast</option>
          <option data-value='Mid-West'>Midwest</option>
        </select>
      </div>
      <div className="form-group">
        <label>Type of Employment</label>
        <select className="form-control" id="location">
          <option data-value='Full-Time'>Full-Time</option>
          <option data-value='Part-Time'>Part-Time</option>
          <option data-value='Contract'>Contract</option>
          <option data-value='Volunteer'>Volunteer</option>
        </select>
      </div>
      <div className="form-group">
        <label>Select required languages</label>
        <div className="form-check">
          <input name="languages" className="form-check-input" type="checkbox" value="javascript" id="checkbox"/>
          <label className="form-check-label">
            JavaScript
          </label>
        </div>
        <div className="form-check">
          <input name="languages" className="form-check-input" type="checkbox" value="java" id="checkbox"/>
          <label className="form-check-label">
            Java
          </label>
        </div>
        <div className="form-check">
          <input name="languages" className="form-check-input" type="checkbox" value="c" id="checkbox"/>
          <label className="form-check-label">
            C
          </label>
        </div>
        <div className="form-check">
          <input name="languages" className="form-check-input" type="checkbox" value="c++" id="checkbox"/>
          <label className="form-check-label">
            C++
          </label>
        </div>
        <div className="form-check">
          <input name="languages" className="form-check-input" type="checkbox" value="python" id="checkbox"/>
          <label className="form-check-label">
            Python
          </label>
        </div>
        <div className="form-check">
          <input name="languages" className="form-check-input" type="checkbox" value="ruby" id="checkbox"/>
          <label className="form-check-label">
            Ruby
          </label>
        </div>
        <div className="form-check">
          <input name="languages" className="form-check-input" type="checkbox" value="php" id="checkbox"/>
          <label className="form-check-label">
            PHP
          </label>
          </div>
      </div>
      <div className="form-group">
        <label>Job Description</label>
        <textarea className="form-control" id="aboutCompany" rows="3"></textarea>
      </div>
    </form>
    <button type="button" class="btn btn-success">Submit</button>     
  </div>
  </>            
)}

export default JobPost;