import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormShowSocialMediasButton extends Component {
  render() {
    return (
      <div
        className="card-form-button"
        onClick={() => this.props.showSocialMediaLinks()}
      >
        <span className="primary-color card-form-button-text">
          {this.props.isHidden ? "Edit Social Media Links" : "Close"}
        </span>
      </div>
    );
  }
}

export default CardFormShowSocialMediasButton;
