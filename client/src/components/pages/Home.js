import HomeImage from "../Styling/HomeImage";
import building from "../Styling/Images/building_photo.jpeg";
import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";

function Home() {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <HomeImage backgroundImage={building}>
        <h1 className="display-4">Welcome to the space portal</h1>
        <h2 className="lead">A place for developers and employers to get connected.</h2>
        {/* <p></p>
        <p>Select which option applies to you to create an account:</p> */}
      </HomeImage>
        <ul className="list-group">
          <a className="list-group-item btn btn-light" type='button' href='/dev-create-account'>I'm a developer!</a>
          <a className="list-group-item btn btn-light" type='button' href='/emp-create-account'>I need a developer!</a>
        </ul>
      <div>
      {!isAuthenticated && (
        <button className='btn btn-light' onClick={() => loginWithRedirect({})}>Log in</button>
      )}

      {isAuthenticated && <button className='btn btn-light' onClick={() => logout()}>Log out</button>}
    </div>
    </div>
  );
}

export default Home;