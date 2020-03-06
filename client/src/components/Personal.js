import React from "react";

function Personal(props){
    return(
        <div className="card" style={{height: "95%", width: "95%", margin: "5%", position: "flex"}}>
            <div className="card-body">
            <h2>Developer John</h2>
            <br/>
            <p>Contact Info</p>
            <p>Personal Info</p>
            <button type="button" class="btn btn-primary" style={{position: "absolute", bottom: "5px"}}>Update Profile</button>
            </div>
        </div>
    )
}
export default Personal;