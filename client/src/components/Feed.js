import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
// import Container from "./Container";
import Personal from "./Personal";
class Feed extends React.Component {
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
                        <Card />
                        {/* <Container /> */}
                        col-8</div>
                        
                        
                    <div className="col-5" style= {{height: "500px"}}>col-8</div>
                    
                </div>
              
            </>
        )
    }
}

export default Feed;