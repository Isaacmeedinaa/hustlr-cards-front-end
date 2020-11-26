import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardFacebookLink = (props) => {
  if (!props.facebookLink || props.facebookLink === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a
        href={`https://www.facebook.com/${props.facebookLink}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          icon={faFacebook}
          style={{ color: props.primaryColor }}
        />
      </a>
    </div>
  );
};

export default PublicCardFacebookLink;
