import React, { Component } from "react";

import { connect } from "react-redux";
import { setCard } from "../../store/actions/card";

import "../../constants/colors.css";
import "./UI.css";

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.card.id,
      businessName: props.card.businessName,
      businessIndustry: props.card.businessIndustry,
      businessServices: props.card.businessServices,
      businessPhoneNumber: props.card.businessPhoneNumber,
      businessEmail: props.card.businessEmail,
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

    this.props.setCard(
      this.state.id,
      businessNameValue,
      businessIndustryValue,
      businessServicesValue,
      businessPhoneNumberValue,
      businessEmailValue
    );
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
              placeholder="Phone Number"
              value={this.state.businessPhoneNumber}
              onChange={this.cardFormInputChangeHandler}
            />
            <input
              id="cardFormInputEmail"
              className="card-form-input-contact"
              name="businessEmail"
              placeholder="Email"
              value={this.state.businessEmail}
              onChange={this.cardFormInputChangeHandler}
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
      businessEmail
    ) =>
      dispatch(
        setCard(
          id,
          businessName,
          businessIndustry,
          businessServices,
          businessPhoneNumber,
          businessEmail
        )
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
