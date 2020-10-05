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
        <i  className="facebook icon card-business-social-media-icon" 
            style={{ color: props.primaryColor, fontSize: '16px' }}>
        </i>
      </a>
    </div>
  );
};

export default CardFacebookLink;
