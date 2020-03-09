import React from "react";
import JobDetails from "./JobDetails";
import { Link, Route } from "react-router-dom";
import nextId from "react-id-generator";


function JobCard(props) {

    function handleClick() {
        const id = nextId()
        console.log(id)
    }
    return (
     
        <>
          {props.data.map(data =>(
            <div className="card" style={{marginTop: "5px", padding: "5px"}}>
              
               
            <div className="card-headers" key={data.title}>
                Company Name
                </div>
              
                 <div className="card-body">


                    <h5 className="card-title">Title:{data.title} </h5>
                <p className="card-text">Position: {data.position}</p>
                <p className="card-text">Salary: {data.salary}</p>
                    <p className="card-text">Location</p>
                    
                
                
                    </div>
                    <button type="button" onClick={handleClick} class="btn btn-secondary" style={{position: "absolute", marginTop: "10px",bottom: "5px"}}>Job Details</button>
                    {/* <Link to={`/feed/dev/${data.id}`}role="button" className="btn btn-secondary" style={{position: "absolute", bottom: "5px"}}>
                  More Info
                </Link> */}
                   
              
            </div>
           
           ))}  
        </>
    )
}

export default JobCard;