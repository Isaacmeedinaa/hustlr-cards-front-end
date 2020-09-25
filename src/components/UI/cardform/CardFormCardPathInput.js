import React, { Component } from "react";

import { connect } from "react-redux";
import { setCardPath } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormCardPathInput extends Component {
  state = {
    pathToCard: this.props.pathToCard,
  };

  onCardPathChangeHandler = async (event) => {
    await this.setState({
      pathToCard: event.target.value,
    });

    this.props.setCardPath(this.state.pathToCard);
  };

  render() {
    return (
      <div className="card-form-path-to-card-container">
        <div>
          <p className="primary-color card-form-path-to-card-url">
            https://www.hustlr.cards/
          </p>
        </div>
        <input
          className="card-form-path-to-card-input"
          placeholder="Business Username"
          name="pathToCard"
          value={this.state.pathToCard}
          onChange={this.onCardPathChangeHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pathToCard: state.card.cardData.pathToCard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardPath: (pathToCard) => dispatch(setCardPath(pathToCard)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormCardPathInput);
