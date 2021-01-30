import React from "react";

import CardPhoneNumber from "./CardPhoneNumber";
import CardEmail from "./CardEmail";
import CardSocialMediaLink from "./CardSocialMediaLink";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardSocialMedias = (props) => {

  const renderSocialMediaLinks = () => {
    return props.links.map((link) => {
      return (
        <CardSocialMediaLink 
          primaryColor={props.primaryColor}
          transparentColor={props.transparentColor}
          link={link}
          key={link.id}
        />
      )
    })
  }

  return (
    <div className="card-business-social-media-links-container">
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
      {renderSocialMediaLinks()}
    </div>
  );
};

export default CardSocialMedias;
