import React, { Fragment, useState, useEffect } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardOfferings = (props) => {

  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    checkHeaderState();
  });

  const checkHeaderState = () => {
    for (let idx = 0; idx < props.offerings.length; idx++) {
      let offering = props.offerings[idx];
      if (offering.title !== "" || offering.description !== "") {
        setShowHeader(true);
        break;
      }
      else if (idx === props.offerings.length - 1) {
        setShowHeader(false);
      }
    }
  }

  const renderOfferingSliderImages = (offering) => {
    return offering.photos.map((photo) => (
      <div key={photo.id} data-src={photo.url}></div>
    ));
  };

  const renderOfferings = () => {
    return props.offerings.map((offering, index) => {
      if (
        (!offering.title || offering.title === "") &&
        (!offering.description || offering.description === "")
      ) {
        return null;
      }
      return (
        <div
          key={offering.id}
          style={{ backgroundColor: props.transparentColor }}
          className="card-business-product-service-container"
        >
          { offering.photos.length > 0 ? 
            //<img className="preview-card-offering-photo" src={offering.photos[0].url}/>
            <AwesomeSlider bullets={false}>
              {renderOfferingSliderImages(offering)}
            </AwesomeSlider>
            : null
          }
          <div className="card-business-offering-body">
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
            <div className="card-business-product-service-description">
              <span
                className="card-business-product-service-description wordwrap"
                style={{ color: props.primaryColor }}
              >
                {offering.description}
              </span>
            </div>
          ) : null}
          </div>
        </div>
      );
    });
  }
  
  const view =
     !showHeader || !props.offerings || props.offerings.length === 0 ? null : (
      <Fragment>
        <div className="card-business-section-header-container">
            <h4 className="ui horizontal divider header">
              <span className="public-card-products-services-title-text">
                Products &amp; Services
              </span>
            </h4>
          </div>
        <div className="card-business-products-services-container">
          {renderOfferings()}
        </div>
        
      </Fragment>
    );

  return view;
  
};

export default CardOfferings;
