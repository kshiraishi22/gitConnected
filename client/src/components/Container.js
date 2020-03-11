import React from "react";
import { urlencoded } from "express";
// import Background from "./assets/images/image.png"
// const image = require("./assets/images/image.png");
// const divStyle = {
//     backgroundImage:`url(${image})`
// }
// // const imgMyimageexample = require('../assets/imageexample.jpg');
// const divStyle = {
//   width: '88%',
//   height: '800px',
//   backgroundImage: `url(${imgMyimageexample})`,
//   backgroundSize: 'cover'   <---- This is important
// };


function Container(props){
    return(
        <div className="container-fluid"  >{props.children}</div>
    )
}

export default Container;