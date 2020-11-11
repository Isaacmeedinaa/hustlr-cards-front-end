import React from "react";

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
      <a href={props.facebookLink} target="_blank" rel="noopener noreferrer">
        <i className="facebook icon" style={{ color: props.primaryColor }}></i>
      </a>
    </div>
  );
};

export default PublicCardFacebookLink;
