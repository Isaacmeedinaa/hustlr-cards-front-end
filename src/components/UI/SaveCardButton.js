import React, { Component } from "react";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { saveCard } from "../../store/actions/card";

import "./UI.css";
import "../../constants/colors.css";

class SaveCardButton extends Component {
  render() {
    return (
      // <div className="save-card-button-container">
      <button
        className="save-card-button"
        onClick={() => this.props.saveCard(this.props.cardId)}
      >
        <span className="card-form-button-text">
          {this.props.cardUpdatingLoader ? (
            <Loader type="TailSpin" color="#ffffff" width={15} height={15} />
          ) : (
            "Save"
          )}
        </span>
      </button>
      // </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardId: state.card.cardData.id,
    cardUpdatingLoader: state.cardUpdatingLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCard: (cardId) => dispatch(saveCard(cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveCardButton);
