import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardPhoneNumber = (props) => {
  if (!props.phoneNumber) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={"tel:" + props.phoneNumber} target="_black">
        <i  className="phone alternate icon card-business-social-media-icon" 
            style={{ color: props.primaryColor, fontSize: '16px' }}>
        </i>
      </a>
    </div>
    
  );
};

export default CardPhoneNumber;
