import React from "react";

import LogoFacebook from "react-ionicons/lib/LogoFacebook";

import "../../../constants/colors.css";
import "../UI.css";

const CardFacebookLink = (props) => {
  if (!props.facebookLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.facebookLink} target="_black">
        <LogoFacebook
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
        />
      </a>
    </div>
  );
};

export default CardFacebookLink;
