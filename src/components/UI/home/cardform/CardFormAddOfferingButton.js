import React, { Component } from "react";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { createOffering } from "../../../../store/actions/card";

import "./CardFormUI.css";

class CardFormAddOfferingButton extends Component {
  render() {
    return (
      <label
        className="card-form-button"
        onClick={() => this.props.createOffering(this.props.cardId)}
      >
        <span className="card-form-button-text">
          {this.props.offeringLoader.creatingLoader ? (
            <Loader type="TailSpin" color="#ffffff" width={23} height={23} />
          ) : (
            "+ Add a Product or Service"
          )}
        </span>
      </label>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardId: state.card.cardData.id,
    offeringLoader: state.offeringLoader,
    offeringCreatedSuccessfully: state.offeringNotifications.created.success,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createOffering: (cardId) => dispatch(createOffering(cardId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormAddOfferingButton);
