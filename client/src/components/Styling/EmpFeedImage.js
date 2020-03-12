import React from "react";

function EmpFeedImage(props){
    return(
        <div className="EmpBackgroundImage" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
    )
}

export default EmpFeedImage;