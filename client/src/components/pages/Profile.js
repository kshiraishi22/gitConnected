import React from "react";
import { Redirect } from 'react-router-dom'

function Profile() {
  return (
    <>
    <div className='container'>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Welcome!</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div class="card mb-4">
            <div class="card-body">
              <h2 class="card-title">About Me</h2>
              <img src="" />
              <p class="card-text">Name:</p>
              <p class="card-text">Email address:</p>
              <p class="card-text">Type of Developer:</p>
              <p class="card-text">Primary Languages:</p>
              <p class="card-text">Summary:</p>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div class="card mb-4">
            <div class="card-body">  
              <h2 class="card-title">Applied Jobs</h2>
              <li class="card-text">Jr. Web Developer </li>
              <li class="card-text">"React Developer </li>
              <li class="card-text">"UI/UX Developer </li>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div class="card">
            <div class="card-body">
              <h2 class="card-title">Jr. Web Developer</h2>
              <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
              <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
          </div>  
        </div>
      </div>
    </div>
    </>            
  )}

export default Profile