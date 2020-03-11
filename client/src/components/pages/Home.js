import HomeImage from "../Styling/HomeImage";
import building from "../Styling/Images/building_photo.jpeg";
import React, { useState, useEffect } from "react";


function Home() {

  const [loggedIn, setLoggedIn]=useState({
    id: ""
  });

  const populateActivAdmin =(id)=>{
    
  }
  const [admin, setAdmin] = useState({
    id: "Mongoose id"
  })

  useEffect(()=>{

  })

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
        <button>Log in Admin Developer</button>
        <button>Log in Admin Employer</button>
      </div>
    </div>
  );
}

export default Home;
