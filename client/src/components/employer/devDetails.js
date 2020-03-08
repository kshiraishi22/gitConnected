import React from "react";

function devDetails(props){
    return(
        <div className="card">
            <div className="card-headers" style={{textAlign: "center"}}>
               <h3>Developer Name</h3>
            </div>
            <div className="card-body">
                <p className="card-text">Email</p>
                <p className="card-text">Phone Number</p>
                <p className="card-text">Languages</p>
                <p className="card-text">Employment Type</p>
                <p className="card-text">Location</p>
                <h5 className="card-text">About</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ipsum justo. Praesent nisi lorem, egestas id mattis in, maximus sed purus. Vivamus porta orci ac lectus ultrices, pellentesque mattis ante ultricies. Ut placerat sapien nec erat auctor porta. Phasellus auctor metus et nibh feugiat, eget ornare lectus dapibus. Vestibulum sem tortor, hendrerit id urna tempor, dictum ornare sapien. Ut id</p>
            </div>
        </div>
    )
}

export default devDetails;