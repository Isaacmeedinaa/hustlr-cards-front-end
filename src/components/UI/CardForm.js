import React, { Component } from "react";

import { Animated } from "react-animated-css";

import { connect } from "react-redux";
import { setCard } from "../../store/actions/card";

import "../../constants/colors.css";
import "./UI.css";

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      id: props.card.id,
      businessName: props.card.businessName,
      businessIndustry: props.card.businessIndustry,
      businessServices: props.card.businessServices,
      businessPhoneNumber: props.card.businessPhoneNumber,
      businessEmail: props.card.businessEmail,
      businessFBLink: props.card.businessFBLink,
      businessIGLink: props.card.businessIGLink,
      businessTwitterLink: props.card.businessTwitterLink,
      businessSCLink: props.card.businessSCLink,
    };
  }

  handleImageSelectorClick = () => {};

  cardFormInputChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });

    const businessNameValue = this.state.businessName;
    const businessIndustryValue = this.state.businessIndustry;
    const businessServicesValue = this.state.businessServices;
    const businessPhoneNumberValue = this.state.businessPhoneNumber;
    const businessEmailValue = this.state.businessEmail;
    const businessFBLinkValue = this.state.businessFBLink;
    const businessIGLinkValue = this.state.businessIGLink;
    const businessTwitterLinkValue = this.state.businessTwitterLink;
    const businessSCLinkValue = this.state.businessSCLink;

    this.props.setCard(
      this.state.id,
      businessNameValue,
      businessIndustryValue,
      businessServicesValue,
      businessPhoneNumberValue,
      businessEmailValue,
      businessFBLinkValue,
      businessIGLinkValue,
      businessTwitterLinkValue,
      businessSCLinkValue
    );
  };

  showSocialMediaLinks = () => {
    this.setState((prevState) => {
      return {
        isHidden: !prevState.isHidden,
      };
    });
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
            value={this.state.businessName}
            onChange={this.cardFormInputChangeHandler}
          />
          <div className="card-form-dropdown-container">
            <select
              className="card-form-dropdown"
              name="businessIndustry"
              defaultValue={
                this.state.businessIndustry === ""
                  ? "DEFAULT"
                  : this.state.businessIndustry
              }
              onChange={this.cardFormInputChangeHandler}
            >
              <option value="DEFAULT" disabled>
                Select a Business Industry
              </option>
              <option value="Software Development">Software Development</option>
              <option value="Clothing and Apparel">Clothing and Apparel</option>
              <option value="Health and Beauty">Health and Beauty</option>
            </select>
          </div>
          <textarea
            className="card-form-input-large"
            name="businessServices"
            placeholder="Business Services"
            value={this.state.businessServices}
            onChange={this.cardFormInputChangeHandler}
          />
          <div className="card-form-contact-fields">
            <input
              id="cardFormInputPhoneNumber"
              className="card-form-input-contact"
              name="businessPhoneNumber"
              placeholder="+1 (773) 555-0000"
              value={this.state.businessPhoneNumber}
              onChange={this.cardFormInputChangeHandler}
            />
            <input
              id="cardFormInputEmail"
              className="card-form-input-contact"
              name="businessEmail"
              placeholder="youremail@email.com"
              value={this.state.businessEmail}
              onChange={this.cardFormInputChangeHandler}
            />
          </div>
          <div className="card-form-button" onClick={this.showSocialMediaLinks}>
            <span className="primary-color card-form-button-text">
              {this.state.isHidden ? "+ Edit Social Media Links" : "Close"}
            </span>
          </div>
          {this.state.isHidden ? null : (
            <Animated
              className="card-form-social-media-inputs-animation-wrapper"
              animationIn="bounceIn"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div className="card-form-social-media-inputs-container">
                <input
                  className="card-form-social-media-input"
                  name="businessFBLink"
                  placeholder="https://www.facebook.com/your_username"
                  value={this.state.businessFBLink}
                  onChange={this.cardFormInputChangeHandler}
                />
                <input
                  className="card-form-social-media-input"
                  name="businessIGLink"
                  placeholder="https://www.instagram.com/your_username"
                  value={this.state.businessIGLink}
                  onChange={this.cardFormInputChangeHandler}
                />
                <input
                  className="card-form-social-media-input"
                  name="businessTwitterLink"
                  placeholder="https://www.twitter.com/your_username"
                  value={this.state.businessTwitterLink}
                  onChange={this.cardFormInputChangeHandler}
                />
                <input
                  className="card-form-social-media-input"
                  name="businessSCLink"
                  placeholder="https://www.snapchat.com/add/your_username"
                  value={this.state.businessSCLink}
                  onChange={this.cardFormInputChangeHandler}
                />
              </div>
            </Animated>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    card: state.card,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCard: (
      id,
      businessName,
      businessIndustry,
      businessServices,
      businessPhoneNumber,
      businessEmail,
      businessFBLink,
      businessIGLink,
      businessTwitterLink,
      businessSCLink
    ) =>
      dispatch(
        setCard(
          id,
          businessName,
          businessIndustry,
          businessServices,
          businessPhoneNumber,
          businessEmail,
          businessFBLink,
          businessIGLink,
          businessTwitterLink,
          businessSCLink
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
