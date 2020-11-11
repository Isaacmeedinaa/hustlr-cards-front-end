import React, { Component } from "react";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormShowSocialMediasButton extends Component {
  render() {
    return (
      <label
        className="primary color card-form-button"
        onClick={() => this.props.showSocialMediaLinks()}
      >
        <span className="card-form-button-text">
          {this.props.isHidden ? (
            <span className="card-form-button-text">
              Edit Social Media Links
            </span>
          ) : (
            "Close"
          )}
        </span>
      </label>
    );
  }
}

export default CardFormShowSocialMediasButton;
