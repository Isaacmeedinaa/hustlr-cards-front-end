import React, { Component, useState } from "react";

import { Animated } from "react-animated-css";
import { connect, useSelector } from "react-redux";

import MdPin from "react-ionicons/lib/MdPin";
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
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-link-container"
    >
      <a
        href={"https://www.hustlr.cards/" + props.pathToCard}
        style={{ color: props.primaryColor }}
        className="card-business-link"
      >
        https://www.hustlr.cards/{props.pathToCard}
      </a>
    </div>
  );
};

const CardLocation = (props) => {
  if (!props.city || !props.state) {
    return null;
  }

  return (
    <div className="card-business-location-container">
      <div
        style={{ backgroundColor: props.transparentColor }}
        className="card-business-location-icon-container"
      >
        <MdPin
          className="card-business-contact-icon"
          fontSize="18px"
          color={props.primaryColor}
        />
      </div>
      <p
        style={{ color: props.primaryColor }}
        className="card-business-location-text"
      >
        {props.city}, {props.state}
      </p>
    </div>
  );
};

const CardIndustry = (props) => {
  if (!props.industry || props.industry.id === 1) {
    return null;
  }
  return (
    <h5
      style={{ color: props.primaryColor }}
      className="card-business-industry"
    >
      {props.industry.title}
    </h5>
  );
};

const CardServices = (props) => {
  if (!props.services) {
    return null;
  }
  return <h4 className="card-business-services">{props.services}</h4>;
};

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

const CardFacebookLink = (props) => {
  if (!props.facebookLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.facebookLink} target="_black">
        <LogoFacebook
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
        />
      </a>
    </div>
  );
};

const CardInstagramLink = (props) => {
  if (!props.instagramLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.instagramLink} target="_black">
        <LogoInstagram
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
        />
      </a>
    </div>
  );
};

const CardTwitterLink = (props) => {
  if (!props.twitterLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.twitterLink} target="_black">
        <LogoTwitter
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
        />
      </a>
    </div>
  );
};

const CardSnapchatLink = (props) => {
  if (!props.snapchatLink) {
    return null;
  }

  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-social-media-icon-container"
    >
      <a href={props.snapchatLink} target="_black">
        <LogoSnapchat
          className="card-business-social-media-icon"
          fontSize="28px"
          color={props.primaryColor}
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

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.loader) {
      return null;
    }

    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg card-wrapper">
          <div className="card-container">
            <CardLink
              pathToCard={this.props.cardData.pathToCard}
              primaryColor={this.props.cardTheme.primaryColor}
              transparentColor={this.props.cardTheme.transparentColor}
            />
            <div className="primary-color-bg card-business-img-container">
              <img
                className="card-business-img"
                src={this.props.cardData.imgUrl}
              />
            </div>
            <h1 className="card-business-name">{this.props.cardData.title}</h1>
            <CardLocation
              city={this.props.cardData.city}
              state={this.props.cardData.state}
              primaryColor={this.props.cardTheme.primaryColor}
              transparentColor={this.props.cardTheme.transparentColor}
            />
            <CardIndustry
              industry={this.props.cardData.industry}
              primaryColor={this.props.cardTheme.primaryColor}
              transparentColor={this.props.cardTheme.transparentColor}
            />
            <CardServices services={this.props.cardData.services} />
            <CardContactDetails
              primaryColor={this.props.cardTheme.primaryColor}
              transparentColor={this.props.cardTheme.transparentColor}
              phoneNumber={this.props.cardData.phoneNumber}
              email={this.props.cardData.email}
            />
            <CardSocialMedias
              primaryColor={this.props.cardTheme.primaryColor}
              transparentColor={this.props.cardTheme.transparentColor}
              facebookLink={this.props.cardData.facebookLink}
              instagramLink={this.props.cardData.instagramLink}
              twitterLink={this.props.cardData.twitterLink}
              snapchatLink={this.props.cardData.snapchatLink}
            />
          </div>
        </div>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    cardData: state.card.cardData,
    cardTheme: state.card.cardTheme,
    industries: state.industries,
  };
};

export default connect(mapStateToProps)(Card);
