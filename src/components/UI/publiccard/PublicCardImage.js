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
      src={addWidthToImgUrl(props.imgUrl, 130)}
      style={{
        marginTop:
          !props.backdropImgUrl || props.backdropImgUrl === "" ? 30 : -65,
      }}
      className="public-card-image"
      alt="profile_pic"
    />
  );
};

export default PublicCardImage;
