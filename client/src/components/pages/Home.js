import HomeImage from "../Styling/HomeImage";
import building from "../Styling/Images/building_photo.jpeg";
import React, { useState, useEffect } from "react";
import API from '../../utils/API'

function Home() {
  const devID = "5e6932d2b667b2175f52f9f0"
  const empID = "5e6932d2b667b2175f52f9ef"
  
  const [admin, setAdmin] = useState({
    id: "Mongoose id"
  })

  function devClick(event) {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: devID });
    console.log(admin)
  }
  function empClick(event) {
    const { name, value } = event.target;
    setAdmin({ ...admin, [name]: empID });
    console.log(admin)
  }


  return (
    <div className="container">
      <HomeImage backgroundImage={building}>
        <h1 className="display-4">Welcome to Git Connected</h1>
        <p className="lead">
          A place for developers and employers to get connected. Yeehaw.
        </p>
        <hr className="my-4" />
      </HomeImage>

      <div>
        <button name='id' onClick={devClick}>Log in Admin Developer</button>
        <button name='id' onClick={empClick}>Log in Admin Employer</button>
      </div>
    </div>
  );
}

export default Home;
