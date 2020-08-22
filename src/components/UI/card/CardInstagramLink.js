import React from "react";

import LogoInstagram from "react-ionicons/lib/LogoInstagram";

import "../../../constants/colors.css";
import "../UI.css";

const CardInstagramLink = (props) => {
  if (!props.instagramLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.instagramLink} target="_black">
        <LogoInstagram
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
        />
      </a>
    </div>
  );
};

export default CardInstagramLink;
