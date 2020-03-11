import React from "react";
import "./EmpCreateImage.css";

function EmpCreateImage(props) {
  return (
    <div className="EmpCreateImage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default EmpCreateImage;