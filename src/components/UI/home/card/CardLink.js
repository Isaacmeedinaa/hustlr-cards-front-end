import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CopyToClipboard } from "react-copy-to-clipboard";

import "../../../../constants/colors.css";
import "./CardUI.css";

const CardLink = (props) => {
  const [pathState, setPathState] = useState(props.pathToCard);
  const [isCopied, setIsCopied] = useState(false);
  const [disableCopy, setIsDisableCopy] = useState(false);

  const cardSaved = useSelector((state) => state.cardSaved);

  useEffect(() => {
    const card = JSON.parse(localStorage.getItem("card"));

    if (card.pathToCard === props.pathToCard) {
      setPathState(props.pathToCard);
    }
  }, [props.pathToCard, cardSaved]);

  if (!pathState || pathState === "") {
    return null;
  }

  const onCopySuccessChange = () => {
    if (disableCopy) {
      return;
    } else {
      setIsCopied(true);
      setIsDisableCopy(true);
      setTimeout(() => {
        setIsCopied(false);
        setIsDisableCopy(false);
      }, 3000);
    }
  };

  return (
    <Fragment>
      {isCopied ? (
        <span className="card-business-link-copied-text">Copied!</span>
      ) : null}
      <CopyToClipboard
        text={`https://www.hustlr.cards/${pathState}`}
        onCopy={onCopySuccessChange}
      >
        <div
          style={{ backgroundColor: props.transparentColor, cursor: "pointer" }}
          className="card-business-link-container"
        >
          <span style={{ cursor: "pointer" }}>
            <b>Copy My Card URL</b>
          </span>
          <span
            style={{
              color: props.primaryColor,
              marginTop: 5,
              cursor: "pointer",
            }}
            className="card-business-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.hustlr.cards/{pathState}
          </span>
        </div>
      </CopyToClipboard>
    </Fragment>
  );
};

export default CardLink;
