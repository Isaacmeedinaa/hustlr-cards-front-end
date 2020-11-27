import React, { Component, Fragment, createRef } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

class PublicCardOfferings extends Component {
  constructor() {
    super();

    this.offeringsContainer = createRef();
  }

  componentDidMount() {
    this.offeringsContainer.current.addEventListener(
      "wheel",
      this.onOfferingsContainerWheel,
      {
        passive: false,
      }
    );
  }

  componentWillUnmount() {
    this.offeringsContainer.current.removeEventListener(
      "wheel",
      this.onOfferingsContainerWheel
    );
  }

  renderOfferingSliderImages = (offering) => {
    return offering.photos.map((photo) => (
      <div key={photo.id} data-src={photo.url}></div>
    ));
  };

  renderOfferings = () => {
    return this.props.offerings.map((offering) => {
      if (
        (!offering.title || offering.title === "") &&
        (!offering.description || offering.description === "")
      ) {
        return null;
      }

      return (
        <div
          key={offering.id}
          style={{ backgroundColor: this.props.transparentColor }}
          className="public-card-product-service-container"
        >
          {offering.photos.length > 0 ? (
            //<img className="preview-card-offering-photo" src={offering.photos[0].url}/>
            <div className="slider-container">
              <AwesomeSlider bullets={false}>
                {this.renderOfferingSliderImages(offering)}
              </AwesomeSlider>
            </div>
          ) : null}
          <div className="public-card-offering-body">
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
        </div>
      );
    });
  };

  onOfferingsContainerWheel = (event) => {
    event.preventDefault();

    const container = document.getElementById(
      "public-card-products-services-container"
    );
    const containerScrollPosition = document.getElementById(
      "public-card-products-services-container"
    ).scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behaviour: "smooth",
    });
  };

  render() {
    return (
      <Fragment>
        {this.props.offerings.length === 0 ? null : (
          <div className="public-card-products-services-title-container">
            <h4 className="ui horizontal divider header">
              <span className="public-card-products-services-title-text">
                Products &amp; Services
              </span>
            </h4>
          </div>
        )}
        <div
          className="public-card-products-services-container"
          id="public-card-products-services-container"
          onWheel={this.onOfferingsContainerWheel}
          ref={this.offeringsContainer}
        >
          {this.props.offerings.length === 0 ? null : this.renderOfferings()}
        </div>
      </Fragment>
    );
  }
}

export default PublicCardOfferings;
