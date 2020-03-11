import React, { useEffect } from "react";
import { Link, Route } from "react-router-dom"
import DevCreateAccount from "../pages/DevCreateAccount"
import API from "../../utils/API";

function Personal(props) {
    const [user, setUser] = userState({
        firstName: "",
        lastName:"",
        emailAddress:"",
        devType:"",
        empType:"",
        language:"",
        location:"",
        profile:""
    })

    useEffect(()=>{
        loadUser(props);
    }, []);
    function loadUser(id){
        API.getDev(id).then((data)=>{
            setUser(data.data);
        }).catch(err=>console.log(err));
    }
    return (
        <div className="card" style={{ height: "95%", width: "95%", margin: "5%", position: "relative", display: "flex" }}>
            <h2>{user.firstName} {user.lastName}</h2>
            <br />
            <p>{user.profile}</p>
                <ul>
                    <li>Developer Status: {user.devType}</li>
                    <li>Main development language: {user.language}</li>
                    <li>Location: {user.location}</li>
                </ul>
            <br />
            
            <h3>Contact Me!</h3>
            <ul>
                <li>Email: {user.emailAddress}</li>
            </ul>


            <Link to="/dev-create-account" role="button" className="btn btn-secondary btn-block" style={{ position: "absolute", bottom: "5px" }}>
            Update Profile
            </Link>
            <Route exact path="/dev-create-account" component={DevCreateAccount} />


            {/* </div> */}
        </div>
    )
}
export default Personal;