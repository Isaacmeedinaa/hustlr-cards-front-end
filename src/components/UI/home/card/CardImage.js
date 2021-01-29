import React from "react";

import Loader from "react-loader-spinner";
import { addWidthToImgUrl } from "../../../../services/ImgUrlParser";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardImage = (props) => {
  if (!props.imgUrl) {
    return null;
  }

  return (
    <div
      className="primary-color-bg card-business-img-container"
      style={{
        backgroundImage: `url(${addWidthToImgUrl(props.imgUrl, 130)})`,
        marginTop:
          !props.backdropImgUrl || props.backdropImgUrl === "" ? 0 : -65,
      }}
    >
      {props.cardImageLoader ? (
        <Loader type="TailSpin" color="#fff" width={50} height={50} />
      ) : null}
    </div>
  );
};

export default CardImage;
