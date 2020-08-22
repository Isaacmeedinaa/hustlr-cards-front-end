import React from "react";

import LogoTwitter from "react-ionicons/lib/LogoTwitter";

import "../../../constants/colors.css";
import "../UI.css";

const CardTwitterLink = (props) => {
  if (!props.twitterLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.twitterLink} target="_black">
        <LogoTwitter
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
        />
      </a>
    </div>
  );
};

export default CardTwitterLink;
