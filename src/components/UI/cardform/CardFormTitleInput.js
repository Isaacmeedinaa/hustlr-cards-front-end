import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormTitleInput extends Component {
  render() {
    return (
      <input
        className="card-form-input"
        name="title"
        placeholder="Business Name"
        value={this.props.title}
        onChange={(event) => this.props.cardFormInputChangeHandler(event)}
      />
    );
  }
}

export default CardFormTitleInput;
