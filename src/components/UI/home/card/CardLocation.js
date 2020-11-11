import React from "react";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardLocation = (props) => {
  if (!props.city && !props.state) {
    return null;
  }

  const stateView = !props.state
    ? null
    : !props.city
    ? props.state
    : ", " + props.state;

  return (
    <div className="card-business-location-container">
      <i
        className="map marker alternate icon"
        style={{ color: props.primaryColor }}
      ></i>
      <p
        style={{ color: props.primaryColor }}
        className="card-business-location-text"
      >
        {props.city} {stateView}
      </p>
    </div>
  );
};

export default CardLocation;
