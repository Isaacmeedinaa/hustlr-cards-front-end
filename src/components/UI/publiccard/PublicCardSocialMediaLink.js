import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardSocialMediaLink = (props) => {
  if (!props.link || props.link.url.length === 0 ) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a
        href={props.link.url}
        target="_black"
      >
        <FontAwesomeIcon
          icon={[props.link.type.iconPrefix, props.link.type.icon]}
          style={{ color: props.primaryColor }}
        />
      </a>
    </div>
  );
};

export default PublicCardSocialMediaLink;