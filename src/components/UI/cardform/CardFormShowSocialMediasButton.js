import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormShowSocialMediasButton extends Component {
  render() {
    return (
      <button
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
      </button>
    );
  }
}

export default CardFormShowSocialMediasButton;
