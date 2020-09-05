import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardOfferings = (props) => {
  const renderOfferings = () => {
    return props.offerings.map((offering, index) => {
      if (offering.title === "") {
        return null;
      }
      return (
        <div key={index} className="card-business-product-service-container">
          <p className="card-business-product-service-title">
            {offering.title}
          </p>
          {!offering.price ? null : (
            <div
              style={{ backgroundColor: props.transparentColor }}
              className="card-business-product-service-price"
            >
              <span style={{ color: props.primaryColor }}>
                ${offering.price}
              </span>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="card-business-products-services-container">
      {renderOfferings()}
    </div>
  );
};

export default CardOfferings;
