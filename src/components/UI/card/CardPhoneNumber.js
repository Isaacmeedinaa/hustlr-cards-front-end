import React from "react";

import MdCall from "react-ionicons/lib/MdCall";

import "../../../constants/colors.css";
import "../UI.css";

const CardPhoneNumber = (props) => {
  if (!props.phoneNumber) {
    return null;
  }

  return (
    <div className="card-business-contact-detail">
      <div
        style={{ backgroundColor: props.transparentColor }}
        className="card-business-contact-detail-icon-container"
      >
        <MdCall
          className="card-business-contact-icon"
          fontSize="18px"
          color={props.primaryColor}
        />
      </div>
      <a
        href={"tel:" + props.phoneNumber}
        style={{ color: props.primaryColor }}
        className="card-business-contact-text"
      >
        {props.phoneNumber}
      </a>
    </div>
  );
};

export default CardPhoneNumber;
