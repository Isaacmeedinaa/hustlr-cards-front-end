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
        <div
          className="card-form-button"
          onClick={(event) => this.props.handleImageSelectorClick(event)}
        >
          <span className="primary-color card-form-button-text">
            Choose New Photo
          </span>
        </div>
      </Fragment>
    );
  }
}

export default CardFormImageSelector;
