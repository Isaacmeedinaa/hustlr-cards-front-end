import React, { Component } from "react";

import "../../constants/colors.css";
import "./UI.css";

class CardForm extends Component {
  handleImageSelectorClick = () => {};

  cardFormInputValueHandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    this.props.cardFormInputChangeHandler(field, value);
  };

  render() {
    return (
      <div className="primary-light-bg card-form-wrapper">
        <div className="card-form-container">
          <div
            className="primary-color-bg card-form-business-img"
            onClick={this.handleImageSelectorClick}
          ></div>
          <input
            className="card-form-input"
            name="businessName"
            placeholder="Business Name"
            value={this.props.businessName}
            onChange={this.cardFormInputValueHandler}
          />
          <textarea
            className="card-form-input-large"
            name="businessServices"
            placeholder="Business Services"
            value={this.props.businessServices}
            onChange={this.cardFormInputValueHandler}
          />
          <div className="card-form-contact-fields">
            <input
              id="cardFormInputPhoneNumber"
              className="card-form-input-contact"
              name="businessPhoneNumber"
              placeholder="Phone Number"
              value={this.props.businessPhoneNumber}
              onChange={this.cardFormInputValueHandler}
            />
            <input
              id="cardFormInputEmail"
              className="card-form-input-contact"
              name="businessEmail"
              placeholder="Email"
              value={this.props.businessEmail}
              onChange={this.cardFormInputValueHandler}
            />
          </div>
          <div
            className="card-form-button"
            onClick={() => this.props.toggleModal()}
          >
            <span className="primary-color card-form-button-text">
              + Add Social Media
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default CardForm;
