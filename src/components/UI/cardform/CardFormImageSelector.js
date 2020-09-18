import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { uploadBusinessProfilePicture } from "../../../store/actions/card";

import Loader from "react-loader-spinner";

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
        <div className="primary-color-bg card-form-business-img-container">
          {this.props.cardImageLoader ? (
            <Loader type="TailSpin" color="#fff" width={50} height={50} />
          ) : (
            <img
              className="card-form-business-img"
              src={this.state.imgUrl}
              alt="business-profile"
            />
          )}
        </div>
        <label
          className="primary-color card-form-file-label"
          htmlFor="businessProfileImgSelector"
        >
          Choose New Businesss Image
        </label>
        <input
          className="card-form-file-button"
          id="businessProfileImgSelector"
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
    imgUrl: state.card.cardData.imgUrl,
    cardId: state.card.cardData.id,
    cardImageLoader: state.cardImageLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBusinessProfilePicture: (imgData, cardId) =>
      dispatch(uploadBusinessProfilePicture(imgData, cardId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormImageSelector);
