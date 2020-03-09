import React from "react";
import { Link, Route } from "react-router-dom"
import DevProfile from "../pages/DevProfile"

function Personal(props) {
    return (
        <div className="card" style={{ height: "95%", width: "95%", margin: "5%", position: "relative", display: "flex" }}>
            {/* <div className="card-body"> */}
            <h2>Developer John</h2>
            <br />
           

            <Link to="/profile/dev" role="button" className="btn btn-secondary btn-block" style={{ position: "absolute", bottom: "5px" }}>
                Update Profile
                    </Link>
            <Route exact path="/profile/dev" component={DevProfile} />


            {/* </div> */}
        </div>
    )
}
export default Personal;