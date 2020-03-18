import HomeImage from "../Styling/HomeImage";
import building from "../Styling/Images/building_photo.jpeg";
import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import { Button } from 'reactstrap';
import { Link, Route } from "react-router-dom"
import DevFeed from "../developer/devFeed";
import EmpFeed from "../employer/empFeed";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";

function Home() {
  const devID = "5e69316dc528fd5c40dbace2";
  const empID = "5e69316dc528fd5c40dbace1";
  
  const [admin, setAdmin] = useState({
    id: "Mongoose id"
  });

  function devClick(event) {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: devID });
    console.log(admin);
  }
  function empClick(event) {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: empID });
    console.log(admin);
  }

  // Email validation
  function validateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      alert("You have entered an invalid email address!");
      return false;
    }
  }

  /**
     * Handles the sign in button press.
     */
    function toggleSignIn() {
      if (firebase.auth().currentUser) {
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      document.getElementById('quickstart-sign-in').disabled = true;
    }


  return (
    <>
      <HomeImage backgroundImage={building}>
        <h1 className="display-4">Welcome to Git Connected</h1>
        <h2 className="lead">
          A place for developers and employers to get connected. Yeehaw!!
        </h2>
        <p>Get started by logging in or signing up</p>
        <br/>
        <div className="container signinForm">
          <div className="row">
          <div className="col-md-6 col-12 form-group">
            <input
              // onChange={handleInputChange}
              name="emailAddress"
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
            <br/>
            <input
              // onChange={handleInputChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
            <br/>
            <Button name="id" onClick={toggleSignIn} color="primary">
              Log in
            </Button>
          </div>
          <div className="col-md-6 col-12 form-group">
            <br/>
            <Button name="id" color="success">
              Sign up
            </Button>
          </div>
          </div>
        </div>
       
          
          
        
      </HomeImage>
    </>
  );
}

export default Home;
