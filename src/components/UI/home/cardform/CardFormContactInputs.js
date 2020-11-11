import React, { Component } from "react";

import { connect } from "react-redux";
import {
  setCardEmail,
  setCardPhoneNumber,
} from "../../../../store/actions/card";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormContactInputs extends Component {
  state = {
    phoneNumber: this.props.phoneNumber,
    email: this.props.email,
  };

  onCardPhoneNumberChangeHandler = async (event) => {
    await this.setState({
      phoneNumber: event.target.value,
    });

    this.props.setCardPhoneNumber(this.state.phoneNumber);
  };

  onCardEmailChangeHandler = async (event) => {
    await this.setState({
      email: event.target.value,
    });

    this.props.setCardEmail(this.state.email);
  };

  render() {
    return (
      <div className="card-form-contact-fields">
        <input
          id="cardFormInputPhoneNumber"
          className="card-form-input-contact"
          name="phoneNumber"
          placeholder="+1 (773) 555-0000"
          maxLength={16}
          value={this.state.phoneNumber}
          onChange={this.onCardPhoneNumberChangeHandler}
        />
        <input
          id="cardFormInputEmail"
          className="card-form-input-contact"
          name="email"
          placeholder="youremail@email.com"
          value={this.state.email}
          onChange={this.onCardEmailChangeHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.card.cardData.email,
    phoneNumber: state.card.cardData.phoneNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardEmail: (email) => dispatch(setCardEmail(email)),
    setCardPhoneNumber: (phoneNumber) =>
      dispatch(setCardPhoneNumber(phoneNumber)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormContactInputs);
