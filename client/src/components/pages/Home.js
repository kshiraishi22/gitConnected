import HomeImage from "../Styling/HomeImage";
import building from "../Styling/Images/building_photo.jpeg";
import React, { useState } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Button } from 'reactstrap';

function Home() {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (

    <div>
      <HomeImage backgroundImage={building}>
        <h1 className="display-4">Welcome to Git Connected</h1>
        <h2 className="lead">A place for developers and employers to get connected.  Yeehaw!!</h2>
      <div className="start">
        {!isAuthenticated && (
          <Button onClick={loginWithRedirect}color="primary">Get Started</Button>
        )}
      {isAuthenticated && <button className='btn btn-light' onClick={() => logout()}>Log out</button>}
      </div>
      </HomeImage>
    </div>
  );
}

export default Home;