import React from "react";

function jobDetails(props){
    return(
        <div className="card">
            <div className="card-headers">
                Company Name
            </div>
            <div className="card-body">
                <p className="card-text">Seeking: Title</p>
                <p className="card-text">Job Type/Position</p>
                <p className="card-text">Salary</p>
                <h5 className="card-text">Description</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at ipsum justo. Praesent nisi lorem, egestas id mattis in, maximus sed purus. Vivamus porta orci ac lectus ultrices, pellentesque mattis ante ultricies. Ut placerat sapien nec erat auctor porta. Phasellus auctor metus et nibh feugiat, eget ornare lectus dapibus. Vestibulum sem tortor, hendrerit id urna tempor, dictum ornare sapien. Ut id</p>
            </div>
        </div>
    )
}

export default jobDetails;