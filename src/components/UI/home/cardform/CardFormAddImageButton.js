import React, { Component, Fragment } from "react";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { uploadGalleryImage } from "../../../../store/actions/card";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormAddImageButton extends Component {
  state = {
    cardId: this.props.cardId,
  };

  onImageChangeHandler = (event) => {
    const reqImgData = event.target.files[0];
    const cardId = this.state.cardId;

    let reader = new FileReader();

    if (reqImgData) {
      reader.readAsDataURL(reqImgData);
      this.props.uploadGalleryImage(reqImgData, cardId);
      event.target.value = null;
    }
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
              + Upload New Gallery Photo
            </span>
          )}
        </label>
        <input
          className="card-form-file-button"
          id="businessGalleryImgSelector"
          onChange={this.onImageChangeHandler}
          type="file"
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadGalleryImage: (reqImgData, cardId) =>
      dispatch(uploadGalleryImage(reqImgData, cardId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormAddImageButton);
