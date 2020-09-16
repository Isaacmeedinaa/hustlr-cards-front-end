import React, { Component } from "react";

import { connect } from "react-redux";

import { Animated } from "react-animated-css";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormSocialMediaInputs extends Component {
  render() {
    return (
      <Animated
        className="card-form-social-media-inputs-animation-wrapper"
        animationIn="bounceIn"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="card-form-social-media-inputs-container">
          <input
            className="card-form-social-media-input"
            name="facebookLink"
            placeholder="https://www.facebook.com/your_username"
            value={this.props.facebookLink}
            onChange={(event) => this.props.cardFormInputChangeHandler(event)}
          />
          <input
            className="card-form-social-media-input"
            name="instagramLink"
            placeholder="https://www.instagram.com/your_username"
            value={this.props.instagramLink}
            onChange={(event) => this.props.cardFormInputChangeHandler(event)}
          />
          <input
            className="card-form-social-media-input"
            name="twitterLink"
            placeholder="https://www.twitter.com/your_username"
            value={this.props.twitterLink}
            onChange={(event) => this.props.cardFormInputChangeHandler(event)}
          />
          <input
            className="card-form-social-media-input"
            name="snapchatLink"
            placeholder="https://www.snapchat.com/add/your_username"
            value={this.props.snapchatLink}
            onChange={(event) => this.props.cardFormInputChangeHandler(event)}
          />
        </div>
      </Animated>
    );
  }
}

export default CardFormSocialMediaInputs;
