import React, { useState } from "react";
import { Redirect } from 'react-router-dom'

function Home() {
  // const [setRenderRedirect, setRenderRedirect] = useState({
    
  // });
  // state = {
  //   redirect: false
  // }
  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/dev-' />
  //   }
  // };

  
    return (
    <div className="container">
      {/* <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Redirect</button>
       </div> */}
      <div className="jumbotron">
        <h1 className="display-4">Welcome to the space portal</h1>
        <p className="lead">A place for developers and employers to get connected.</p>
        <hr className="my-4"/>
        <p>Select which option applies to you to create and account:</p>
        <ul className="list-group">
          <li className="list-group-item btn btn-light" type='button'>I'm a developer!</li>
          <li className="list-group-item btn btn-light" type='button'>I need a developer!</li>
        </ul>

      </div>
    </div>
  );
}

export default Home;
