import React, { Component } from "react";

import { connect } from "react-redux";

import CardBackdropImage from "./CardBackdropImage";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardOfferings from "./CardOfferings";
import CardGallerySlider from "./CardGallerySlider";
import CardSocialMedias from "./CardSocialMedias";
import CardLink from "./CardLink";
import CardBadges from "./CardBadges";

import "../../../../constants/colors.css";
import "./CardUI.css";

class Card extends Component {
  render() {
    if (this.props.cardLoader) {
      return null;
    }

    return (
      <div className="primary-light-bg card-wrapper">
        <div className="card-container">
          <CardLink
            pathToCard={this.props.cardData.pathToCard}
            primaryColor={this.props.cardTheme.primaryColor}
            transparentColor={this.props.cardTheme.transparentColor}
          />
          <CardBackdropImage
            backdropImgUrl={this.props.cardData.backdropImgUrl}
            cardBackdropImageLoader={this.props.cardBackdropImageLoader}
          />
          <CardImage
            imgUrl={this.props.cardData.imgUrl}
            backdropImgUrl={this.props.cardData.backdropImgUrl}
            cardImageLoader={this.props.cardImageLoader}
          />
          <CardTitle title={this.props.cardData.title} />
          <CardSocialMedias
            primaryColor={this.props.cardTheme.primaryColor}
            transparentColor={this.props.cardTheme.transparentColor}
            phoneNumber={this.props.cardData.phoneNumber}
            email={this.props.cardData.email}
            links={this.props.cardData.links}
          />
          <CardBadges
            cardData={this.props.cardData}
            cardTheme={this.props.cardTheme}
          />
          <CardDescription
            description={this.props.cardData.description}
            primaryColor={this.props.cardTheme.primaryColor}
          />
          <CardGallerySlider photos={this.props.cardData.photos} />
          <CardOfferings
            offerings={this.props.cardData.offerings}
            primaryColor={this.props.cardTheme.primaryColor}
            transparentColor={this.props.cardTheme.transparentColor}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardLoader: state.cardLoader,
    cardImageLoader: state.cardImageLoader,
    cardBackdropImageLoader: state.cardBackdropImageLoader,
    cardData: state.card.cardData,
    cardTheme: state.card.cardTheme,
    industries: state.industries,
  };
};

export default connect(mapStateToProps)(Card);
