import React, { Component } from "react";
import { connect } from "react-redux";
import { closeBackdropImageCropperModal } from "../../../../store/actions/modals/backdropImageCropperModal";
import { uploadBackdropImage } from "../../../../store/actions/card";

import CardFormBackdropImageCropper from "./CardFormBackdropImageCropper";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormBackdropImageCropperModal extends Component {
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

  onUploadBackdropImageClick = async () => {
    const cardId = this.state.cardId;
    this.props.uploadBackdropImage(this.state.blob, cardId);
    this.props.closeBackdropImageCropperModal();
  };

  render() {
    return (
      <div className="card-form-image-cropper-modal-wrapper">
        <div className="primary-light-bg card-form-image-cropper-modal-container">
          <CardFormBackdropImageCropper
            getBlob={this.getBlob}
            inputImg={this.props.inputImg}
          />
          <label
            onClick={this.onUploadBackdropImageClick}
            className="card-form-button"
          >
            <span className="card-form-button-text">Crop and Upload Image</span>
          </label>
          <buttom
            className="primary-color card-form-image-cropper-modal-button"
            onClick={() => this.props.closeBackdropImageCropperModal()}
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
    openModal: state.backdropImageCropperModal.openModal,
    inputImg: state.backdropImageCropperModal.inputImg,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBackdropImage: (reqImgData, cardId) =>
      dispatch(uploadBackdropImage(reqImgData, cardId)),
    closeBackdropImageCropperModal: () =>
      dispatch(closeBackdropImageCropperModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormBackdropImageCropperModal);
