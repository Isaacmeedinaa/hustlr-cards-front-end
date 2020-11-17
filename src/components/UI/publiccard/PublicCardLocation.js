import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

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
      <FontAwesomeIcon 
        icon={faMapMarkerAlt}
        transform="down-4 left-5"
        style={{ color: props.primaryColor }}/>
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
