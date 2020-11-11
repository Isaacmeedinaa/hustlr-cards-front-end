import React from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardLocation = (props) => {
  if (!props.city || !props.state || props.city === "" || props.state === "") {
    return null;
  }

  const stateView = !props.state
    ? null
    : !props.city
    ? props.state
    : ", " + props.state;

  return (
    <div className="public-card-location-container">
      <i
        className="map marker alternate icon"
        style={{ color: props.primaryColor }}
      ></i>
      <p
        style={{ color: props.primaryColor }}
        className="public-card-location-text"
      >
        {props.city} {stateView}
      </p>
    </div>
  );
};

export default PublicCardLocation;
