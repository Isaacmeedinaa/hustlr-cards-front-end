import React, { Fragment } from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardOfferings = (props) => {
  const renderOfferings = () => {
    return props.offerings.map((offering, index) => {
      if (offering.title === "") {
        return null;
      }
      return (
          <div  key={index} className="card-business-product-service-container"
                style={{ backgroundColor: props.transparentColor }}>
            <p  style={{ color: props.primaryColor }} 
                className="card-business-product-service-title">
                {offering.title}
            </p>
              <div className="card-business-product-service-price"
              >
                <span style={{ color: props.primaryColor}}>
                {!offering.price ? null : '$' + offering.price}
                </span>
              </div>
            
          </div>
      );
    });
  };

  return (
    <Fragment>
      <div className="card-business-products-services-title-text">
        Products & Services
      </div>
      <div className="card-business-products-services-container">
        {renderOfferings()}
      </div>
    </Fragment>
  );
};

export default CardOfferings;
