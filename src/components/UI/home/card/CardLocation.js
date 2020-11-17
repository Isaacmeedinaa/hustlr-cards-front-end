import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

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
      <FontAwesomeIcon 
        icon={faMapMarkerAlt}
        transform="down-4 left-5"
        style={{ color: props.primaryColor }}/>
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
