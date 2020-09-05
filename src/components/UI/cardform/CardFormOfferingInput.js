import React, { Component } from "react";

import "../../../constants/colors.css";

class CardFormOfferingInput extends Component {
  constructor() {
    super();

    this.state = {
      showDeleteModal: false,
    };
  }

  render() {
    return (
      <div className="card-form-products-services-container">
        <div className="card-form-product-service-inputs-container">
          <input
            className="card-form-product-service-title-input"
            name="offeringTitle"
            placeholder="Product or Service Title"
            value={this.props.title}
            onChange={(event) =>
              this.props.cardFormOfferingTitleChangeHandler(
                this.props.index,
                event
              )
            }
          />
          <p className="primary-color card-form-product-service-text">$</p>
          <input
            className="card-form-product-service-price-input"
            name="offeringPrice"
            placeholder="0.00"
            value={this.props.price}
            onChange={(event) =>
              this.props.cardFormOfferingPriceChangeHandler(
                this.props.index,
                event
              )
            }
          />
        </div>
        <div className="card-form-product-service-buttons-container">
          <button
            className="primary-color card-form-offering-button"
            id="cardFormProductServiceDeleteBtn"
            onClick={() => this.setState({ showDeleteModal: true })}
          >
            Delete
          </button>
          {this.state.showDeleteModal ? (
            <div className="primary-light-bg card-form-delete-offering-modal">
              <span className="card-form-delete-offering-modal-question">
                Are you sure?
              </span>
              <div className="card-form-delete-offering-modal-question">
                <button
                  className="primary-color card-form-delete-offering-modal-button"
                  onClick={() =>
                    this.props.deleteOffering(this.props.id, this.props.index)
                  }
                >
                  Yes
                </button>
                <button
                  className="primary-color card-form-delete-offering-modal-button"
                  onClick={() => this.setState({ showDeleteModal: false })}
                >
                  No
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

//this.props.deleteOffering(this.props.id, this.props.index)

export default CardFormOfferingInput;
