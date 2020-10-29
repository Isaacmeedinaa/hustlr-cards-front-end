import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

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
        <i className="twitter icon" style={{ color: props.primaryColor }}></i>
      </a>
    </div>
  );
};

export default PublicCardTwitterLink;
