import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormCardPathInput extends Component {
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
      </div>
    );
  }
}

export default CardFormCardPathInput;
