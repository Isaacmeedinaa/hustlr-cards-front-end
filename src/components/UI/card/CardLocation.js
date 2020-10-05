import React from "react";

import MdPin from "react-ionicons/lib/MdPin";

import "../../../constants/colors.css";
import "../UI.css";

const CardLocation = (props) => {
  if (!props.city || !props.state) {
    return null;
  }

  return (
    <div className="card-business-location-container">
      <i className="map marker alternate icon" style={{color: props.primaryColor}}></i>
      <p
        style={{ color: props.primaryColor }}
        className="card-business-location-text"
      >
        {props.city}, {props.state}
      </p>
    </div>
  );
};

export default CardLocation;
