import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


const CreateJob = ()=>{
    return(
        //navigates user to post job form
        <Link to="/postjob">
             <button id="jobbtn" className="btn" role="button">Post New Job</button>
        </Link>
       
    )
}

export default CreateJob;