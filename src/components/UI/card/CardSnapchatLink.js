import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardSnapchatLink = (props) => {
  if (!props.snapchatLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor, marginRight: 0 }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.snapchatLink} target="_black">
        <i
          className="snapchat ghost icon card-business-social-media-icon"
          style={{ color: props.primaryColor }}
        ></i>
      </a>
    </div>
  );
};
export default CardSnapchatLink;
