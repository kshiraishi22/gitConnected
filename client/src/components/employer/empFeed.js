import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom"
import Footer from "../Footer";
import Navbar from "../Navbar";
import DevCard from "./devCard";
import Container from "../Container";
import EmpPersonal from "./empPersonal";
import DevDetails from "./devDetails";
import API from "../../utils/API"

function EmpFeed(props) {
    const [devList, setDevList]=useState([]);
    const [activeDev, setActiveDev] = useState({});

    useEffect(() =>{
        console.log(props)
        loadDevs()
    }, [])

    const populateActiveDev = (id) => {
        devList.map( dev => {
            if( dev._id === id ){
                setActiveDev(dev);
            }
        })
    }
    
    function loadDevs(){
        console.log("loading")
        API.getAllDevs()
        .then(data =>
            setDevList(data.data))
            .catch(err => console.log(err))
    }
    
        return (
            <>
            {/* <Router> */}
            <Container>
                <Navbar />
                <Footer />
              
                <div className="row">
                
                <div className="col-2" style ={{backgroundColor: "blue",height: "500px", position: "relative"}}>
                    <EmpPersonal />
                    </div>
                
              
                    <div className="col-5" style= {{backgroundColor: "grey", height: "500px", overflowY:"scroll"}}>
                        {devList.map(dev =>(
                            <DevCard setActive={populateActiveDev} url={props.match.url} data={dev} key={dev._id}/>
                        ))}
                        </div>
                        
                        
                    <div className="col-5" style= {{height: "500px"}}>
                    <Route 
                        exact path={`${props.match.url}/${activeDev._id}`}  
                        render={(props) => <DevDetails {...activeDev} />}
                        />
                    </div>
                    
                </div>
                </Container>
              {/* </Router> */}
            </>
        )
    
}

export default EmpFeed;