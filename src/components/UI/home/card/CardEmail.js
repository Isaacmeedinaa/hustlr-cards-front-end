import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import "../../../../constants/colors.css";
import "./CardUI.css";

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
      <FontAwesomeIcon 
        icon={faEnvelope} 
        transform="shrink-2"
        style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default CardEmail;
