import React from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardIndustry = (props) => {
  if (!props.industry || !props.industry.id) {
    return null;
  }

  return (
    <div className="public-card-industry-container">
      <i
        className={props.industry.icon}
        style={{ color: props.primaryColor }}
      ></i>
      <p style={{ color: props.primaryColor }} className="public-card-industry">
        {props.industry.title}
      </p>
    </div>
  );
};

export default PublicCardIndustry;
