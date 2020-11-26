import React, { Component } from "react";

import { Animated } from "react-animated-css";

import { connect } from "react-redux";
import { uploadBusinessProfilePicture } from "../../../../store/actions/card";
import { hideNotification as hideCardSavedNotification } from "../../../../store/actions/notifications/cardSavedNotifications";
import {
  hideOfferingCreatedNotification,
  hideOfferingSavedNotification,
  hideOfferingDeletedNotification,
} from "../../../../store/actions/notifications/offeringNotifications";
import {
  hideGalleryImageUploadedNotification,
  hideGalleryImageDeletedNotification,
} from "../../../../store/actions/notifications/galleryNotifications";
import {
  hideProfileImageUploadedNotification,
  hideProfileImageDeletedNotification,
} from "../../../../store/actions/notifications/profileImageNotifications";
import {
  hideBackdropImageUploadedNotification,
  hideBackdropImageDeletedNotification,
} from "../../../../store/actions/notifications/backdropImageNotifications";

import CardFormBackdropImageSelector from "./CardFormBackdropImageSelector";
import CardFormImageSelector from "./CardFormImageSelector";
import CardFormTitleInput from "./CardFormTitleInput";
import CardFormLocationInputs from "./CardFormLocationInputs";
import CardFormIndustrySelect from "./CardFormIndustrySelect";
import CardFormDescriptionInput from "./CardFormDescriptionInput";
import CardFormAddOfferingButton from "./CardFormAddOfferingButton";
import CardFormOfferingInputs from "./CardFormOfferingInputs";
import CardFormContactInputs from "./CardFormContactInputs";
import CardFormShowSocialMediasButton from "./CardFormShowSocialMediasButton";
import CardFormSocialMediaInputs from "./CardFormSocialMediaInputs";
import CardFormAddImageButton from "./CardFormAddImageButton";
import CardFormGallerySlider from "./CardFormGallerySlider";
import CardFormCardPathInput from "./CardFormCardPathInput";

import { showToast } from "../../Toasts";

import "../../../../constants/colors.css";
import "./CardFormUI.css";
import { hideOfferingImageDeletedNotification, hideOfferingImageUploadedNotification } from "../../../../store/actions/notifications/offeringImageNotifications";

class CardForm extends Component {
  state = {
    isHidden: true,
    deleteModalShown: false,
    openOfferingId: null
  };

  componentDidUpdate() {
    if (this.props.cardSavedNotification.show) {
      this.displayNotification(
        this.props.cardSavedNotification.success,
        this.props.cardSavedNotification.message
      );
      this.props.hideCardSavedNotification();
    }

    if (this.props.offeringNotifications.created.show) {
      // Only show failures
      if (!this.props.offeringNotifications.created.success) {
        this.displayNotification(
          this.props.offeringNotifications.created.success,
          this.props.offeringNotifications.created.message
        );
      }
      // Let CardFormOfferingIput component hide the notification because it has to scroll to it
    }

    if (this.props.offeringNotifications.saved.show) {
      this.displayNotification(
        this.props.offeringNotifications.saved.success,
        this.props.offeringNotifications.saved.message
      );
      this.props.hideOfferingSavedNotification();
    }

    if (this.props.offeringNotifications.deleted.show) {
      this.displayNotification(
        this.props.offeringNotifications.deleted.success,
        this.props.offeringNotifications.deleted.message
      );
      this.props.hideOfferingDeletedNotification();
    }

    if (this.props.galleryNotifications.uploaded.show) {
      this.displayNotification(
        this.props.galleryNotifications.uploaded.success,
        this.props.galleryNotifications.uploaded.message
      );
      this.props.hideGalleryImageUploadedNotification();
    }

    if (this.props.galleryNotifications.deleted.show) {
      this.displayNotification(
        this.props.galleryNotifications.deleted.success,
        this.props.galleryNotifications.deleted.message
      );
      this.props.hideGalleryImageDeletedNotification();
    }

    if (this.props.profileImageNotifications.uploaded.show) {
      this.displayNotification(
        this.props.profileImageNotifications.uploaded.success,
        this.props.profileImageNotifications.uploaded.message
      );
      this.props.hideProfileImageUploadedNotification();
    }

    if (this.props.profileImageNotifications.deleted.show) {
      this.displayNotification(
        this.props.profileImageNotifications.deleted.success,
        this.props.profileImageNotifications.deleted.message
      );
      this.props.hideProfileImageDeletedNotification();
    }

    if (this.props.backdropImageNotifications.uploaded.show) {
      this.displayNotification(
        this.props.backdropImageNotifications.uploaded.success,
        this.props.backdropImageNotifications.uploaded.message
      );
      this.props.hideBackdropImageUploadedNotification();
    }

    if (this.props.backdropImageNotifications.deleted.show) {
      this.displayNotification(
        this.props.backdropImageNotifications.deleted.success,
        this.props.backdropImageNotifications.deleted.message
      );
      this.props.hideBackdropImageDeletedNotification();
    }

    if (this.props.offeringImageNotifications.uploaded.show) {
      this.displayNotification(
        this.props.offeringImageNotifications.uploaded.success,
        this.props.offeringImageNotifications.uploaded.message
      );
      this.props.hideOfferingImageUploadedNotification();
    }

    if (this.props.offeringImageNotifications.deleted.show) {
      this.displayNotification(
        this.props.offeringImageNotifications.deleted.success,
        this.props.offeringImageNotifications.deleted.message
      );
      this.props.hideOfferingImageDeletedNotification();
    }
  }

