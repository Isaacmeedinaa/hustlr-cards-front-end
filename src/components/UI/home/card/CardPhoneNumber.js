import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import "../../../../constants/colors.css";
import "./CardUI.css";

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
        <FontAwesomeIcon 
            icon={faPhoneAlt} 
            transform="shrink-2"
            style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default CardPhoneNumber;
