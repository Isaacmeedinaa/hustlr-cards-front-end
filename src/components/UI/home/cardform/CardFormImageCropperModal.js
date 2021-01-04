import React, { Component } from "react";
import { connect } from "react-redux";
import { uploadBusinessProfilePicture } from "../../../../store/actions/card";
import { closeImageCropperModal } from "../../../../store/actions/modals/imageCropperModal";

import CardFormImageCropper from "./CardFormImageCropper";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormImageCropperModal extends Component {
  state = {
    cardId: this.props.cardId,
    blob: null,
  };

  componentDidMount() {
    if (this.props.openModal) {
      document.body.style.overflow = "hidden";
    }
  }

  componentWillUnmount() {
    document.body.style.overflow = "unset";
  }

  getBlob = async (blob) => {
    await this.setState({ blob: blob });
  };

  onUploadImageClick = async () => {
    const cardId = this.state.cardId;
    this.props.uploadBusinessProfilePicture(this.state.blob, cardId);
    this.props.closeImageCropperModal();
  };

  render() {
    return (
      <div className="card-form-image-cropper-modal-wrapper">
        <div className="primary-light-bg card-form-image-cropper-modal-container">
          <CardFormImageCropper
            getBlob={this.getBlob}
            inputImg={this.props.inputImg}
          />
          <label onClick={this.onUploadImageClick} className="card-form-button">
            <span className="card-form-button-text">Crop and Upload Image</span>
          </label>
          <buttom
            className="primary-color card-form-image-cropper-modal-button"
            onClick={() => this.props.closeImageCropperModal()}
          >
            Close
          </buttom>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardId: state.card.cardData.id,
    openModal: state.imageCropperModal.openModal,
    inputImg: state.imageCropperModal.inputImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBusinessProfilePicture: (reqImgData, cardId) =>
      dispatch(uploadBusinessProfilePicture(reqImgData, cardId)),
    closeImageCropperModal: () => dispatch(closeImageCropperModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormImageCropperModal);
