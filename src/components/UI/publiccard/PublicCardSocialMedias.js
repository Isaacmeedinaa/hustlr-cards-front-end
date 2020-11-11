import React from "react";

import PublicCardPhoneNumber from "./PublicCardPhoneNumber";
import PublicCardEmail from "./PublicCardEmail";
import PublicCardFacebookLink from "./PublicCardFacebookLink";
import PublicCardInstagramLink from "./PublicCardInstagramLink";
import PublicCardTwitterLink from "./PublicCardTwitterLink";
import PublicCardSnapchatLink from "./PublicCardSnapchatLink";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardSocialMedias = (props) => {
  console.log(props);
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
      <PublicCardFacebookLink
        facebookLink={props.facebookLink}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
      <PublicCardInstagramLink
        instagramLink={props.instagramLink}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
      <PublicCardTwitterLink
        twitterLink={props.twitterLink}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
      <PublicCardSnapchatLink
        snapchatLink={props.snapchatLink}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
    </div>
  );
};

export default PublicCardSocialMedias;
