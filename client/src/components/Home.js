import React, { useState } from "react";

function Home() {
  // const [developerState, setDeveloperState] = useState({
  //   excitementLevel: 10000,
  //   lifeLongLearner: true,
  //   mood: "excited",
  //   name: "Alec"
  // });

  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the space portal</h1>
        <p className="lead">A place for developers and employers to get connected.</p>
        <hr className="my-4"/>
        <p>Select which option applies to you to create and account:</p>
        <ul class="list-group">
          <li class="list-group-item btn btn-light" type='button'>I'm a developer!</li>
          <li class="list-group-item btn btn-light" type='button'>I neeed a developer!</li>
        </ul>
        
      </div>
    </div>
  );
}

export default Home;
