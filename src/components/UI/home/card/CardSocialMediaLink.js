import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardSocialMediaLink = (props) => {
  if (!props.link || props.link.url.length === 0) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.link.url} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={[props.link.type.iconPrefix, props.link.type.icon]}
          style={{ color: props.primaryColor }}
        />
      </a>
    </div>
  );
};

export default CardSocialMediaLink;
