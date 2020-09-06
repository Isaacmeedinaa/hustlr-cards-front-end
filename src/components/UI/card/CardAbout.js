import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardServices = (props) => {
  if (!props.about) {
    return null;
  }
  return <h4 className="card-business-services">{props.about}</h4>;
};

export default CardServices;
