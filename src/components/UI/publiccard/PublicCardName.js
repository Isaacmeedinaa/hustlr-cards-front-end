import React from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardName = (props) => {
  if (!props.title || props.title === null) return null;
  return (
    <h1 className="ui horizontal divider header public-card-name">
      <span className="public-card-name">{props.title}</span>
    </h1>
  );
};

export default PublicCardName;
