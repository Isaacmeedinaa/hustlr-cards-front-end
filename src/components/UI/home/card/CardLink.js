import React from "react";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardLink = (props) => {
  return (
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-link-container"
    >
      <a
        href={"https://www.hustlr.cards/" + props.pathToCard}
        style={{ color: props.primaryColor }}
        className="card-business-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.hustlr.cards/{props.pathToCard}
      </a>
    </div>
  );
};

export default CardLink;
