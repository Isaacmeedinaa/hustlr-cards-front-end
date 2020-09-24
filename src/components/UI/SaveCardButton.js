import React, { Component } from "react";

import Loader from "react-loader-spinner";

import { connect } from "react-redux";
import { saveCard } from "../../store/actions/card";

import "./UI.css";
import "../../constants/colors.css";

class SaveCardButton extends Component {
  render() {
    return (
      <div className="save-card-button-container">
        <div
          className="save-card-button"
          onClick={() => this.props.saveCard(this.props.cardId)}
        >
          <span className="primary-color card-form-button-text">
            {this.props.cardUpdatingLoader ? (
              <Loader type="TailSpin" color="#ff5349" width={15} height={15} />
            ) : (
              "Save"
            )}
          </span>
        </div>
      </div>
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
