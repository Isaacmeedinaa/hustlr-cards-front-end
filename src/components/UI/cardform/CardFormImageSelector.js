import React, { Component, Fragment } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormImageSelector extends Component {
  render() {
    return (
      <Fragment>
        <div className="primary-color-bg card-form-business-img-container">
          <img className="card-form-business-img" src={this.props.imgUrl} />
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
          onChange={(event) => this.props.handleImageSelectorClick(event)}
          type="file"
          accept="image/x-png,image/jpeg"
        />
      </Fragment>
    );
  }
}

export default CardFormImageSelector;
