import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardTitle = (props) => {
  if (!props.title) {
    return null;
  }

  return <h1 className="card-business-name">{props.title}</h1>;
};

export default CardTitle;
