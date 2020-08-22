import React, { Component } from "react";

class CardFormProductServiceInput extends Component {
  render() {
    return (
      <div className="card-form-products-services-container">
        <div className="card-form-product-service-inputs-container">
          <input
            className="card-form-product-service-title-input"
            name="productServiceTitle"
            placeholder="Product or Service Title"
            value={this.props.productService.title}
            onChange={(event) =>
              this.props.cardFormProductServiceChangeHandler(
                this.props.index,
                event
              )
            }
          />
          <p className="primary-color card-form-product-service-text">$</p>
          <input
            className="card-form-product-service-price-input"
            name="productServicePrice"
            placeholder="0.00"
            value={this.props.productService.price}
            onChange={(event) =>
              this.props.cardFormProductServiceChangeHandler(
                this.props.index,
                event
              )
            }
          />
        </div>
        <div className="card-form-product-service-buttons-container">
          <button
            className="primary-color card-form-produdct-service-button"
            id="cardFormProductServiceDeleteBtn"
            onClick={() =>
              this.props.deleteProductService(
                this.props.productService.id,
                this.props.index
              )
            }
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default CardFormProductServiceInput;
