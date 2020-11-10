import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardEmail = (props) => {
  if (!props.email) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={"mailto:" + props.email} target="_black">
        <i  className="envelope icon card-business-social-media-icon" 
            style={{ color: props.primaryColor, fontSize: '14px' }}>
        </i>
      </a>
    </div>
  );
};

export default CardEmail;
