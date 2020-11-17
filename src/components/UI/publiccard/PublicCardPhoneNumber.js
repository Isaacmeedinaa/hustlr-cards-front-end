import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardPhoneNumber = (props) => {
  if (!props.phoneNumber || !props.phoneNumber === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a
        href={"tel:" + props.phoneNumber}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon 
          icon={faPhoneAlt} 
          transform="shrink-2"
          style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default PublicCardPhoneNumber;
