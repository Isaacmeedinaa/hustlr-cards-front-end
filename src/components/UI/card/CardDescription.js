import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardDescription = (props) => {
  if (!props.description) {
    return null;
  }
  return <h4 className="card-business-services">{props.description}</h4>;
};

export default CardDescription;
