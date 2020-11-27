import React, { Fragment, useState, useEffect, useRef } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardOfferings = (props) => {
  const [showHeader, setShowHeader] = useState(false);

  const offeringsContainer = useRef();

  useEffect(() => {
    checkHeaderState();
    const copyOfferingsContainerCurrent = offeringsContainer.current;
    offeringsContainer.current.addEventListener(
      "wheel",
      onOfferingsContainerWheel,
      {
        passive: false,
      }
    );
    return () =>
      copyOfferingsContainerCurrent.removeEventListener(
        "wheel",
        onOfferingsContainerWheel
      );
  });

  const checkHeaderState = () => {
    for (let idx = 0; idx < props.offerings.length; idx++) {
      let offering = props.offerings[idx];
      if (offering.title !== "" || offering.description !== "") {
        setShowHeader(true);
        break;
      } else if (idx === props.offerings.length - 1) {
        setShowHeader(false);
      }
    }
  };

  const onOfferingsContainerWheel = (event) => {
    event.preventDefault();

    const container = document.getElementById(
      "card-business-products-services-container"
    );
    const containerScrollPosition = document.getElementById(
      "card-business-products-services-container"
    ).scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behaviour: "smooth",
    });
  };

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
          {offering.photos.length > 0 ? (
            //<img className="preview-card-offering-photo" src={offering.photos[0].url}/>
            <AwesomeSlider bullets={false}>
              {renderOfferingSliderImages(offering)}
            </AwesomeSlider>
          ) : null}
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
  };

  return (
    <Fragment>
      {!showHeader ||
      !props.offerings ||
      props.offerings.length === 0 ? null : (
        <div className="card-business-products-services-title-text">
          Products &amp; Services
        </div>
      )}
      <div
        className="card-business-products-services-container"
        id="card-business-products-services-container"
        onWheel={onOfferingsContainerWheel}
        ref={offeringsContainer}
      >
        {!showHeader || !props.offerings || props.offerings.length === 0
          ? null
          : renderOfferings()}
      </div>
    </Fragment>
  );
};

export default CardOfferings;
