import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchCard } from "../../../store/actions/card";

import { Animated } from "react-animated-css";

import "../../../constants/colors.css";

class CardFormOfferingInputs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeleteModal: false,
      offeringSnapshot: { ...props.offering },
    };
  }

  updateOfferingInputsHandler = async () => {
    await this.props.updateOffering(
      this.props.id,
      this.props.title,
      this.props.price,
      this.props.cardId
    );

    await this.setState({
      offeringSnapshot: { ...this.props.offering },
    });
  };

  deleteOfferingInputsHandler = async () => {
    await this.props.deleteOffering(this.props.id);
    await this.setState({
      showDeleteModal: false,
    });

    const userId = localStorage.getItem("userId");
    this.props.fetchCard(userId);
  };

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
          {this.state.offeringSnapshot.title !== this.props.offering.title ||
          this.state.offeringSnapshot.price !== this.props.offering.price ? (
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
    fetchCard: (userId) => dispatch(fetchCard(userId)),
  };
};

export default connect(null, mapDispatchToProps)(CardFormOfferingInputs);
