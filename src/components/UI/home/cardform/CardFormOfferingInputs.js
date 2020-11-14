import React, { Component } from "react";

import { connect } from "react-redux";
import {
  setCardOfferingTitle,
  setCardOfferingPrice,
  setCardOfferingDescription,
  deleteOffering,
} from "../../../../store/actions/card";

import scrollToComponent from 'react-scroll-to-component';

import {
  hideOfferingCreatedNotification,
} from "../../../../store/actions/notifications/offeringNotifications";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormOfferingInputs extends Component {
  state = {
    showDeleteModal: false,
    title: this.props.offering.title,
    price: this.props.offering.price,
    description: this.props.offering.description,
    id: this.props.offering.id,
    offerings: this.props.offerings
  };

  componentDidUpdate() {
    if (this.props.offeringAddedNotification.show 
      && this.props.offeringAddedNotification.success
      && this.props.offering.id === this.props.offerings[this.props.offerings.length - 1].id) {
        scrollToComponent(this.ScrollTo, { offset: 0, align: 'middle', duration: 500, ease:'out-circ'})
      this.props.hideOfferingCreatedNotification();
    }
  }

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
            id={this.state.id?.toString()}
            ref={(section) => { this.ScrollTo = section; }}
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

const mapStateToProps = (state) => {
  return {
    offeringAddedNotification: state.offeringNotifications.created
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardOfferingTitle: (offeringIndex, offeringTitle) =>
      dispatch(setCardOfferingTitle(offeringIndex, offeringTitle)),
    setCardOfferingPrice: (offeringIndex, offeringPrice) =>
      dispatch(setCardOfferingPrice(offeringIndex, offeringPrice)),
    setCardOfferingDescription: (offeringIndex, offeringDescription) =>
      dispatch(setCardOfferingDescription(offeringIndex, offeringDescription)),
    deleteOffering: (id) => dispatch(deleteOffering(id)),
    hideOfferingCreatedNotification: () =>
      dispatch(hideOfferingCreatedNotification()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardFormOfferingInputs);
