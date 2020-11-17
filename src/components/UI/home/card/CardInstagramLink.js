import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardInstagramLink = (props) => {
  if (!props.instagramLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.instagramLink} target="_black">
      <FontAwesomeIcon 
        icon={faInstagram} 
        style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default CardInstagramLink;
