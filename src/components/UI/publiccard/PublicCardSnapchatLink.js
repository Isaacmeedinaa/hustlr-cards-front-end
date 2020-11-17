import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnapchatGhost } from '@fortawesome/free-brands-svg-icons'

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardSnapchatLink = (props) => {
  if (!props.snapchatLink || props.snapchatLink === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a href={props.snapchatLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faSnapchatGhost} style={{ color: props.primaryColor }}/>
      </a>
    </div>
  );
};

export default PublicCardSnapchatLink;
