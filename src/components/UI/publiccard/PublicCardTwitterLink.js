import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardTwitterLink = (props) => {
  if (!props.twitterLink || props.twitterLink === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a href={props.twitterLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon 
          icon={faTwitter} 
          style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default PublicCardTwitterLink;
