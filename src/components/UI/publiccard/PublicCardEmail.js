import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardEmail = (props) => {
  if (!props.email || props.email === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a
        href={"mailto:" + props.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon 
        icon={faEnvelope} 
        transform="shrink-2"
        style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default PublicCardEmail;
