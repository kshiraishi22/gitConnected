import React from "react";
import "./PostJobImage.css";

function PostJobImage(props) {
  return (
    <div className="PostJobImage text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default PostJobImage;