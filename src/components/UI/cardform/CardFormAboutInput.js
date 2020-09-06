import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormAboutInput extends Component {
  render() {
    return (
      <textarea
        className="card-form-input-large"
        name="about"
        placeholder="About Business"
        value={this.props.about}
        onChange={(event) => this.props.cardFormInputChangeHandler(event)}
      />
    );
  }
}

export default CardFormAboutInput;
