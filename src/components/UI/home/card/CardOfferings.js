import React, { Fragment } from "react";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardOfferings = (props) => {
  const renderOfferings = () => {
    return props.offerings.map((offering, index) => {
      if ((!offering.title || offering.title === "") && (!offering.description || offering.description === "")) {
        return null;
      }
      return (
        <div
          key={offering.id}
          style={{ backgroundColor: props.transparentColor }}
          className="card-business-product-service-container"
        >
          <div className="card-business-product-service-header">
            <p
              style={{ color: props.primaryColor }}
              className="card-business-product-service-title"
            >
              {offering.title}
            </p>
            <div className="card-business-product-service-price">
              <span style={{ color: props.primaryColor }}>
                {!offering.price ? null : "$" + offering.price}
              </span>
            </div>
          </div>
          {offering.description ? (
            <div className="card-business-product-service-description word-wrap">
              <span style={{ color: props.primaryColor }}>
                {offering.description}
              </span>
            </div>
          ) : null}
        </div>
      );
    });
  };

  const view =
    !props.offerings || props.offerings.length === 0 ? null : (
      <Fragment>
        <div className="card-business-products-services-title-text">
          Products & Services
        </div>
        <div className="card-business-products-services-container">
          {renderOfferings()}
        </div>
      </Fragment>
    );

  return view;
};

export default CardOfferings;
