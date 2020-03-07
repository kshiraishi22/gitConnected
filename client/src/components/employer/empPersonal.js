import React from "react";

function empPersonal(props) {
    return (
        <div className="card" style={{ height: "95%", width: "95%", margin: "5%", position: "relative" }}>
            <div className="card-body">
                <div className="card-headers"><h3>Company Name</h3></div>
                
                <br />
                {/* <div class="btn-group" role="group" aria-label="Basic example" style={{position: "absolute", bottom: "5px"}}> */}
                
                {/* </div> */}
                {/* <button type="button" class="btn btn-primary" style={{position: "absolute", bottom: "50px"}}>See Jobs posted</button> */}
            </div>
            <div className="card" style={{ postion: "absolute", bottom: "5px" }}>
                    <button type="button" class="btn btn-secondary btn-block" style={{marginBottom: "0"}}>Update Profile</button>
                    <br />
                    <button type="button" class="btn btn-secondary btn-block" style={{marginTop: "0"}}>View Posted Jobs</button>
                </div>
            {/* <button type="button" class="btn btn-primary" style={{position: "absolute", bottom: "5px"}}>Update Profile</button> */}
        </div>

    )
}
export default empPersonal;