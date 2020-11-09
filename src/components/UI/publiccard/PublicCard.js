import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import PublicCardImage from "./PublicCardImage";
import PublicCardBackdropImage from "./PublicCardBackdropImage";
import PublicCardName from "./PublicCardName";
import PublicCardSocialMedias from "./PublicCardSocialMedias";
import PublicCardBadges from "./PublicCardBadges";
import PublicCardDescription from "./PublicCardDescription";
import PublicCardGallerySlider from "./PublicCardGallerySlider";
import PublicCardOfferings from "./PublicCardOfferings";

import "../../../constants/colors.css";
import "../UI.css";

class PublicCard extends Component {
  render() {
    if (!this.props.publicCard) {
      return null;
    }

    return (
      <Fragment>
        {!this.props.publicCard.isPublic ? (
            <h1 className="private-card">This card is not public.</h1>
          ) : (
        <div className="primary-light-bg public-card">
            <div className="public-card-container">
              <PublicCardBackdropImage
                backdropImgUrl={this.props.publicCard.backdropImgUrl}
              />
              <PublicCardImage
                imgUrl={this.props.publicCard.imgUrl}
                backdropImgUrl={this.props.publicCard.backdropImgUrl}
              />
              <PublicCardName title={this.props.publicCard.title} />
              <PublicCardSocialMedias
                phoneNumber={this.props.publicCard.phoneNumber}
                email={this.props.publicCard.email}
                facebookLink={this.props.publicCard.facebookLink}
                instagramLink={this.props.publicCard.instagramLink}
                twitterLink={this.props.publicCard.twitterLink}
                snapchatLink={this.props.publicCard.snapchatLink}
                primaryColor={this.props.publicCard.primaryColor}
                transparentColor={this.props.publicCard.transparentColor}
              />
              <PublicCardBadges
                industry={this.props.publicCard.industry}
                city={this.props.publicCard.city}
                state={this.props.publicCard.state}
                primaryColor={this.props.publicCard.primaryColor}
                transparentColor={this.props.publicCard.transparentColor}
              />
              <PublicCardDescription
                description={this.props.publicCard.description}
              />
              <PublicCardGallerySlider photos={this.props.publicCard.photos} />
              <PublicCardOfferings
                offerings={this.props.publicCard.offerings}
                primaryColor={this.props.publicCard.primaryColor}
                transparentColor={this.props.publicCard.transparentColor}
              />
            </div>
        </div>)}
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
