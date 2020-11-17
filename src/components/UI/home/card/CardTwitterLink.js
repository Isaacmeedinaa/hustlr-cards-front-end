import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardTwitterLink = (props) => {
  if (!props.twitterLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.twitterLink} target="_black">
        <FontAwesomeIcon 
            icon={faTwitter} 
            style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default CardTwitterLink;
