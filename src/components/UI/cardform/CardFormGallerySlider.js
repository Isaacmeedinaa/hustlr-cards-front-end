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

  componentDidUpdate(prevProps) {
    if (this.props.photos.length !== prevProps.photos.length) {
      this.setState({
        photos: this.props.photos,
      });
    }
  }

  renderSliderImages = () => {
    return this.state.photos.map((photo) => (
      <div
        key={photo.id}
        style={{
          backgroundImage: `url('${photo.url}')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <button onClick={() => console.log(photo.id)}>hi</button>
      </div>
    ));
  };

  render() {
    return (
      <div className="card-form-gallery-slider-container">
        <AwesomeSlider bullets={false}>
          {this.renderSliderImages()}
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
