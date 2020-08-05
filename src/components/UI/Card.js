import React, { Component } from "react";

import { connect } from "react-redux";

import MdCall from "react-ionicons/lib/MdCall";
import MdMail from "react-ionicons/lib/MdMail";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";
import LogoSnapchat from "react-ionicons/lib/LogoSnapchat";

import "../../constants/colors.css";
import "./UI.css";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      primary: "#ff5349",
    };
  }

  render() {
    return (
      <div className="primary-light-bg card-wrapper">
        <div className="card-container">
          <div className="primary-color-bg card-business-img"></div>
          <h1 className="card-business-name">
            {this.props.card.businessName === ""
              ? "Enter Business Name"
              : this.props.card.businessName}
          </h1>
          <h5 className="card-business-industry">
            {this.props.card.businessIndustry === ""
              ? "Select a Business Industry"
              : this.props.card.businessIndustry}
          </h5>
          <h4 className="card-business-services">
            {this.props.card.businessServices === ""
              ? "Enter Business Services"
              : this.props.card.businessServices}
          </h4>
          <div className="card-business-contact-details">
            <div className="card-business-contact-detail">
              <div className="card-business-contact-detail-icon-container">
                <MdCall
                  className="card-business-contact-icon"
                  fontSize="18px"
                  color={this.state.primary}
                />
              </div>
              <a
                href={"tel:" + this.props.card.businessPhoneNumber}
                className="primary-color-hover card-business-contact-text"
              >
                {this.props.card.businessPhoneNumber === ""
                  ? "Enter Phone Number"
                  : this.props.card.businessPhoneNumber}
              </a>
            </div>
            <div
              className="card-business-contact-detail"
              id="cardBusinessContactDetailEmail"
            >
              <div className="card-business-contact-detail-icon-container">
                <MdMail
                  className="card-business-contact-icon"
                  fontSize="18px"
                  color={this.state.primary}
                />
              </div>
              <a
                href={"mainto:" + this.props.card.businessEmail}
                className="primary-color-hover card-business-contact-text"
              >
                {this.props.card.businessEmail === ""
                  ? "Enter Email"
                  : this.props.card.businessEmail}
              </a>
            </div>
          </div>
          <div className="card-business-social-media-links-container">
            <div className="card-business-social-media-icon-container">
              <a href={this.props.card.businessFBLink} target="_black">
                <LogoFacebook
                  className="card-business-social-media-icon"
                  fontSize="28px"
                  color={this.state.primary}
                />
              </a>
            </div>
            <div className="card-business-social-media-icon-container">
              <a href={this.props.card.businessIGLink} target="_black">
                <LogoInstagram
                  className="card-business-social-media-icon"
                  fontSize="28px"
                  color={this.state.primary}
                />
              </a>
            </div>
            <div className="card-business-social-media-icon-container">
              <a href={this.props.card.businessTwitterLink} target="_black">
                <LogoTwitter
                  className="card-business-social-media-icon"
                  fontSize="28px"
                  color={this.state.primary}
                />
              </a>
            </div>
            <div className="card-business-social-media-icon-container">
              <a href={this.props.card.businessSCLink} target="_blank">
                <LogoSnapchat
                  className="card-business-social-media-icon"
                  fontSize="28px"
                  color={this.state.primary}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

export default connect(mapStateToProps)(Card);
