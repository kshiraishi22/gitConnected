import React from "react";

const initialState = {
  companyName: "",
  jobTitle: "",
  position: "",
  location: "",
  empType: "",
  checkbox: "",
  aboutJob: "",
  companyNameError: "",
  jobTitleError: "",
  aboutJobError: ""
}

class PostJob extends React.Component {
  state = initialState;

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  validate = () => {
    let companyNameError = "";
    let jobTitleError = "";
    let aboutJobError = ""

    if (!this.state.companyName) {
      companyNameError = "Please include a company name"
    };

    if (!this.state.jobTitle) {
      jobTitleError = "Please include a job title"
    };

    if (!this.state.aboutJob) {
      aboutJobError = "Please include a job description"
    };

    if (companyNameError || jobTitleError || aboutJobError) {
      this.setState({ companyNameError, jobTitleError, aboutJobError})
      return false;
    };

    return true;
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const isValid = this.validate()
    if (isValid) {
    console.log(this.state)
    // Clear form
    this.setState(initialState)
  };
  }

  render () {
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
        <input name="companyName" type="text" className="form-control" id="companyName" placeholder="Company Name" value={this.state.companyName} onChange={this.handleInputChange}/>
        <div style={{color: "red"}}>{this.state.companyNameError}</div>
      </div>
        <div className="form-group">
          <input name="jobTitle" type="text" className="form-control" id="jobTitle" placeholder="Job Title" value={this.state.jobTitle} onChange={this.handleInputChange}/>
          <div style={{color: "red"}}>{this.state.jobTitleError}</div>
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
          <select className="form-control" id="empType">
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
          <textarea name="aboutJob" className="form-control" id="aboutJob" rows="3" value={this.state.aboutJob} onChange={this.handleInputChange}></textarea>
          <div style={{color: "red"}}>{this.state.aboutJobError}</div>
        </div>
      </form>
      <button onClick={this.handleFormSubmit}type="button" className="btn btn-success">Submit</button>     
    </div>
    </>            
  )}
}
export default PostJob;