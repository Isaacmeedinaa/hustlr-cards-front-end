import React, { Component } from "react";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { saveCard } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "./HomeUI.css";

class SaveCardButton extends Component {
  render() {
    return (
      <button
        className={
          !this.props.cardSaved
            ? "save-card-button glowing-button"
            : "save-card-button"
        }
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
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardId: state.card.cardData.id,
    cardUpdatingLoader: state.cardUpdatingLoader,
    cardSaved: state.cardSaved,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCard: (cardId) => dispatch(saveCard(cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveCardButton);
