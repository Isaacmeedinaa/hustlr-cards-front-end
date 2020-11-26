import React, { Component, Fragment } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../../constants/colors.css";
import "./CardUI.css";
import "react-awesome-slider/dist/styles.css";

class CardGallerySlider extends Component {
  renderGallerySliderImages = () => {
    return this.props.photos.map((photo) => (
      <div key={photo.id} data-src={photo.url}></div>
    ));
  };

  render() {
    const view =
      this.props.photos.length === 0 ? null : (
        <Fragment>
          <div className="card-business-section-header-container">
            <h4 className="ui horizontal divider header">
              <span className="public-card-products-services-title-text">Gallery</span>
            </h4>
          </div>
          <div className="card-business-gallery-slider-container">
            <AwesomeSlider bullets={false}>
              {this.renderGallerySliderImages()}
            </AwesomeSlider>
          </div>
        </Fragment>
      );

    return view;
  }
}

export default CardGallerySlider;
