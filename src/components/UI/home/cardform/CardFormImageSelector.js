import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  uploadBusinessProfilePicture,
  deleteBusinessImage,
} from "../../../../store/actions/card";

import Loader from "react-loader-spinner";

import $ from "jquery";

import CardFormImageCropper from "./CardFormImageCropper";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormImageSelector extends Component {
  state = {
    imgUrl: this.props.imgUrl,
    cardId: this.props.cardId,
    blob: null,
    inputImg: "",
  };

  componentDidUpdate(prevProps) {
    if (prevProps.imgUrl !== this.props.imgUrl) {
      this.setState({
        imgUrl: this.props.imgUrl,
      });
    }
  }

  componentDidMount() {
    $(".ui.dropdown").dropdown();
  }

  getBlob = async (blob) => {
    await this.setState({ blob: blob });
  };

  onImageChangeHandler = (event) => {
    const reqImgData = event.target.files[0];

    let reader = new FileReader();

    reader.addEventListener(
      "load",
      async () => {
        await this.setState({ inputImg: reader.result });
      },
      false
    );

    if (reqImgData) {
      reader.readAsDataURL(reqImgData);
    }
  };

  onUploadImageClick = async () => {
    const cardId = this.state.cardId;

    this.props.uploadBusinessProfilePicture(this.state.blob, cardId);
    await this.setState({ inputImg: "" });
  };

  render() {
    return (
      <Fragment>
        <div
          className="primary-color-bg card-form-business-img-container"
          style={{ backgroundImage: `url(${this.props.imgUrl})` }}
        >
          {this.props.cardImageLoader ? (
            <Loader type="TailSpin" color="#fff" width={50} height={50} />
          ) : null}
        </div>
        <div className="ui floating dropdown button card-form-button primary-font">
          <span className="card-form-button-text">Edit Profile Photo</span>
          <div className="menu" id="card-form-edit-image-dropdown">
            <div className="item">
              <i
                className="cloud upload alternate icon"
                style={{ color: "#2ecc71" }}
              ></i>
              Upload New Profile Photo
              <input
                className="file-upload"
                id="businessProfileImgSelector"
                onChange={this.onImageChangeHandler}
                type="file"
                accept="image/x-png,image/jpeg"
              />
            </div>
            {!this.state.imgUrl || this.state.imgUrl === "" ? null : (
              <div
                className="item"
                onClick={() => this.props.deleteBusinessImage(this.props.imgId)}
              >
                <i className="delete icon" style={{ color: "#2ecc71" }}></i>{" "}
                Remove Current Profile Photo
              </div>
            )}
          </div>
        </div>
        {this.state.inputImg && (
          <Fragment>
            <CardFormImageCropper
              getBlob={this.getBlob}
              inputImg={this.state.inputImg}
            />
            <label
              onClick={this.onUploadImageClick}
              className="card-form-button"
            >
              <span className="card-form-button-text">
                Crop and Upload Image
              </span>
            </label>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imgUrl: state.card.cardData.imgUrl,
    imgId: state.card.cardData.imgId,
    cardId: state.card.cardData.id,
    cardImageLoader: state.cardImageLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBusinessProfilePicture: (imgData, cardId) =>
      dispatch(uploadBusinessProfilePicture(imgData, cardId)),
    deleteBusinessImage: (imgId) => dispatch(deleteBusinessImage(imgId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormImageSelector);
