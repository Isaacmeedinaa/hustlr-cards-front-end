import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormBioInput extends Component {
  render() {
    return (
      <textarea
        className="card-form-input-large"
        name="services"
        placeholder="Business Bio"
        value={this.props.services}
        onChange={(event) => this.props.cardFormInputChangeHandler(event)}
      />
    );
  }
}

export default CardFormBioInput;
