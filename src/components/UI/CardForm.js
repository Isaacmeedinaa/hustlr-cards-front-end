import React, { Component } from "react";

import { Animated } from "react-animated-css";

import { connect } from "react-redux";
import { uploadBusinessProfilePicture } from "../../store/actions/card";
import { hideNotification as hideCardSavedNotification } from '../../store/actions/notifications/cardSavedNotifications';
import { hideOfferingCreatedNotification, hideOfferingSavedNotification, hideOfferingDeletedNotification } from '../../store/actions/notifications/offeringNotifications';
import { hideGalleryImageUploadedNotification, hideGalleryImageDeletedNotification } from '../../store/actions/notifications/galleryNotifications';
import { hideProfileImageUploadedNotification, hideProfileImageDeletedNotification } from '../../store/actions/notifications/profileImageNotifications';

import CardFormImageSelector from "./cardform/CardFormImageSelector";
import CardFormTitleInput from "./cardform/CardFormTitleInput";
import CardFormLocationInputs from "./cardform/CardFormLocationInputs";
import CardFormIndustrySelect from "./cardform/CardFormIndustrySelect";
import CardFormDescriptionInput from "./cardform/CardFormDescriptionInput";
import CardFormAddOfferingButton from "./cardform/CardFormAddOfferingButton";
import CardFormOfferingInputs from "./cardform/CardFormOfferingInputs";
import CardFormContactInputs from "./cardform/CardFormContactInputs";
import CardFormShowSocialMediasButton from "./cardform/CardFormShowSocialMediasButton";
import CardFormSocialMediaInputs from "./cardform/CardFormSocialMediaInputs";
import CardFormAddImageButton from "./cardform/CardFormAddImageButton";
import CardFormGallerySlider from "./cardform/CardFormGallerySlider";
import CardFormCardPathInput from "./cardform/CardFormCardPathInput";

import $ from 'jquery';

import "../../constants/colors.css";
import "./UI.css";

class CardForm extends Component {
  state = {
    isHidden: true,
    deleteModalShown: false,
    offerings: []
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      offerings: nextProps.cardData.offerings,
    });
  }

  componentDidUpdate() {
    if (this.props.cardSavedNotification.show) {
      this.displayNotification(this.props.cardSavedNotification.success, this.props.cardSavedNotification.message);
      this.props.hideCardSavedNotification();
    }

    if (this.props.offeringNotifications.created.show) {
      this.displayNotification(this.props.offeringNotifications.created.success, this.props.offeringNotifications.created.message);
      this.props.hideOfferingCreatedNotification();
    }

    if (this.props.offeringNotifications.saved.show) {
      this.displayNotification(this.props.offeringNotifications.saved.success, this.props.offeringNotifications.saved.message);
      this.props.hideOfferingSavedNotification();
    }

    if (this.props.offeringNotifications.deleted.show) {
      this.displayNotification(this.props.offeringNotifications.deleted.success, this.props.offeringNotifications.deleted.message);
      this.props.hideOfferingDeletedNotification();
    }

    if (this.props.galleryNotifications.uploaded.show) {
      this.displayNotification(this.props.galleryNotifications.uploaded.success, this.props.galleryNotifications.uploaded.message);
      this.props.hideGalleryImageUploadedNotification();
    }

    if (this.props.galleryNotifications.deleted.show) {
      this.displayNotification(this.props.galleryNotifications.deleted.success, this.props.galleryNotifications.deleted.message);
      this.props.hideGalleryImageDeletedNotification();
    }

    if (this.props.profileImageNotifications.uploaded.show) {
      this.displayNotification(this.props.profileImageNotifications.uploaded.success, this.props.profileImageNotifications.uploaded.message);
      this.props.hideProfileImageUploadedNotification();
    }

    if (this.props.profileImageNotifications.deleted.show) {
      this.displayNotification(this.props.profileImageNotifications.deleted.success, this.props.profileImageNotifications.deleted.message);
      this.props.hideProfileImageDeletedNotification();
    }
  }

  displayNotification(success, message) {
    $('body').toast({
      class: success ? 'success' : 'error',
      position: 'bottom center',
      message: message,
      showIcon: success ? 'check circle' : 'exclamation',
      displayTime: 3000,
      transition: {
        showMethod   : 'fade',
        showDuration : 1000,
        hideMethod   : 'fade',
        hideDuration : 1000
      }
    });
  }

  handleImageSelectorClick = (event) => {
    const reqImgData = event.target.files[0];
    const cardId = this.state.id;

    let reader = new FileReader();
    reader.readAsDataURL(reqImgData);

    this.props.uploadBusinessProfilePicture(reqImgData, cardId);
  };

  showSocialMediaLinks = async () => {
    await this.setState((prevState) => {
      return {
        isHidden: !prevState.isHidden,
      };
    });
  };

  renderOfferingsInputs = () => {
    return this.state.offerings.map((offering, index) => {
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
        />
      );
    });
  };

  render() {
    if (this.props.cardLoader) {
      return null;
    }

    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg card-form-wrapper">
          <div className="card-form-container">
            {this.props.cardErrors.map((error, index) => (
              <p key={index} className="primary-color card-form-error-text">
                {error.message}
              </p>
            ))}
            <CardFormImageSelector />
            <CardFormTitleInput />
            <CardFormLocationInputs />
            <CardFormIndustrySelect />
            <CardFormDescriptionInput />
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
            <CardFormCardPathInput />
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
    profileImageNotifications: state.profileImageNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBusinessProfilePicture: (imgData, cardId) =>
      dispatch(uploadBusinessProfilePicture(imgData, cardId)),
    hideCardSavedNotification: () => dispatch(hideCardSavedNotification()),
    hideOfferingCreatedNotification: () => dispatch(hideOfferingCreatedNotification()),
    hideOfferingSavedNotification: () => dispatch(hideOfferingSavedNotification()),
    hideOfferingDeletedNotification: () => dispatch(hideOfferingDeletedNotification()),
    hideGalleryImageUploadedNotification: () => dispatch(hideGalleryImageUploadedNotification()),
    hideGalleryImageDeletedNotification: () => dispatch(hideGalleryImageDeletedNotification()),
    hideProfileImageUploadedNotification: () => dispatch(hideProfileImageUploadedNotification()),
    hideProfileImageDeletedNotification: () => dispatch(hideProfileImageDeletedNotification())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
