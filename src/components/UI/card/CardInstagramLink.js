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
        <i  className="instagram icon card-business-social-media-icon" 
            style={{ color: props.primaryColor, fontSize: '16px' }}>
        </i>
      </a>
    </div>
  );
};

export default CardInstagramLink;
