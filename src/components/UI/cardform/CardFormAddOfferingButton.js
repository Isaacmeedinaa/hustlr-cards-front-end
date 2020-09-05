import React, { Component } from "react";

class CardFormAddOfferingButton extends Component {
  render() {
    return (
      <div
        className="card-form-button"
        onClick={() => this.props.addOffering()}
      >
        <span className="primary-color card-form-button-text">
          + Add Products or Services
        </span>
      </div>
    );
  }
}

export default CardFormAddOfferingButton;
