import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { uploadGalleryImage } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormAddImageButton extends Component {
  state = {
    cardId: this.props.cardId,
  };

  onImageChangeHandler = (event) => {
    const reqImgData = event.target.files[0];
    const cardId = this.state.cardId;

    let reader = new FileReader();
    reader.readAsDataURL(reqImgData);

    this.props.uploadGalleryImage(reqImgData, cardId);
  };

  render() {
    return (
      <Fragment>
        <label
          className="primary-color card-form-file-label"
          // style={{ marginTop: 30 }}
          htmlFor="businessGalleryImgSelector"
        >
          Upload New Gallery Image
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
