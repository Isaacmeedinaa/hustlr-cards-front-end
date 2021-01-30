import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PublicCardImage from "./PublicCardImage";
import PublicCardBackdropImage from "./PublicCardBackdropImage";
import PublicCardName from "./PublicCardName";
import PublicCardSocialMedias from "./PublicCardSocialMedias";
import PublicCardBadges from "./PublicCardBadges";
import PublicCardDescription from "./PublicCardDescription";
import PublicCardGallerySlider from "./PublicCardGallerySlider";
import PublicCardOfferings from "./PublicCardOfferings";
import PublicCardPaymentMethods from "./PublicCardPaymentMethods";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

class PublicCard extends Component {
  render() {
    if (!this.props.publicCard) {
      return null;
    }

    return (
      <Fragment>
        <div className="primary-light-bg public-card">
          <div className="public-card-container">
            <PublicCardBackdropImage
              backdropImgUrl={this.props.publicCard.backdropImgUrl}
            />
            <PublicCardImage
              imgUrl={this.props.publicCard.imgUrl}
              backdropImgUrl={this.props.publicCard.backdropImgUrl}
            />
            <PublicCardName title={this.props.publicCard.title} profileImgUrl={this.props.publicCard.imgUrl}/>
            <PublicCardSocialMedias
              phoneNumber={this.props.publicCard.phoneNumber}
              email={this.props.publicCard.email}
              links={this.props.publicCard.links}
              primaryColor={this.props.publicCard.primaryColor}
              transparentColor={this.props.publicCard.transparentColor}
            />
            <PublicCardBadges
              industry={this.props.publicCard.industry}
              location={this.props.publicCard.location}
              primaryColor={this.props.publicCard.primaryColor}
              transparentColor={this.props.publicCard.transparentColor}
            />
            <PublicCardDescription
              description={this.props.publicCard.description}
            />
            <PublicCardGallerySlider
              photos={this.props.publicCard.photos}
              setImagesData={this.props.setImagesData}
            />
            <PublicCardOfferings
              offerings={this.props.publicCard.offerings}
              primaryColor={this.props.publicCard.primaryColor}
              transparentColor={this.props.publicCard.transparentColor}
              setImagesData={this.props.setImagesData}
            />
            <PublicCardPaymentMethods
              paymentMethods={this.props.publicCard.paymentMethods}
              primaryColor={this.props.publicCard.primaryColor}
              transparentColor={this.props.publicCard.transparentColor}
            />
            <div className="public-card-logo-container">
              <Link className="primary-color" to="/">
                <h2 className="primary-color-hover">hustlr.cards</h2>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    publicCard: state.publicCard,
  };
};

export default connect(mapStateToProps)(PublicCard);
