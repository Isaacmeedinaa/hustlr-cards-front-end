import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import {
  uploadBusinessProfilePicture,
  deleteBusinessImage,
} from "../../../store/actions/card";

import Loader from "react-loader-spinner";

import $ from "jquery";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormImageSelector extends Component {
  state = {
    imgUrl: this.props.imgUrl,
    cardId: this.props.cardId,
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
    const cardId = this.state.cardId;

    let reader = new FileReader();
    reader.readAsDataURL(reqImgData);

    this.props.uploadBusinessProfilePicture(reqImgData, cardId);
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
        <button className="ui floating dropdown button card-form-button edit-image-dropdown primary-font">
          <span className="card-form-button-text">Edit Profile Image</span>
          <div className="menu">
            <div className="item">
              <i className="add icon"></i>Upload new photo
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
                <i className="delete icon"></i> Remove Photo
              </div>
            )}
          </div>
        </button>
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
