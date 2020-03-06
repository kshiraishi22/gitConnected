import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function CreateAccount() {
   // Setting our component's initial state
   const [user, setUser] = useState([])
   const [formObject, setFormObject] = useState({})
 
   // Load all books and store them with setBooks
  //  useEffect(() => {
  //    loadUsers()
  //  }, [])
 
   // Loads all books and sets them to books
  //  function loadUsers() {
  //    API.getUsers()
  //      .then(res => 
  //        setUsers(res.data)
  //      )
  //      .catch(err => console.log(err));
  //  };
 
   // Deletes a book from the database with a given id, then reloads books from the db
  //  function deleteUser(id) {
  //    API.deleteUser(id)
  //      .then(res => loadUsers())
  //      .catch(err => console.log(err));
  //  }
 
   // Handles updating component state when the user types into the input field
   function handleInputChange(event) {
     const { name, value } = event.target;
     setFormObject({...formObject, [name]: value})
   };
 
   // When the form is submitted, use the API.saveBook method to save the book data
   // Then reload books from the database
   function handleFormSubmit(event) {
     event.preventDefault();
     if (formObject.firstName && formObject.lastName) {
       API.saveUser({
         firstName: formObject.firstName,
         lastName: formObject.lastName,
         emailAddress: formObject.emailAddress,
         location: formObject.location,
         devType: formObject.devType,
         empType: formObject.empType,
         languages: formObject.languages
       })
        //  .then(res => loadUsers())
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
          <input onChange={handleInputChange} name="firstName" type="text" className="form-control" id="FirstName" placeholder="First Name"/>
        </div>
        <div className="form-group">
          <input onChange={handleInputChange} name="lastName" type="text" className="form-control" id="LastName" placeholder="Last Name"/>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input onChange={handleInputChange} name="emailAddress" type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="form-group">
          <label>Type of Developer</label>
          <select className="form-control" id="typeofdeveloper">
            <option data-value='frontEnd'>Front End</option>
            <option data-value='backEnd'>Back End</option>
            <option data-value='fullStack'>Full Stack</option>
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
          <label>Add a little bit about yourself</label>
          <input onChange={handleInputChange} name="languages" className="form-control" id="aboutMe" rows="3"></input>
        </div>
      </form>
    </div>
  )
};

export default CreateAccount;