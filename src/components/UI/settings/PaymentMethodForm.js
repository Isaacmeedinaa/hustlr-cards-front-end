import React, { Component, Fragment } from "react";

import { Animated } from "react-animated-css";

import MdArrowDropup from "react-ionicons/lib/MdArrowDropup";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";

import "../../../constants/colors.css";
import "../UI.css";

class PaymentMethodForm extends Component {
  state = {
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    addressLineOne: "",
    addressLineTwo: "",
    city: "",
    state: "",
    zipcode: "",
    showForm: false,
  };

  onShowFormClickHandler = async () => {
    await this.setState((prevState) => {
      return {
        showForm: !prevState.showForm,
      };
    });
  };

  onPaymentMethodFormChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onPaymentMethodFormSubmitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Fragment>
        <div
          className="payment-method-form-header-btn-container"
          onClick={this.onShowFormClickHandler}
        >
          <h5 className="user-settings-header">Payment Method</h5>
          <div className="settings-accordion-icon-container">
            {this.state.showForm ? (
              <MdArrowDropdown color="#2ecc71" />
            ) : (
              <MdArrowDropup color="#2ecc71" />
            )}
          </div>
        </div>
        {this.state.showForm ? (
          <Animated
            animationIn="bounceIn"
            animationOut="fadeOut"
            isVisible={true}
            className="settings-form-animation-container"
          >
            <form
              className="payment-method-form-container"
              onSubmit={this.onPaymentMethodFormSubmitHandler}
            >
              <input
                className="payment-method-form-input"
                name="cardNumber"
                placeholder="Card Number"
                maxLength={16}
                value={this.state.cardNumber}
                onChange={this.onPaymentMethodFormChangeHandler}
              />
              <div className="payment-method-form-mm-yy-fields">
                <input
                  className="payment-method-form-mm-yy-input"
                  name="expMonth"
                  placeholder="MM/MM"
                  maxLength={5}
                  value={this.state.expMonth}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
                <input
                  className="payment-method-form-mm-yy-input"
                  name="expYear"
                  placeholder="YY"
                  maxLength={2}
                  value={this.state.expYear}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
                <input
                  className="payment-method-form-mm-yy-input"
                  name="cvv"
                  placeholder="CVV"
                  maxLength={3}
                  value={this.state.cvv}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
              </div>
              <div className="payment-method-form-address-lines-fields">
                <input
                  className="payment-method-form-address-lines-input"
                  name="addressLineOne"
                  placeholder="123 Main St"
                  value={this.state.addressLineOne}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
                <input
                  className="payment-method-form-address-lines-input"
                  name="addressLineTwo"
                  placeholder="Apt #, Suite #, etc."
                  value={this.state.addressLineTwo}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
              </div>
              <div className="payment-method-form-location-fields">
                <input
                  className="payment-method-form-location-input"
                  name="city"
                  placeholder="City"
                  value={this.state.city}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
                <input
                  className="payment-method-form-location-input"
                  name="state"
                  placeholder="State"
                  value={this.state.state}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
                <input
                  className="payment-method-form-location-input"
                  name="zipcode"
                  placeholder="Zipcode"
                  value={this.state.zipcode}
                  onChange={this.onPaymentMethodFormChangeHandler}
                />
              </div>
              <input
                className="white-text payment-method-button-form-button"
                value="Update Payment Method"
                type="submit"
              />
            </form>
          </Animated>
        ) : null}
      </Fragment>
    );
  }
}

export default PaymentMethodForm;
