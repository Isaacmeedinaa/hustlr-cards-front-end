import React from "react";

import PublicCardReviewButton from "./PublicCardReviewButton";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardRatings = (props) => {
  return (
    <div className="public-card-ratings-wrapper">
      <div className="public-card-ratings-container">
        <div
          className="public-card-rating-item-container"
          style={{ backgroundColor: props.transparentColor }}
        >
          <span
            className="public-card-rating-text"
            style={{ color: props.primaryColor }}
            role="img"
            aria-label="Amazing"
          >
            🤩 4.4 / 5
          </span>
        </div>
      </div>
      <PublicCardReviewButton />
    </div>
  );
};

export default PublicCardRatings;
