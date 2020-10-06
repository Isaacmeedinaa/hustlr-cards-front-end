import React, { Fragment } from "react";

import CardFacebookLink from "./CardFacebookLink";
import CardInstagramLink from "./CardInstagramLink";
import CardTwitterLink from "./CardTwitterLink";
import CardSnapchatLink from "./CardSnapchatLink";
import CardPhoneNumber from "./CardPhoneNumber";
import CardEmail from "./CardEmail";

import "../../../constants/colors.css";
import "../UI.css";

const CardSocialMedias = (props) => {
  if (
    !props.facebookLink &&
    !props.instagramLink &&
    !props.twitterLink &&
    !props.snapchatLink &&
    !props.email &&
    !props.phoneNumber
  ) {
    return null;
  }

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default CardSocialMedias;
