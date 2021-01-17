import React, { Component } from "react";

import Loader from "react-loader-spinner";

import { Animated } from "react-animated-css";
import emailjs from 'emailjs-com';

import { SEND_MESSAGE_IS_LOADING, SEND_MESSAGE_IS_NOT_LOADING } from '../../../store/actions/loaders/contactMessageLoader';
import { hideMessageSentNotification, MESSAGE_SENT_SUCCESSFULLY, MESSAGE_SENT_UNSUCCESSFULLY } from "../../../store/actions/notifications/contactMessageNotification";

import { showToast } from "../Toasts";

import "../../../constants/colors.css";
import "./SupportUI.css";
import { connect } from "react-redux";

class SupportForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    message: "",
    emptyMessageError: false
  };

  componentDidUpdate() {
    if (this.props.contactMessageNotifications.show) {
      this.displayNotification(
        this.props.contactMessageNotifications.success,
        this.props.contactMessageNotifications.message
      );
      this.props.hideMessageSentNotification();
    }
  }

  displayNotification(success, message) {
    showToast(success, message);
  }

  onChangeSupportFormChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSupportFormSubmit = (event) => {
    event.preventDefault();

    if (this.state.message === '') {
      this.setState({
        emptyMessageError: true
      });
      return;
    }
    else {
      this.setState({
        emptyMessageError: false
      });
    }

    let params = {
      reply_to: this.props.email,
      from_name: this.props.username,
      message: this.state.message
    }

    this.props.dispatchMessageLoading();
    emailjs.send('default_service', 'template_yfdkdvp', params, 'user_Q2dfHmciKFS3Er0pamYbB')
      .then((result) => {
        this.props.dispatchMessageNotLoading();
        this.props.dispatchMessageSuccess();
        this.setState({
          message: '',
        });
      }, (error) => {
        this.props.dispatchMessageNotLoading();
        this.props.dispatchMessageFail();
    });

  };

  render() {
    return (
      <Animated animationIn="" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg support-form-wrapper">
          <div className="support-form-container">
            <h5 className="support-header">Questions? Send us a message!</h5>
            { this.state.emptyMessageError ?
            <div style={{ paddingTop: "20px" }}>
            <p className="card-form-error-text">
              Please enter a message in order to send.
            </p>
          </div> : null }
            <Animated
              animationIn=""
              animationOut="fadeOut"
              isVisible={true}
              className="support-form-animation-container"
            >
              <form
                className="support-form"
                onSubmit={this.onSupportFormSubmit}
              >
                <textarea
                  className="support-form-large-input"
                  name="message"
                  placeholder="Message"
                  value={this.state.message}
                  onChange={this.onChangeSupportFormChangeHandler}
                />
                <button className="white-text support-form-button">
                  {this.props.contactMessageLoader ? (
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

const mapDispatchToProps = (dispatch) => {
  return {
    hideMessageSentNotification: () => dispatch(hideMessageSentNotification()),
    dispatchMessageLoading: () => dispatch({ type: SEND_MESSAGE_IS_LOADING }),
    dispatchMessageNotLoading: () => dispatch({ type: SEND_MESSAGE_IS_NOT_LOADING }),
    dispatchMessageSuccess: () => dispatch({ type: MESSAGE_SENT_SUCCESSFULLY }),
    dispatchMessageFail: () => dispatch({ type: MESSAGE_SENT_UNSUCCESSFULLY }),
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    email: state.user.email,
    username: state.user.username,
    contactMessageLoader: state.contactMessageLoader,
    contactMessageNotifications: state.contactMessageNotifications
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SupportForm);
