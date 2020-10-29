import React from "react";

import PublicCardIndustry from "./PublicCardIndustry";
import PublicCardLocation from "./PublicCardLocation";

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
    (!props.city || props.city.length === 0) &&
    (!props.state || props.state.length === 0) ? null : (
      <div
        className="public-card-badge"
        style={{ backgroundColor: props.transparentColor }}
      >
        <PublicCardLocation
          city={props.city}
          state={props.state}
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
