import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const CardImage = (props) => {
  if (!props.imgUrl) {
    return null;
  }

  return (
    <div className="primary-color-bg card-business-img-container">
      <img
        className="card-business-img"
        src={props.imgUrl}
        alt="business-profile"
      />
    </div>
  );
};

export default CardImage;
