import React, { Component, Fragment } from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

class PublicCardOfferings extends Component {
  renderOfferings = () => {
    return this.props.offerings.map((offering) => {
      if ((!offering.title || offering.title === "") && (!offering.description || offering.description === "")) {
        return null;
      }

      return (
        <div
          key={offering.id}
          style={{ backgroundColor: this.props.transparentColor }}
          className="public-card-product-service-container"
        >
          <div className="public-card-product-service-header">
            <p
              style={{ color: this.props.primaryColor }}
              className="public-card-product-service-title"
            >
              {offering.title}
            </p>
            <div className="public-card-product-service-price">
              <span style={{ color: this.props.primaryColor }}>
                {!offering.price ? null : "$" + offering.price}
              </span>
            </div>
          </div>
          {offering.description ? (
            <div className="public-card-product-service-description word-wrap">
              <span style={{ color: this.props.primaryColor }}>
                {offering.description}
              </span>
            </div>
          ) : null}
        </div>
      );
    });
  };

  render() {
    if (this.props.offerings.length === 0) {
      return null;
    }

    return (
      <Fragment>
        <div className="public-card-products-services-title-text">
          Products & Services
        </div>
        <div className="public-card-products-services-container">
          {this.renderOfferings()}
        </div>
      </Fragment>
    );
  }
}

export default PublicCardOfferings;
