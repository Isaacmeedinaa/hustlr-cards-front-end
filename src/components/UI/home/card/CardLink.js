import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from 'react-redux';

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardLink = (props) => {
  const [pathState, setPathState] = useState(props.pathToCard);

  const cardSaved = useSelector(state => state.cardSaved);

  useEffect(() => {
    const card = JSON.parse(localStorage.getItem('card'));
    
    if ((card.pathToCard === props.pathToCard)) {
      setPathState(props.pathToCard);
    }
  }, [props.pathToCard, cardSaved]);

  if (!pathState || pathState === "") {
    return null;
  }

  return (
    <Fragment>
    <div
      style={{ backgroundColor: props.transparentColor }}
      className="card-business-link-container"
    >
      <b>Link to your card:</b> 
      <a
        href={"https://www.hustlr.cards/" + pathState}
        style={{ color: props.primaryColor, marginTop: '5px' }}
        className="card-business-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://www.hustlr.cards/{pathState}
      </a>
    </div>
    <div>
    </div>
    </Fragment>
  );
};

export default CardLink;
