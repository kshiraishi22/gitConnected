import React from "react";
import "./Home.css";

function HomeImage(props) {
  return (
    <div className="HomeImage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default HomeImage;