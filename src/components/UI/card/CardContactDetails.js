import React from "react";

import CardPhoneNumber from "./CardPhoneNumber";
import CardEmail from "./CardEmail";

import "../../../constants/colors.css";
import "../UI.css";

const CardContactDetails = (props) => {
  if (!props.phoneNumber && !props.email) {
    return null;
  }

  return (
    <div className="card-business-contact-details">
      <CardPhoneNumber
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
        phoneNumber={props.phoneNumber}
      />
      <CardEmail
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
        email={props.email}
      />
    </div>
  );
};
export default CardContactDetails;
