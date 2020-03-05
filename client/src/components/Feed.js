import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";


class Feed extends React.Component {
    // state = {

    // }
    render() {
        return (
            <>
                <Navbar />
                <Footer />
                <div className="row">
                <div className="col-2" style ={{backgroundColor: "blue",height: "500px"}}>col-4</div>
                    <div className="col-10" style= {{backgroundColor: "grey", height: "500px"}}>col-8</div>
                    
                </div>
            </>
        )
    }
}

export default Feed;