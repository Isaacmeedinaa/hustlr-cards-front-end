import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormCardPathInput extends Component {
  state = {
    pathToCardSnapshot: this.props.pathToCard,
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
          value={this.props.pathToCard}
          onChange={(event) => this.props.cardFormInputChangeHandler(event)}
        />
        {/* {this.state.pathToCardSnapshot !== this.props.pathToCard ? (
          <button
            className="primary-color card-form-offering-button"
            id="cardFormProductServiceDeleteBtn"
            onClick={this.updateOfferingInputsHandler}
          >
            Save Changes
          </button>
        ) : null} */}
      </div>
    );
  }
}

export default CardFormCardPathInput;
