import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const PublicCardEmail = (props) => {
  if (!props.email || props.email === "") {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="public-card-social-media-icon-container"
    >
      <a
        href={"mailto:" + props.email}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i
          className="envelope icon"
          style={{ color: props.primaryColor, fontSize: "14px" }}
        ></i>
      </a>
    </div>
  );
};

export default PublicCardEmail;
