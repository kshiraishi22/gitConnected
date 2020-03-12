import React from "react";
import "./DevProfileImage.css";

function DevProfileImage(props) {
  return (
    <div className="DevProfileImage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default DevProfileImage;