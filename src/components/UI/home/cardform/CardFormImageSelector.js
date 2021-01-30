import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteBusinessImage } from "../../../../store/actions/card";
import { openImageCropperModal } from "../../../../store/actions/modals/imageCropperModal";
import { addWidthToImgUrl } from "../../../../services/ImgUrlParser";

import Loader from "react-loader-spinner";

import $ from "jquery";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormImageSelector extends Component {
  state = {
    imgUrl: this.props.imgUrl,
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

  onImageChangeHandler = (event) => {
    const reqImgData = event.target.files[0];

    let reader = new FileReader();

    reader.addEventListener(
      "load",
      () => {
        let inputImg = reader.result;
        this.props.setInputImg(inputImg);
        this.props.openImageCropperModal();
      },
      false
    );

    if (reqImgData) {
      reader.readAsDataURL(reqImgData);
      event.target.value = null;
    }
  };

  render() {
    console.log(addWidthToImgUrl(this.state.imgUrl,320));
    return (
      <Fragment>
        {
          !this.state.imgUrl || this.state.imgUrl === '' ? 
            <div className="primary-color-bg card-form-business-img-container"></div>
            :
            <img
            className="primary-color-bg card-form-business-img-container"
            alt="img"
            srcSet={`${addWidthToImgUrl(
              this.state.imgUrl,
              320
            )} 320w, ${addWidthToImgUrl(
              this.state.imgUrl,
              640
            )} 640w, ${addWidthToImgUrl(this.state.imgUrl, 1280)} 1280w`}
            sizes={"130px"}
          />
        }
        <div className="ui floating dropdown button card-form-button primary-font">
          <span className="card-form-button-text">
            {this.props.cardImageLoader ? (
              <Loader type="TailSpin" color="#ffff" width={22} height={22} />
            ) : "Edit Profile Photo"}
            </span>
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
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imgUrl: state.card.cardData.imgUrl,
    imgId: state.card.cardData.imgId,
    cardImageLoader: state.cardImageLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBusinessImage: (imgId) => dispatch(deleteBusinessImage(imgId)),
    openImageCropperModal: () => dispatch(openImageCropperModal()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormImageSelector);
