import React, { Component } from "react";

import "../../constants/colors.css";
import "./UI.css";

class Card extends Component {
  render() {
    return (
      <div className="primary-light-bg card-wrapper">
        <div className="card-container">
          <div className="primary-color-bg card-business-img"></div>
          <h1 className="card-business-name">
            {this.props.businessName === ""
              ? "Enter Business Name"
              : this.props.businessName}
          </h1>
          <h4 className="card-business-services">
            {this.props.businessServices === ""
              ? "Enter Business Services"
              : this.props.businessServices}
          </h4>
          <div className="card-business-contact-details">
            <div className="card-business-contact-detail">
              <p>
                {this.props.businessPhoneNumber === ""
                  ? null
                  : this.props.businessPhoneNumber}
              </p>
            </div>
            <div className="card-business-contact-detail">
              <p>
                {this.props.businessEmail === ""
                  ? null
                  : this.props.businessEmail}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
