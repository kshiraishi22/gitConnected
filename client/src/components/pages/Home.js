import React from "react";
import HomeImage from "../Home/HomeImage";
import building from "../Home/Images/building_photo.jpeg";

function Home() {
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
        {/* <button className='btn btn-primary'>Login</button> */}
    </div>
  );
}

export default Home;
