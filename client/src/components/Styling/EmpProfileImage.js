import React from "react";
import "./EmpProfileImage.css";

function EmpProfileImage(props) {
  return (
    <div className="EmpProfileImage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default EmpProfileImage;