import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormDescriptionInput extends Component {
  render() {
    return (
      <textarea
        className="card-form-input-large"
        name="description"
        placeholder="Business Description"
        value={this.props.description}
        onChange={(event) => this.props.cardFormInputChangeHandler(event)}
      />
    );
  }
}

export default CardFormDescriptionInput;
