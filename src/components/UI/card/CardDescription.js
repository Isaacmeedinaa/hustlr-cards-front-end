import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardDescription = (props) => {
  if (!props.description) {
    return null;
  }
  return <p className="card-business-services" >{props.description}</p>;
};

export default CardDescription;
