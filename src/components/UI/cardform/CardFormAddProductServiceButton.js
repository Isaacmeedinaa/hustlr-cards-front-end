import React, { Component } from "react";

class CardFormAddProductServiceButton extends Component {
  render() {
    return (
      <div
        className="card-form-button"
        onClick={() => this.props.addProductService()}
      >
        <span className="primary-color card-form-button-text">
          + Add Products or Services
        </span>
      </div>
    );
  }
}

export default CardFormAddProductServiceButton;
