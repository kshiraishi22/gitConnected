import React from 'react';

function EmpCreateAccount() {
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
          <input type="text" className="form-control" id="companyName" placeholder="Company Name"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="email" placeholder="Email"/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" id="phone" placeholder="Phone Number"/>
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
          <label>Tell us a little bit about your company</label>
          <textarea className="form-control" id="aboutCompany" rows="3"></textarea>
        </div>
      </form>
      <button type="button" class="btn btn-success">Submit</button>
    </div>
  )
};

export default EmpCreateAccount;