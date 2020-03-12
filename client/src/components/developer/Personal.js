import React from "react";
import { Link, Route } from "react-router-dom"
import DevCreateAccount from "../pages/DevCreateAccount"

function Personal(props) {
    return (
        <div className="card" style={{ height: "95%", margin: "5%", position: "relative", display: "flex" }}>
            <h2>Developer John</h2>
            <br />


            <Link to="/dev-create-account" role="button" className="btn btn-secondary btn-block" style={{ position: "absolute", bottom: "5px" }}>
            Update Profile
            </Link>
            <Route exact path="/dev-create-account" component={DevCreateAccount} />


            {/* </div> */}
        </div>
    )
}
export default Personal;