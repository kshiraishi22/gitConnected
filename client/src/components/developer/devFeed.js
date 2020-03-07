import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import JobCard from "./jobCard";
import Container from "../Container";
import Personal from "./Personal";
import JobDetails from "./JobDetails";
import API from "../../utils/API"

function DevFeed() {
    const [jobList, setJobList] = useState([]);

    useEffect(() =>{
        loadJobs()
    }, [])
    
    function loadJobs(){
        console.log("loading")
        API.getAllJobs()
        .then(res =>
            setJobList(res.data))
            .catch(err => console.log(err))
    }
    
        return (
            <>
            <Container>
                <div className="row">
                    <div className="col-12">
                    <Navbar />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <Footer />
                    </div>
                </div>
               
              
                <div className="row">
                
                <div className="col-2" style ={{backgroundColor: "blue",height: "500px", position: "relative"}}>
                    <Personal />
                    </div>
                
              
                    <div className="col-5" style= {{backgroundColor: "grey", height: "500px", overflowY:"scroll"}}>
                        <JobCard />
                       
                        </div>
                        
                        
                    <div className="col-5" style= {{height: "500px"}}>
                        <JobDetails />
                    </div>
                    
                </div>
              </Container> 
            </>
        )
    
}

export default DevFeed;