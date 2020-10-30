import React from "react";

import "../../../constants/colors.css";
import "../UI.css";

const PublicCardImage = (props) => {
  return (
    <img
      src={props.imgUrl}
      style={{
        marginTop:
          !props.backdropImgUrl || props.backdropImgUrl === "" ? 0 : -65,
      }}
      className="public-card-image"
      alt="profile_pic"
    />
  );
};

export default PublicCardImage;