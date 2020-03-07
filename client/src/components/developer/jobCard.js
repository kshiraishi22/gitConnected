import React from "react";

function jobCard(props) {
    return (
        <>
            <div className="card" style={{marginTop: "5px"}}>
                <div className="card-header">
                    Company Name
                </div>
                <div className="card-body">
                    <h5 className="card-title">Title</h5>
                    <p className="card-text">Position</p>
                    <p className="card-text">Salary</p>
                    <p className="card-text">Location</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
           
            
        </>
    )
}

export default jobCard;