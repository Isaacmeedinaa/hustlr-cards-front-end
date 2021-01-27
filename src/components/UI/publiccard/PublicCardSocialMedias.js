import React from "react";

import PublicCardPhoneNumber from "./PublicCardPhoneNumber";
import PublicCardEmail from "./PublicCardEmail";
import PublicCardSocialMediaLink from "./PublicCardSocialMediaLink";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardSocialMedias = (props) => {

  const renderSocialMediaLinks = () => {
    return props.links.map((link) => {
      return (
        <PublicCardSocialMediaLink 
          primaryColor={props.primaryColor}
          transparentColor={props.transparentColor}
          link={link}
          key={link.id}
        />
      )
    })
  }

  return (
    <div className="public-card-social-media-container">
      <PublicCardPhoneNumber
        phoneNumber={props.phoneNumber}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
      <PublicCardEmail
        email={props.email}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
      {renderSocialMediaLinks()}
    </div>
  );
};

export default PublicCardSocialMedias;
