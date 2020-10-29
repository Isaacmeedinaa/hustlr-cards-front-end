import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

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
        <i
          className="snapchat ghost icon"
          style={{ color: props.primaryColor }}
        ></i>
      </a>
    </div>
  );
};

export default PublicCardSnapchatLink;
