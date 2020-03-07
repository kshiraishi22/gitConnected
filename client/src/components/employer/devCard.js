import React from "react";

function devCard(props) {
    return (
        <>
            <div className="card" style={{marginTop: "5px"}}>
                <div className="card-header">
                    Developer Name
                </div>
                <div className="card-body">
                    <p className="card-text">Developer Type</p>
                    <p className="card-text">Languages</p>
                    <p className="card-text">Employment Type Seeking</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
           
            
        </>
    )
}

export default devCard;