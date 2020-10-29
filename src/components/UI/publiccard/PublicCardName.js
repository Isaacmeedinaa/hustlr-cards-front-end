import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const PublicCardName = (props) => {
  return <h1 className="public-card-name">{props.title}</h1>;
};

export default PublicCardName;
