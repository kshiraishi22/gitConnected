import HomeImage from "../Styling/HomeImage";
import building from "../Styling/Images/building_photo.jpeg";
import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import { Link, Route } from "react-router-dom";
import DevFeed from "../developer/devFeed";
import EmpFeed from "../employer/empFeed";

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

  return (
    <>
      <HomeImage backgroundImage={building}>
        <h1 className="display-4">Welcome to Git Connected</h1>
        <h2 className="lead">
          A place for developers and employers to get connected. Yeehaw!!
        </h2>
        <div className="buttons">
          <Link to="/feed/dev">
            <Button name="id" onClick={devClick} color="primary">
              Log in as Admin Developer
            </Button>{" "}
          </Link>
          <Route path="/feed/dev" render={(props)=>(<DevFeed {...props} id={admin.id}/>)}/>
          <Link to="/feed/emp">
            {" "}
            <Button name="id" onClick={empClick} color="success">
              Log in as Admin Employer
            </Button>
          </Link>
          <Route path="/feed/emp" render={(props)=>(<EmpFeed {...props} id={admin.id}/>)}/>
        </div>
      </HomeImage>
    </>
  );
}

export default Home;
