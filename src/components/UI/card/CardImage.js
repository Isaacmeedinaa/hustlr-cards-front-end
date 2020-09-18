import React from "react";

import Loader from "react-loader-spinner";

import "../../../constants/colors.css";
import "../UI.css";

const CardImage = (props) => {
  if (!props.imgUrl) {
    return null;
  }

  return (
    <div className="primary-color-bg card-business-img-container">
      {props.cardImageLoader ? (
        <Loader type="TailSpin" color="#fff" width={50} height={50} />
      ) : (
        <img
          className="card-business-img"
          src={props.imgUrl}
          alt="business-profile"
        />
      )}
    </div>
  );
};

export default CardImage;
