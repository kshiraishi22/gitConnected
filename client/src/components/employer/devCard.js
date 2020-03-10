import React from "react";

function devCard(props) {
    return (
        <>
            <div className="card" style={{marginTop: "5px"}}>
                <div className="card-header">
                    Developer Name: {props.data.firstName} {props.data.lastName}
                </div>
                <div className="card-body">
                    <p className="card-text">Developer Type: {props.data.devType}</p>
                    <p className="card-text">Languages {props.data.languages}</p>
                    <p className="card-text">Employment Type Seeking: {props.data.empType}</p>
                    <a href="#" className="btn btn-primary">Details</a>
                </div>
            </div>
           
            
        </>
    )
}

export default devCard;