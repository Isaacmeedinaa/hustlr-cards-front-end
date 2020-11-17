import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardFacebookLink = (props) => {
  if (!props.facebookLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.facebookLink} target="_black">
        <FontAwesomeIcon 
          icon={faFacebook}
          style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default CardFacebookLink;
