import React, { Fragment } from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardIndustry = (props) => {
  if (!props.industry || !props.industry.id) {
    return null;
  }
  return (
    <div className="card-business-industry-container">
      <i className="heart icon" style={{color: props.primaryColor}}></i>
      <p
        style={{ color: props.primaryColor }}
        className="card-business-industry"
      >
        {props.industry.title}
      </p>
    </div>
  );
};

export default CardIndustry;
