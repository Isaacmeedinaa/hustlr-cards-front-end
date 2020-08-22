import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormContactInputs extends Component {
  render() {
    return (
      <div className="card-form-contact-fields">
        <input
          id="cardFormInputPhoneNumber"
          className="card-form-input-contact"
          name="phoneNumber"
          placeholder="+1 (773) 555-0000"
          maxLength={16}
          value={this.props.phoneNumber}
          onChange={(event) => this.props.cardFormInputChangeHandler(event)}
        />
        <input
          id="cardFormInputEmail"
          className="card-form-input-contact"
          name="email"
          placeholder="youremail@email.com"
          value={this.props.email}
          onChange={(event) => this.props.cardFormInputChangeHandler(event)}
        />
      </div>
    );
  }
}

export default CardFormContactInputs;
