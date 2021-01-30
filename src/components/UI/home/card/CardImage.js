import React from "react";

import { addWidthToImgUrl } from "../../../../services/ImgUrlParser";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardImage = (props) => {
  if (!props.imgUrl) {
    return null;
  }

  return (!props.imgUrl || props.imgUrl === '' ? 
        <div className="card-business-img-container" 
          style={{
            marginTop:
             !props.backdropImgUrl || props.backdropImgUrl === "" ? 30 : -65,
        }}></div>
        :
        <img
        className="card-business-img-container"
        alt="img"
        srcSet={`${addWidthToImgUrl(
          props.imgUrl,
          320
        )} 320w, ${addWidthToImgUrl(
          props.imgUrl,
          640
        )} 640w, ${addWidthToImgUrl(props.imgUrl, 1280)} 1280w`}
        sizes={"130px"}
        style={{
          marginTop:
            !props.backdropImgUrl || props.backdropImgUrl === "" ? 30 : -65,
        }}
      />
  );
};

export default CardImage;
