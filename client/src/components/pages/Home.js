import HomeImage from "../Styling/HomeImage";
import building from "../Styling/Images/building_photo.jpeg";
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";

function Home() {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (

  <div className="container">
    <div>
      <HomeImage backgroundImage={building}>
        <h1 className="display-4">Welcome to Git Connected</h1>
        <p className="lead">A place for developers and employers to get connected.  Yeehaw.</p>
        <hr className="my-4"/>
      </HomeImage>

      <div>
      {!isAuthenticated && (
        <button className='btn btn-light' onClick={() => loginWithRedirect({})}>Log in or Sign up</button>
      )}

      {isAuthenticated && <button className='btn btn-light' onClick={() => logout()}>Log out</button>}
    </div>
    </div>
  );
}

export default Home;