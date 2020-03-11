import React from "react";
import "./DevCreateImage.css";

function DevCreateImage(props) {
  return (
    <div className="DevCreateImage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default DevCreateImage;