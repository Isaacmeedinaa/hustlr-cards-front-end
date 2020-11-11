import React from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardDescription = (props) => {
  if (!props.description || props.description === "") {
    return null;
  }
  return <p className="public-card-description">{props.description}</p>;
};

export default PublicCardDescription;
