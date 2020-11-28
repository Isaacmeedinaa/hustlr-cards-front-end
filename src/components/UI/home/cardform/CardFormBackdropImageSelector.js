import React, { Component } from "react";
import { connect } from "react-redux";

import {
  uploadBackdropImage,
  deleteBackdropImage,
} from "../../../../store/actions/card";

import Loader from "react-loader-spinner";

import MdCloudUpload from "react-ionicons/lib/MdCloudUpload";
import MdCloseCircle from "react-ionicons/lib/MdCloseCircle";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormBackdropImageSelector extends Component {
  onBackdropImageChangeHandler = (event) => {
    const reqImgData = event.target.files[0];
    const cardId = this.props.cardId;

    let reader = new FileReader();
    if (reqImgData) {
      reader.readAsDataURL(reqImgData);
      this.props.uploadBackdropImage(reqImgData, cardId);
    }
  };

  render() {

    const deleteBackdropImageView = 
      (!this.props.backdropImgUrl || this.props.backdropImgUrl === "" ? null :
        <label
          className="primary-color card-form-backdrop-image-btn"
          onClick={() =>
            this.props.deleteBackdropImage(this.props.backdropImgId)
          }
        >
          <MdCloseCircle color="#2ecc71" size={16} />
        </label>);

    return (
      <div
        className="card-form-backdrop-image-container"
        style={{
          flexDirection: this.props.cardBackdropImageLoader ? "row" : "column",
          backgroundImage: this.props.cardBackdropImageLoader
            ? null
            : `url(${this.props.backdropImgUrl})`,
        }}
      >
        {this.props.cardBackdropImageLoader ? (
          <div className="card-form-backdrop-image-spinner-loader-container">
            <Loader type="TailSpin" color="#2ecc71" width={50} height={50} />
          </div>
        ) : (
          <div className="card-form-backdrop-image-btns-container">
            <label
              className="primary-color card-form-backdrop-image-btn"
              htmlFor="backdropImgSelector"
            >
              <MdCloudUpload color="#2ecc71" size={16} />
            </label>
            <input
              className="card-form-file-button"
              id="backdropImgSelector"
              onChange={this.onBackdropImageChangeHandler}
              type="file"
              accept="image/x-png,image/jpeg"
            />
            {deleteBackdropImageView}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardId: state.card.cardData.id,
    backdropImgUrl: state.card.cardData.backdropImgUrl,
    backdropImgId: state.card.cardData.backdropImgId,
    cardBackdropImageLoader: state.cardBackdropImageLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBackdropImage: (imgReqData, cardId) =>
      dispatch(uploadBackdropImage(imgReqData, cardId)),
    deleteBackdropImage: (imgId) => dispatch(deleteBackdropImage(imgId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormBackdropImageSelector);
