import React, { Component } from "react";

import Loader from "react-loader-spinner";

import { Animated } from "react-animated-css";

import "../../../constants/colors.css";
import "./SupportUI.css";

class SupportForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    message: "",
  };

  onChangeSupportFormChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSupportFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg support-form-wrapper">
          <div className="support-form-container">
            <h5 className="support-header">Questions? Send us a message!</h5>
            <Animated
              animationIn="bounceIn"
              animationOut="fadeOut"
              isVisible={true}
              className="support-form-animation-container"
            >
              <form
                className="support-form"
                onSubmit={this.onSupportFormSubmit}
              >
                <div className="support-form-group-fields">
                  <input
                    className="support-form-input-small-field"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.onChangeSupportFormChangeHandler}
                  />
                  <input
                    className="support-form-input-small-field"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.onChangeSupportFormChangeHandler}
                  />
                </div>
                <textarea
                  className="support-form-large-input"
                  name="message"
                  placeholder="Messsage"
                  value={this.state.message}
                  onChange={this.onChangePasswordFormChangeHandler}
                />
                <button className="white-text support-form-button">
                  {this.props.sendMessageLoader ? (
                    <Loader
                      type="TailSpin"
                      color="#fff"
                      width={28}
                      height={28}
                    />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </Animated>
          </div>
        </div>
      </Animated>
    );
  }
}

export default SupportForm;
