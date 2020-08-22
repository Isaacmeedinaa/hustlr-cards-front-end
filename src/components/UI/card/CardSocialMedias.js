import React from "react";

import CardFacebookLink from "./CardFacebookLink";
import CardInstagramLink from "./CardInstagramLink";
import CardTwitterLink from "./CardTwitterLink";
import CardSnapchatLink from "./CardSnapchatLink";

import "../../../constants/colors.css";
import "../UI.css";

const CardSocialMedias = (props) => {
  if (
    !props.facebookLink &&
    !props.instagramLink &&
    !props.twitterLink &&
    !props.snapchatLink
  ) {
    return null;
  }

  return (
    <div className="card-business-social-media-links-container">
      <CardFacebookLink
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
        facebookLink={props.facebookLink}
      />
      <CardInstagramLink
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
        instagramLink={props.instagramLink}
      />
      <CardTwitterLink
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
        twitterLink={props.twitterLink}
      />
      <CardSnapchatLink
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
        snapchatLink={props.snapchatLink}
      />
    </div>
  );
};

export default CardSocialMedias;
