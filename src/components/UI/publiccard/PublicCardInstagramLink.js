import React from "react";

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
      <a href={props.instagramLink} target="_blank" rel="noopener noreferrer">
        <i
          className="instagram icon card-business-social-media-icon"
          style={{ color: props.primaryColor }}
        ></i>
      </a>
    </div>
  );
};

export default PublicCardInstagramLink;
