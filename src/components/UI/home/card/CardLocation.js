import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardLocation = (props) => {
  if (!props.location?.description || !props.location?.description.trim().length === 0) {
    return null;
  }

  

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
        {props.location.description}
      </p>
    </div>
  );
};

export default CardLocation;
