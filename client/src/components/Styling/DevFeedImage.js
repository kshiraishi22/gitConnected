import React from "react";

function DevFeedImage(props){
    return(
        <div className="DevBackgroundImage" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
    )
}

export default DevFeedImage