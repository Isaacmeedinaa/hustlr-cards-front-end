import React from "react";

import LogoSnapchat from "react-ionicons/lib/LogoSnapchat";

import "../../../constants/colors.css";
import "../UI.css";

const CardSnapchatLink = (props) => {
  if (!props.snapchatLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.snapchatLink} target="_black">
        <LogoSnapchat
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
        />
      </a>
    </div>
  );
};
export default CardSnapchatLink;
