import React from "react";

import MdMail from "react-ionicons/lib/MdMail";

import "../../../constants/colors.css";
import "../UI.css";

const CardEmail = (props) => {
  if (!props.email) {
    return null;
  }

  return (
    <div
      className="card-business-contact-detail"
      id="cardBusinessContactDetailEmail"
    >
      <div
        style={{ backgroundColor: props.transparentColor }}
        className="card-business-contact-detail-icon-container"
      >
        <MdMail
          className="card-business-contact-icon"
          fontSize="18px"
          color={props.primaryColor}
        />
      </div>
      <a
        href={"mailto:" + props.email}
        style={{ color: props.primaryColor }}
        className="card-business-contact-text"
      >
        {props.email}
      </a>
    </div>
  );
};

export default CardEmail;