  displayNotification(success, message) {
    
    showToast(success, message);

    if (this.props.cardErrors.length > 0 && !success) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }

  showSocialMediaLinks = async () => {
    await this.setState((prevState) => {
      return {
        isHidden: !prevState.isHidden,
      };
    });
  };

  renderOfferingsInputs = () => {
    return this.props.cardData.offerings.map((offering, index) => {
      return (
        <CardFormOfferingInputs
          key={offering.id}
          offering={offering}
          index={index}
          id={offering.id}
          title={offering.title}
          description={offering.description}
          price={offering.price}
          cardId={offering.cardId}
          offerings={this.props.cardData.offerings}
          photos={offering.photos}
          openOfferingHandler={this.openOfferingHandler}
          openOfferingId={this.state.openOfferingId}
        />
      );
    });
  };

  openOfferingHandler = async (offeringId) => {
    await this.setState({openOfferingId: offeringId});
  }

  render() {
    if (this.props.cardLoader) {
      return null;
    }

    return (
      <Animated animationIn="" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg card-form-wrapper">
          <div className="card-form-container">
            {this.props.cardErrors.map((error, index) => (
              <p key={index} className="primary-color card-form-error-text">
                {error.message}
              </p>
            ))}
            <CardFormBackdropImageSelector />
            <CardFormImageSelector />
            <CardFormTitleInput />
            <CardFormLocationInputs />
            <CardFormIndustrySelect />
            <CardFormDescriptionInput />
            <CardFormCardPathInput />
            <CardFormAddOfferingButton />
            {this.renderOfferingsInputs()}
            <CardFormContactInputs />
            <CardFormAddImageButton />
            <CardFormGallerySlider />
            <CardFormShowSocialMediasButton
              showSocialMediaLinks={this.showSocialMediaLinks}
              isHidden={this.state.isHidden}
            />
            {this.state.isHidden ? null : <CardFormSocialMediaInputs />}
          </div>
        </div>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardLoader: state.cardLoader,
    cardData: state.card.cardData,
    cardErrors: state.cardErrors,
    cardSavedNotification: state.cardSavedNotification,
    offeringNotifications: state.offeringNotifications,
    galleryNotifications: state.galleryNotifications,
    profileImageNotifications: state.profileImageNotifications,
    backdropImageNotifications: state.backdropImageNotifications,
    offeringImageNotifications: state.offeringImageNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBusinessProfilePicture: (imgData, cardId) =>
      dispatch(uploadBusinessProfilePicture(imgData, cardId)),
    hideCardSavedNotification: () => dispatch(hideCardSavedNotification()),
    hideOfferingCreatedNotification: () =>
      dispatch(hideOfferingCreatedNotification()),
    hideOfferingSavedNotification: () =>
      dispatch(hideOfferingSavedNotification()),
    hideOfferingDeletedNotification: () =>
      dispatch(hideOfferingDeletedNotification()),
    hideGalleryImageUploadedNotification: () =>
      dispatch(hideGalleryImageUploadedNotification()),
    hideGalleryImageDeletedNotification: () =>
      dispatch(hideGalleryImageDeletedNotification()),
    hideProfileImageUploadedNotification: () =>
      dispatch(hideProfileImageUploadedNotification()),
    hideProfileImageDeletedNotification: () =>
      dispatch(hideProfileImageDeletedNotification()),
    hideBackdropImageUploadedNotification: () =>
      dispatch(hideBackdropImageUploadedNotification()),
    hideBackdropImageDeletedNotification: () =>
      dispatch(hideBackdropImageDeletedNotification()),
    hideOfferingImageUploadedNotification: () =>
      dispatch(hideOfferingImageUploadedNotification()),
    hideOfferingImageDeletedNotification: () =>
      dispatch(hideOfferingImageDeletedNotification())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
