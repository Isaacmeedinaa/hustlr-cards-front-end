import React, { Component } from "react";

import { connect } from "react-redux";
import { openSocialMediaModal } from "../../../../store/actions/modals/socialMediaModal";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormAddSocialMediaButton extends Component {
  render() {
    return (
      <label
        className="primary color card-form-button"
        onClick={() => this.props.openSocialMediaModal()}
      >
        <span className="card-form-button-text">
          {this.props.links.length === 0 ?
          "+ Add Social Media Links" : "Edit Social Media Links"
          }
        </span>
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openSocialMediaModal: () => dispatch(openSocialMediaModal()),
  };
};

export default connect(null, mapDispatchToProps)(CardFormAddSocialMediaButton);
