import React, { Component } from "react";

import { connect } from "react-redux";
import { setCardSocialMediaLinks } from "../../../store/actions/card";

import { Animated } from "react-animated-css";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormSocialMediaInputs extends Component {
  state = {
    facebookLink: this.props.facebookLink,
    instagramLink: this.props.instagramLink,
    snapchatLink: this.props.snapchatLink,
    twitterLink: this.props.twitterLink,
  };

  onCardSocialMediaLinkChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });

    this.props.setCardSocialMediaLinks(
      this.state.facebookLink,
      this.state.instagramLink,
      this.state.twitterLink,
      this.state.snapchatLink
    );
  };

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
            value={this.state.facebookLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
          <input
            className="card-form-social-media-input"
            name="instagramLink"
            placeholder="https://www.instagram.com/your_username"
            value={this.state.instagramLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
          <input
            className="card-form-social-media-input"
            name="twitterLink"
            placeholder="https://www.twitter.com/your_username"
            value={this.state.twitterLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
          <input
            className="card-form-social-media-input"
            name="snapchatLink"
            placeholder="https://www.snapchat.com/add/your_username"
            value={this.state.snapchatLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
        </div>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    facebookLink: state.card.cardData.facebookLink,
    instagramLink: state.card.cardData.instagramLink,
    snapchatLink: state.card.cardData.snapchatLink,
    twitterLink: state.card.cardData.twitterLink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardSocialMediaLinks: (
      facebookLink,
      instagramLink,
      twitterLink,
      snapchatLink
    ) =>
      dispatch(
        setCardSocialMediaLinks(
          facebookLink,
          instagramLink,
          twitterLink,
          snapchatLink
        )
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormSocialMediaInputs);
