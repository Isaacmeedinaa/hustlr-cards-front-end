import React from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardBackdropImage = (props) => {
  if (!props.backdropImgUrl || props.backdropImgUrl === "") {
    return null;
  }
  return (
    <img
      src={props.backdropImgUrl}
      className="public-card-backdrop-image"
      alt="backdrop_pic"
    />
  );
};

export default PublicCardBackdropImage;
