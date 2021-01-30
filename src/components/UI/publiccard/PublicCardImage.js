import React from "react";

import { addWidthToImgUrl } from "../../../services/ImgUrlParser";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardImage = (props) => {
  if (!props.imgUrl) {
    return null;
  }

  return (
        <img
        className="public-card-image"
        alt="profile_pic"
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

export default PublicCardImage;
