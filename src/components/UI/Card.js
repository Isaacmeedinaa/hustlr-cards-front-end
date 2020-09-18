import React, { Component } from "react";

import { Animated } from "react-animated-css";
import { connect } from "react-redux";

import CardLink from "./card/CardLink";
import CardImage from "./card/CardImage";
import CardTitle from "./card/CardTitle";
import CardLocation from "./card/CardLocation";
import CardIndustry from "./card/CardIndustry";
import CardDescription from "./card/CardDescription";
import CardOfferings from "./card/CardOfferings";
import CardContactDetails from "./card/CardContactDetails";
import CardSocialMedias from "./card/CardSocialMedias";

import "../../constants/colors.css";
import "./UI.css";

class Card extends Component {
  render() {
    if (this.props.cardLoader) {
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
            <CardImage
              imgUrl={this.props.cardData.imgUrl}
              cardImageLoader={this.props.cardImageLoader}
            />
            <CardTitle title={this.props.cardData.title} />
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
            <CardDescription description={this.props.cardData.description} />
            <CardOfferings
              offerings={this.props.cardData.offerings}
              primaryColor={this.props.cardTheme.primaryColor}
              transparentColor={this.props.cardTheme.transparentColor}
            />
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
    cardLoader: state.cardLoader,
    cardImageLoader: state.cardImageLoader,
    cardData: state.card.cardData,
    cardTheme: state.card.cardTheme,
    industries: state.industries,
  };
};

export default connect(mapStateToProps)(Card);
