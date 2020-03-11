import React from "react";
import { useAuth0 } from "../react-auth0-spa";



function Navbar(props) {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return(
      <nav className="navbar navbar-light bg-light justify-content-between" style={{position: "sticky"}} >
        <a className="navbar-brand">Welcome {props.name}</a>
        {/* LOG IN BUTTON */}
        {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        {/* LOG IN BUTTON */}

        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
    )
}

export default Navbar;