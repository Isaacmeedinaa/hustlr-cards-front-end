import React from "react";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardName = (props) => {
  if (!props.title || props.title === null) return null;
  return (
    <h1 className="public-card-name"
    style={{
      marginTop:
        !props.profileImgUrl || props.profileImgUrl === "" ? 50 : 15,
    }}>
      {props.title}
    </h1>
  );
};

export default PublicCardName;
