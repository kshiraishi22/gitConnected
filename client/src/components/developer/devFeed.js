import React, { useState, useEffect } from "react";
import { withRouter } from "react-router"
import { Link, Route } from "react-router-dom"
import Footer from "../Footer";
import Navbar from "../Navbar";
import JobCard from "./jobCard";
import Container from "../Container";
import Personal from "./Personal";
import JobDetails from "./JobDetails";
import API from "../../utils/API"
// import JobSeed from "../../../../scripts/seedDB"


function DevFeed(props) {
    
    const [jobList, setJobList] = useState([]);
    console.log(jobList)
    useEffect(() =>{
        loadJobs()
    }, [])
    
    function loadJobs() {
        API.getAllJobs()
          .then(data => setJobList(data.data))
          .catch(err => console.log(err));
      }
    

    //     function profileSubmit(e){
    //     e.preventDefault()
    //     console.log("Hi")
    //     const area = this
    //     console.log(area)
    //     // area.props.history.push("/feed/emp")
    // }
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
                    <Personal 
                    
                    // profileSubmit= {profileSubmit.bind(this)}
                    />
                    </div>
                
              
                    <div className="col-5" style= {{backgroundColor: "grey", height: "500px", overflowY:"scroll"}}>
                    {jobList.map(job=>(
                    <JobCard data={job} key={job._id}></JobCard>
                    ))}
                    </div>

                       
                        
                        
                        
                    <div className="col-5" style= {{height: "500px"}}>
                        <JobDetails />
                        
                        {/* <Route 
                        exact path={`${props.match.url}/:id`}
                        render={(props) => <JobDetails {...props} /> } /> */}


                    </div>
                    
                </div>
              
              </Container> 
            </>
        )
    
}

export default withRouter(DevFeed);