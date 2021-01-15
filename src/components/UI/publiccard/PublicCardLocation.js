import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardLocation = (props) => {
  if (
    !props.location ||
    !props.location.description ||
    props.location.description === ""
  ) {
    return null;
  }

  return (
    <div className="public-card-location-container">
      <FontAwesomeIcon
        icon={faMapMarkerAlt}
        transform="down-4 left-5"
        style={{ color: props.primaryColor }}
      />
      <p
        style={{ color: props.primaryColor }}
        className="public-card-location-text"
      >
        {props.location.description}
      </p>
    </div>
  );
};

export default PublicCardLocation;
