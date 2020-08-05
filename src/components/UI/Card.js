import React, { Component } from "react";

import { connect } from "react-redux";

import MdCall from "react-ionicons/lib/MdCall";
import MdMail from "react-ionicons/lib/MdMail";

import "../../constants/colors.css";
import "./UI.css";

class Card extends Component {
  constructor() {
    super();

    this.state = {
      primary: "#ff5349",
    };
  }

  render() {
    return (
      <div className="primary-light-bg card-wrapper">
        <div className="card-container">
          <div className="primary-color-bg card-business-img"></div>
          <h1 className="card-business-name">
            {this.props.card.businessName === ""
              ? "Enter Business Name"
              : this.props.card.businessName}
          </h1>
          <h5 className="card-business-industry">
            {this.props.card.businessIndustry === ""
              ? "Select a Business Industry"
              : this.props.card.businessIndustry}
          </h5>
          <h4 className="card-business-services">
            {this.props.card.businessServices === ""
              ? "Enter Business Services"
              : this.props.card.businessServices}
          </h4>
          <div className="card-business-contact-details">
            <div className="card-business-contact-detail">
              <div className="card-business-contact-detail-icon-container">
                <MdCall
                  className="card-business-contact-icon"
                  fontSize="18px"
                  color={this.state.primary}
                />
              </div>
              <p className="card-business-contact-text">
                {this.props.card.businessPhoneNumber === ""
                  ? "Enter Phone Number"
                  : this.props.card.businessPhoneNumber}
              </p>
            </div>
            <div
              className="card-business-contact-detail"
              id="cardBusinessContactDetailEmail"
            >
              <div className="card-business-contact-detail-icon-container">
                <MdMail
                  className="card-business-contact-icon"
                  fontSize="18px"
                  color={this.state.primary}
                />
              </div>
              <p className="card-business-contact-text">
                {this.props.card.businessEmail === ""
                  ? "Enter Email"
                  : this.props.card.businessEmail}
              </p>
            </div>
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

export default connect(mapStateToProps)(Card);
