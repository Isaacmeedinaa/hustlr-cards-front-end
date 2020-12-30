import React from "react";
import CardLocation from "./CardLocation";
import CardIndustry from "./CardIndustry";

const CardBadges = (props) => {
  const industryView =
    !props.cardData.industry || !props.cardData.industry.id ? null : (
      <div
        className="card-business-badge"
        style={{ backgroundColor: props.cardTheme.transparentColor }}
      >
        <CardIndustry
          industry={props.cardData.industry}
          primaryColor={props.cardTheme.primaryColor}
          transparentColor={props.cardTheme.transparentColor}
        />
      </div>
    );

  const locationView =
    (!props.cardData?.location?.description || props.cardData?.location?.description.trim().length === 0) ? null : (
      <div
        className="card-business-badge"
        style={{ backgroundColor: props.cardTheme.transparentColor }}
      >
        <CardLocation
          location={props.cardData.location}
          primaryColor={props.cardTheme.primaryColor}
          transparentColor={props.cardTheme.transparentColor}
        />
      </div>
    );

  return (
    <div className="card-business-badges-container">
      {industryView}
      {locationView}
    </div>
  );
};

export default CardBadges;
