import React, { Component, Fragment } from "react";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { uploadGalleryImages } from "../../../../store/actions/card";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormAddImageButton extends Component {
  state = {
    cardId: this.props.cardId,
  };

  onImageChangeHandler = (event) => {
    const cardId = this.state.cardId;
    const images = event.target.files;

    this.props.uploadGalleryImages(images, cardId);

    event.target.value = null;
  };

  render() {
    return (
      <Fragment>
        <label
          className="card-form-button card-form-file-label"
          htmlFor="businessGalleryImgSelector"
        >
          {this.props.cardGalleryImageLoader ? (
            <Loader type="TailSpin" color="#ffffff" width={15} height={15} />
          ) : (
            <span className="card-form-button-text">
              {this.props.galleryImagesProgress.progressing
                ? `Image ${this.props.galleryImagesProgress.currentGalleryImgCount} out of ${this.props.galleryImagesProgress.totalGalleryImgCount} uploaded`
                : "+ Upload New Gallery Photo"}
            </span>
          )}
        </label>
        <input
          className="card-form-file-button"
          id="businessGalleryImgSelector"
          onChange={this.onImageChangeHandler}
          type="file"
          multiple={true}
          accept="image/x-png,image/jpeg"
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardId: state.card.cardData.id,
    cardGalleryImageLoader: state.cardGalleryImageLoader,
    galleryImagesProgress: state.galleryImagesProgress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadGalleryImages: (images, cardId) =>
      dispatch(uploadGalleryImages(images, cardId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormAddImageButton);
