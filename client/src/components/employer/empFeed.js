import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import DevCard from "./devCard";
import Container from "../Container";
import EmpPersonal from "./empPersonal";
import DevDetails from "./devDetails";
import API from "../../utils/API"

function EmpFeed() {
    const [devList, setDevList] = useState([]);

    useEffect(() =>{
        loadDevs()
    }, [])
    
    function loadDevs(){
        console.log("loading")
        API.getAllDevs()
        .then(data =>
            setDevList(data.data))
            .catch(err => console.log(err))
    }
    
        return (
            <>
            <Container>
                <Navbar />
                <Footer />
              
                <div className="row">
                
                <div className="col-2" style ={{backgroundColor: "blue",height: "500px", position: "relative"}}>
                    <EmpPersonal />
                    </div>
                
              
                    <div className="col-5" style= {{backgroundColor: "grey", height: "500px", overflowY:"scroll"}}>
                        {devList.map(dev =>(<DevCard data={dev} key={dev._id}/>
                        ))}
                        </div>
                        
                        
                    <div className="col-5" style= {{height: "500px"}}>
                        <DevDetails />
                    </div>
                    
                </div>
                </Container>
              
            </>
        )
    
}

export default EmpFeed;