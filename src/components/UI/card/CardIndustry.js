import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardIndustry = (props) => {
  if (!props.industry || props.industry.id === 1) {
    return null;
  }
  return (
    <h5
      style={{ color: props.primaryColor }}
      className="card-business-industry"
    >
      {props.industry.title}
    </h5>
  );
};

export default CardIndustry;
