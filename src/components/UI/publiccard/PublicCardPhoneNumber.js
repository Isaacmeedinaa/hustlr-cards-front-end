import React from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardPhoneNumber = (props) => {
  if (!props.phoneNumber || !props.phoneNumber === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a
        href={"tel:" + props.phoneNumber}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="phone alternate icon"
          style={{ color: props.primaryColor, fontSize: "14px" }}
        ></i>
      </a>
    </div>
  );
};

export default PublicCardPhoneNumber;
