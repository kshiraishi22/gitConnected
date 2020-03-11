import React from "react";

import { Link, Route } from "react-router-dom"
import EmpCreateAccount from "../pages/EmpCreateAccount"
function empPersonal(props) {
    return (
        <div className="card" style={{ height: "100%", width: "100%", margin: "5%", position: "relative" }}>
            <div className="card-body">
                <div className="card-headers"><h3>Company Name</h3></div>

                <br />
                {/* <div class="btn-group" role="group" aria-label="Basic example" style={{position: "absolute", bottom: "5px"}}> */}

                {/* </div> */}
                {/* <button type="button" class="btn btn-primary" style={{position: "absolute", bottom: "50px"}}>See Jobs posted</button> */}
            </div>
            <div className="card" style={{ position: "relative", bottom: "5px" }}>


                <Link to="/emp-create-account" role="button" className="btn btn-secondary btn-block" style={{       position: "absolute", bottom: "5px" }}>
                    Update Profile
                    </Link>
                <Route exact path="/emp-create-account" component={EmpCreateAccount} />
                <br />
                <button type="button" class="btn btn-secondary btn-block" style={{ marginTop: "0", position: "absolute", bottom: "50px" }}>View Posted Jobs</button>
            </div>
            {/* <button type="button" class="btn btn-primary" style={{position: "absolute", bottom: "5px"}}>Update Profile</button> */}
        </div>

    )
}
export default empPersonal;