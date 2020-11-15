import React, { Component } from "react";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { saveCard } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "./HomeUI.css";

class SaveCardButton extends Component {
  render() {
    return (
      !this.props.cardSaved ? 
      <button
        className={
          "save-card-button glowing-button"
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
      : <div className="card-saved-container">
        <i className="check icon card-saved-check"></i>
        <span className="color-saved-text">Saved</span>
        </div>
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
