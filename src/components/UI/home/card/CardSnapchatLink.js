import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardSnapchatLink = (props) => {
  if (!props.snapchatLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor, marginRight: 0 }}
      className="card-business-social-media-icon-container"
    >
      <a
        href={`https://www.snapchat.com/add/${props.snapchatLink}`}
        target="_black"
      >
        <FontAwesomeIcon
          icon={faSnapchatGhost}
          style={{ color: props.primaryColor }}
        />
      </a>
    </div>
  );
};
export default CardSnapchatLink;
