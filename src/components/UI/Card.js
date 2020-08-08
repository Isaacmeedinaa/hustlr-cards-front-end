import React, { Component, useState } from "react";

import { connect, useSelector } from "react-redux";

import MdCall from "react-ionicons/lib/MdCall";
import MdMail from "react-ionicons/lib/MdMail";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoSnapchat from "react-ionicons/lib/LogoSnapchat";

import "../../constants/colors.css";
import "./UI.css";

const CardLink = (props) => {
  return (
    <div className="card-business-link-container">
      <a
        href={"https://www.hustlr.cards/" + props.pathToCard}
        className="primary-color-hover card-business-link"
      >
        https://www.hustlr.cards/{props.pathToCard}
      </a>
    </div>
  );
};

const CardIndustry = (props) => {
  if (!props.industry) {
    return null;
  }
  return <h5 className="card-business-industry">{props.industry.name}</h5>;
};

const CardServices = (props) => {
  if (!props.services) {
    return null;
  }
  return <h4 className="card-business-services">{props.services}</h4>;
};

const CardPhoneNumber = (props) => {
  const [primaryColor, setPrimaryColor] = useState("#ff5349");

  if (!props.phoneNumber) {
    return null;
  }

  return (
    <div className="card-business-contact-detail">
      <div className="card-business-contact-detail-icon-container">
        <MdCall
          className="card-business-contact-icon"
          fontSize="18px"
          color={primaryColor}
        />
      </div>
      <a
        href={"tel:" + props.phoneNumber}
        className="primary-color-hover card-business-contact-text"
      >
        {props.phoneNumber}
      </a>
    </div>
  );
};

const CardEmail = (props) => {
  const [primaryColor, setPrimaryColor] = useState("#ff5349");

  if (!props.email) {
    return null;
  }

  return (
    <div
      className="card-business-contact-detail"
      id="cardBusinessContactDetailEmail"
    >
      <div className="card-business-contact-detail-icon-container">
        <MdMail
          className="card-business-contact-icon"
          fontSize="18px"
          color={primaryColor}
        />
      </div>
      <a
        href={"mailto:" + props.email}
        className="primary-color-hover card-business-contact-text"
      >
        {props.email}
      </a>
    </div>
  );
};

const CardContactDetails = (props) => {
  if (!props.phoneNumber && !props.email) {
    return null;
  }

  return (
    <div className="card-business-contact-details">
      <CardPhoneNumber phoneNumber={props.phoneNumber} />
      <CardEmail email={props.email} />
    </div>
  );
};

const CardFacebookLink = (props) => {
  const [primaryColor, setPrimaryColor] = useState("#ff5349");

  if (!props.facebookLink) {
    return null;
  }

  return (
    <div className="card-business-social-media-icon-container">
      <a href={props.facebookLink} target="_black">
        <LogoFacebook
          className="card-business-social-media-icon"
          fontSize="28px"
          color={primaryColor}
        />
      </a>
    </div>
  );
};

const CardInstagramLink = (props) => {
  const [primaryColor, setPrimaryColor] = useState("#ff5349");

  if (!props.instagramLink) {
    return null;
  }

  return (
    <div className="card-business-social-media-icon-container">
      <a href={props.instagramLink} target="_black">
        <LogoInstagram
          className="card-business-social-media-icon"
          fontSize="28px"
          color={primaryColor}
        />
      </a>
    </div>
  );
};

const CardTwitterLink = (props) => {
  const [primaryColor, setPrimaryColor] = useState("#ff5349");

  if (!props.twitterLink) {
    return null;
  }

  return (
    <div className="card-business-social-media-icon-container">
      <a href={props.twitterLink} target="_black">
        <LogoTwitter
          className="card-business-social-media-icon"
          fontSize="28px"
          color={primaryColor}
        />
      </a>
    </div>
  );
};

const CardSnapchatLink = (props) => {
  const [primaryColor, setPrimaryColor] = useState("#ff5349");

  if (!props.snapchatLink) {
    return null;
  }

  return (
    <div className="card-business-social-media-icon-container">
      <a href={props.snapchatLink} target="_black">
        <LogoSnapchat
          className="card-business-social-media-icon"
          fontSize="28px"
          color={primaryColor}
        />
      </a>
    </div>
  );
};

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
      <CardFacebookLink facebookLink={props.facebookLink} />
      <CardInstagramLink instagramLink={props.instagramLink} />
      <CardTwitterLink twitterLink={props.twitterLink} />
      <CardSnapchatLink snapchatLink={props.snapchatLink} />
    </div>
  );
};

class Card extends Component {
  render() {
    return (
      <div className="primary-light-bg card-wrapper">
        <div className="card-container">
          <CardLink pathToCard={this.props.card.pathToCard} />
          <div className="primary-color-bg card-business-img-container">
            <img className="card-business-img" src={this.props.card.imgUrl} />
          </div>
          <h1 className="card-business-name">{this.props.card.title}</h1>
          <CardIndustry industry={this.props.card.industry} />
          <CardServices services={this.props.card.services} />
          <CardContactDetails
            phoneNumber={this.props.card.phoneNumber}
            email={this.props.card.email}
          />
          <CardSocialMedias
            facebookLink={this.props.card.facebookLink}
            instagramLink={this.props.card.instagramLink}
            twitterLink={this.props.card.twitterLink}
            snapchatLink={this.props.card.snapchatLink}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.card,
    industries: state.industries,
  };
};

export default connect(mapStateToProps)(Card);
