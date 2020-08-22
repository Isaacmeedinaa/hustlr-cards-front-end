import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardServices = (props) => {
  if (!props.services) {
    return null;
  }
  return <h4 className="card-business-services">{props.services}</h4>;
};

export default CardServices;
