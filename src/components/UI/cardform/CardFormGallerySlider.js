import React, { Component } from "react";

import AwesomeSlider from "react-awesome-slider";

import { connect } from "react-redux";

import "../../../constants/colors.css";
import "../UI.css";
import "react-awesome-slider/dist/styles.css";

class CardFormGallerySlider extends Component {
  state = {
    photos: this.props.photos,
  };

  renderSliderPhotos = () => {
    return this.state.photos.map((photo) => {
      return <div key={photo.id} data-src={photo.url}></div>;
    });
  };

  render() {
    return (
      <div className="card-form-gallery-slider-container">
        <AwesomeSlider className="card-form-gallery-slider" bullets={false}>
          {this.renderSliderPhotos()}
        </AwesomeSlider>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: state.card.cardData.photos,
  };
};

export default connect(mapStateToProps)(CardFormGallerySlider);
