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
    (!props.cardData.city || props.cardData.city.length === 0) &&
    (!props.cardData.state || props.cardData.state.length === 0) ? null : (
      <div
        className="card-business-badge"
        style={{ backgroundColor: props.cardTheme.transparentColor }}
      >
        <CardLocation
          city={props.cardData.city}
          state={props.cardData.state}
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
