import React from "react";

import PublicCardIndustry from "./PublicCardIndustry";
import PublicCardLocation from "./PublicCardLocation";

import "./PublicCardUI.css";

const PublicCardBadges = (props) => {
  const industryView =
    !props.industry || !props.industry.id ? null : (
      <div
        className="public-card-badge"
        style={{ backgroundColor: props.transparentColor }}
      >
        <PublicCardIndustry
          industry={props.industry}
          primaryColor={props.primaryColor}
          transparentColor={props.transparentColor}
        />
      </div>
    );

  const locationView =
    (!props.location?.description || props.location.description.trim().length === 0)  ? null : (
      <div
        className="public-card-badge"
        style={{ backgroundColor: props.transparentColor }}
      >
        <PublicCardLocation
          location={props.location}
          primaryColor={props.primaryColor}
          transparentColor={props.transparentColor}
        />
      </div>
    );

  return (
    <div className="public-card-badges-container">
      {industryView}
      {locationView}
    </div>
  );
};

export default PublicCardBadges;
