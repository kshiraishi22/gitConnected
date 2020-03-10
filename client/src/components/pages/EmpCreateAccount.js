import React, { useState, useEffect } from "react";
import API from "../../utils/API";


function EmpCreateAccount() {

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
    validateEmail(formObject.email);
    if (formObject.companyName && formObject.email) {
      console.log(formObject)
      API.createEmployer(
        {
          companyName: formObject.companyName,
          email: formObject.email,
          phone: formObject.phone,
          location: formObject.location,
          aboutCompany: formObject.aboutCompany
        }
      ).catch(err => console.log(err));
    };
  };

  return (
    <div className='container'>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Let's find you a developer (or more)</h1>
          <p className="lead">Fill out the following to register your company.</p>
        </div>
      </div>
      
      <form>
        <div className="form-group">
          <input onChange={handleInputChange} type="text" className="form-control" id="companyName" name='companyName' placeholder="Company Name (Required)"/>
        </div>
        <div className="form-group">
          <input onChange={handleInputChange} type="text" className="form-control" id="email" name='email' placeholder="Email (Required)"/>
        </div>
        <div className="form-group">
          <input onChange={handleInputChange} type="text" className="form-control" id="phone" name='phone' placeholder="Phone Number"/>
        </div>
        <div className="form-group">
          <label>Company Location</label>
          <select className="form-control" id="location">
            <option onChange={handleInputChange} name='location' data-value='West-Coast'>West Coast</option>
            <option onChange={handleInputChange} name='location' data-value='East-Coast'>East Coast</option>
            <option onChange={handleInputChange} name='location' data-value='Mid-West'>Midwest</option>
          </select>
        </div>
        <div className="form-group">
          <label>Tell us a little bit about your company</label>
          <textarea onChange={handleInputChange} name='aboutCompany' className="form-control" id="aboutCompany" rows="3"></textarea>
        </div>
      </form>
      <button onChange={handleInputChange} name="profile" type="button" className="btn btn-success" disabled={!(formObject.companyName && formObject.email)} onClick={handleFormSubmit}>Submit</button>
    </div>
  )
};

export default EmpCreateAccount;