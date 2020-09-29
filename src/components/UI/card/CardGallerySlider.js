import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";

import "../../../constants/colors.css";
import "../UI.css";
import "react-awesome-slider/dist/styles.css";

class CardGallerySlider extends Component {
  renderGallerySliderImages = () => {
    return this.props.photos.map((photo) => (
      <div key={photo.id} data-src={photo.url}></div>
    ));
  };

  render() {
    return (
      <div className="card-business-gallery-slider-container">
        <AwesomeSlider bullets={false}>
          {this.renderGallerySliderImages()}
        </AwesomeSlider>
      </div>
    );
  }
}

export default CardGallerySlider;
