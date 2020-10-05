import React, { Component } from "react";

import { Animated } from "react-animated-css";
import { connect } from "react-redux";

import CardImage from "./card/CardImage";
import CardTitle from "./card/CardTitle";
import CardLocation from "./card/CardLocation";
import CardIndustry from "./card/CardIndustry";
import CardDescription from "./card/CardDescription";
import CardOfferings from "./card/CardOfferings";
import CardGallerySlider from "./card/CardGallerySlider";
import CardSocialMedias from "./card/CardSocialMedias";
import '../../../node_modules/html5-device-mockups/dist/device-mockups.css'

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
              <CardImage
                imgUrl={this.props.cardData.imgUrl}
                cardImageLoader={this.props.cardImageLoader}
              />
              <CardTitle title={this.props.cardData.title} />
              <div className="flex-container">
                <div style={{backgroundColor: this.props.cardTheme.transparentColor}}>
                  <CardIndustry
                    industry={this.props.cardData.industry}
                    primaryColor={this.props.cardTheme.primaryColor}
                    transparentColor={this.props.cardTheme.transparentColor}
                />
                </div>
                <div style={{backgroundColor: this.props.cardTheme.transparentColor}}>
                  <CardLocation
                    city={this.props.cardData.city}
                    state={this.props.cardData.state}
                    primaryColor={this.props.cardTheme.primaryColor}
                    transparentColor={this.props.cardTheme.transparentColor}
                  />
                </div>
              </div>
              <CardSocialMedias
                primaryColor={this.props.cardTheme.primaryColor}
                transparentColor={this.props.cardTheme.transparentColor}
                phoneNumber={this.props.cardData.phoneNumber}
                email={this.props.cardData.email}
                facebookLink={this.props.cardData.facebookLink}
                instagramLink={this.props.cardData.instagramLink}
                twitterLink={this.props.cardData.twitterLink}
                snapchatLink={this.props.cardData.snapchatLink}
              />
              <CardDescription description={this.props.cardData.description} />
              <CardGallerySlider photos={this.props.cardData.photos} />
              <CardOfferings
                offerings={this.props.cardData.offerings}
                primaryColor={this.props.cardTheme.primaryColor}
                transparentColor={this.props.cardTheme.transparentColor}
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
