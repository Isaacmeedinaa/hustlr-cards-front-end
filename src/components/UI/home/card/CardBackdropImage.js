import React from "react";

import Loader from "react-loader-spinner";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardBackdropImage = (props) => {
  if (!props.backdropImgUrl || props.backdropImgUrl === "") {
    return null;
  }

  return (
    <div
      className="card-business-backdrop-image-container"
      style={{
        backgroundImage: props.cardBackdropImageLoader
          ? null
          : `url(${props.backdropImgUrl})`,
      }}
    >
      {props.cardBackdropImageLoader ? (
        <div className="card-business-backdrop-image-spinner-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={50} height={50} />
        </div>
      ) : null}
    </div>
  );
};

export default CardBackdropImage;
