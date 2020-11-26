import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardInstagramLink = (props) => {
  if (!props.instagramLink || props.instagramLink === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a
        href={`https://www.instagram.com/${props.instagramLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faInstagram}
          style={{ color: props.primaryColor }}
        />
      </a>
    </div>
  );
};

export default PublicCardInstagramLink;
