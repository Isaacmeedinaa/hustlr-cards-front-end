import React, { Component } from "react";

import { connect } from "react-redux";
import { createOffering } from "../../../store/actions/card";

class CardFormAddOfferingButton extends Component {
  render() {
    return (
      <div
        className="card-form-button"
        onClick={() => this.props.createOffering(this.props.cardId)}
      >
        <span className="card-form-button-text">
          + Add Products or Services
        </span>
      </div>
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
    createOffering: (cardId) => dispatch(createOffering(cardId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormAddOfferingButton);
