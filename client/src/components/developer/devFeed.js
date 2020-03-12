import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";
import JobCard from "./jobCard";
import Container from "../Container";
import Personal from "./Personal";
import JobDetails from "./JobDetails";    
import API from "../../utils/API";
import photo from "../Styling/Images/devfeed.png";
import "../Styling/DevFeedImage.css";
import DevFeedImage from "../Styling/DevFeedImage";

function DevFeed(props) {
  const [jobList, setJobList]=useState([]);
  const [activeJob, setActiveJob]=useState({})
  useEffect(() => {
    loadJobs();
  }, []);

  const populateActiveJob=(id)=>{
    jobList.map( job=> {
      if( job._id === id ){
        setActiveJob(job)
      }
    })
  }

  function loadJobs() {
    API.getAllJobs()
      .then(data => setJobList(data.data))
      .catch(err => console.log(err));
  }

   return (
    <>
    
      <Container>
        <DevFeedImage backgroundImage={photo}>
      
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
          <div
            className="col-2"
            style={{
              zIndex: "-5",
              height: "100%vh",
              position: "relative"
            }}
          >
            <Personal />
          </div>

          <div
            className="col-5"
              style={{
              height: "500px",
              overflowY: "scroll",
            paddingRight: "30px"}}
          >
            
              {jobList.map(job=>(
                <JobCard setActive={populateActiveJob} url={props.match.url} data={job} key={job._id} />
              ))}
          </div>

          <div className="col-5" style={{ height: "500px" }}>
            <Route exact path={`${props.match.url}/${activeJob._id}`} render={(props) => <JobDetails {...activeJob} />} />
            
          </div>
        </div>
        
        </DevFeedImage>
      </Container>
    
    </>
  );

}

export default (DevFeed);
