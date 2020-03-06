import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import JobCard from "./jobCard";
// import Container from "./Container";
import Personal from "./Personal";
import JobDetails from "./JobDetails";


class devFeed extends React.Component {
    // state = {

    // }
    render() {
        return (
            <>
                <Navbar />
                <Footer />
              
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
              
            </>
        )
    }
}

export default devFeed;