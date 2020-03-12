import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom"
import Footer from "../Footer";
import Navbar from "../Navbar";
import DevCard from "./devCard";
import Container from "../Container";
import EmpPersonal from "./empPersonal";
import DevDetails from "./devDetails";
import API from "../../utils/API";
import photo from "../Styling/Images/empfeed.png";
import "../Styling/EmpFeedImage.css";
import EmpFeedImage from "../Styling/EmpFeedImage";

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
            <EmpFeedImage backgroundImage={photo}>
                <Navbar />
                <Footer />
              
                <div className="row">
                
                <div className="col-2" style ={{height: "500", position: "relative"}}>
                    <EmpPersonal user={"5e69af9b39a8906f28d61ce9"} />

                    </div>
                
              
                    <div className="col-5" style= {{height: "500px", overflowY:"scroll"}}>
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
                </EmpFeedImage>
                </Container>
              {/* </Router> */}
            </>
        )
    
}

export default EmpFeed;