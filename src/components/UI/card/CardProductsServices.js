import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardProductsServices = (props) => {
  const renderProductService = () => {
    return props.productsServices.map((productService, index) => {
      if (productService.title === "") {
        return null;
      }
      return (
        <div key={index} className="card-business-product-service-container">
          <p className="card-business-product-service-title">
            {productService.title}
          </p>
          {!productService.price ? null : (
            <div
              style={{ backgroundColor: props.transparentColor }}
              className="card-business-product-service-price"
            >
              <span style={{ color: props.primaryColor }}>
                ${productService.price}
              </span>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <div className="card-business-products-services-container">
      {renderProductService()}
    </div>
  );
};

export default CardProductsServices;
