import React from "react";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardDescription = (props) => {
  if (!props.description || props.description === "") {
    return null;
  }
  return <p className="card-business-services">{props.description}</p>;
};

export default CardDescription;
