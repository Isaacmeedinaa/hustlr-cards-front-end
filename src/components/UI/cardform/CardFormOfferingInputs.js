import React, { Component } from "react";

import { connect } from "react-redux";
import {
  setCardOfferingTitle,
  setCardOfferingPrice,
  setCardOfferingDescription,
  updateOffering,
  deleteOffering,
} from "../../../store/actions/card";

import "../../../constants/colors.css";

class CardFormOfferingInputs extends Component {
  state = {
    showDeleteModal: false,
    title: this.props.offering.title,
    price: this.props.offering.price,
    description: this.props.offering.description,
    offeringSnapshot: { ...this.props.offering },
  };

  onCardTitleChangeHandler = async (event) => {
    await this.setState({
      title: event.target.value,
    });

    this.props.setCardOfferingTitle(this.props.index, this.state.title);
  };

  onCardPriceChangeHandler = async (event) => {
    await this.setState({
      price: event.target.value,
    });

    this.props.setCardOfferingPrice(this.props.index, this.state.price);
  };

  onOfferingDescriptionChangeHandler = async (event) => {
    await this.setState({
      description: event.target.value,
    });

    this.props.setCardOfferingDescription(
      this.props.index,
      this.state.description
    );
  };

  updateOfferingInputsHandler = async () => {
    await this.props.updateOffering(
      this.props.id,
      this.props.title,
      this.props.description,
      this.props.price,
      this.props.cardId
    );

    this.setState({
      offeringSnapshot: { ...this.props.offering },
    });
  };

  deleteOfferingInputsHandler = async () => {
    await this.props.deleteOffering(this.props.id);
    this.setState({
      showDeleteModal: false,
    });
  };

  render() {
    return (
      <div className="card-form-products-services-container">
        <div className="card-form-product-service-inputs-container">
          <input
            className="card-form-product-service-title-input"
            name="offeringTitle"
            placeholder="Product or Service Title"
            value={this.state.title}
            onChange={this.onCardTitleChangeHandler}
          />
          <p className="primary-color card-form-product-service-text">$</p>
          <input
            className="card-form-product-service-price-input"
            name="offeringPrice"
            placeholder="0.00"
            value={this.state.price}
            onChange={this.onCardPriceChangeHandler}
          />
        </div>
        <textarea
          className="card-form-input-large"
          name="description"
          placeholder="Explain your product or service.."
          value={this.state.description}
          onChange={this.onOfferingDescriptionChangeHandler}
        />
        <div className="card-form-product-service-buttons-container">
          {this.state.offeringSnapshot.title !== this.props.offering.title ||
          this.state.offeringSnapshot.price !== this.props.offering.price ||
          this.state.offeringSnapshot.description !==
            this.props.offering.description ? (
            <button
              className="primary-color card-form-offering-button"
              id="cardFormProductServiceDeleteBtn"
              onClick={this.updateOfferingInputsHandler}
            >
              Save Changes
            </button>
          ) : null}
          <button
            className="primary-color card-form-offering-button"
            id="cardFormProductServiceDeleteBtn"
            onClick={() => this.setState({ showDeleteModal: true })}
          >
            Delete
          </button>
        </div>
        {this.state.showDeleteModal ? (
          <div className="primary-light-bg card-form-delete-offering-modal">
            <span className="card-form-delete-offering-modal-question">
              Are you sure?
            </span>
            <div className="card-form-delete-offering-modal-question">
              <button
                className="primary-color card-form-delete-offering-modal-button"
                onClick={this.deleteOfferingInputsHandler}
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
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCardOfferingTitle: (offeringIndex, offeringTitle) =>
      dispatch(setCardOfferingTitle(offeringIndex, offeringTitle)),
    setCardOfferingPrice: (offeringIndex, offeringPrice) =>
      dispatch(setCardOfferingPrice(offeringIndex, offeringPrice)),
    setCardOfferingDescription: (offeringIndex, offeringDescription) =>
      dispatch(setCardOfferingDescription(offeringIndex, offeringDescription)),
    updateOffering: (id, title, description, price, cardId) =>
      dispatch(updateOffering(id, title, description, price, cardId)),
    deleteOffering: (id) => dispatch(deleteOffering(id)),
  };
};

export default connect(null, mapDispatchToProps)(CardFormOfferingInputs);
