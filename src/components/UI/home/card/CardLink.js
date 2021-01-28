import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { CopyToClipboard } from "react-copy-to-clipboard";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
      <div className="card-business-link-buttons-container">
        <CopyToClipboard
          text={`https://www.hustlr.cards/${pathState}`}
          onCopy={onCopySuccessChange}
        >
          <div
            style={{
              backgroundColor: props.transparentColor,
              cursor: "pointer",
              marginRight: 10,
            }}
            className="card-business-link-small-container"
            id="cardBusinessLinkSmallContainerCopy"
          >
            <FontAwesomeIcon
              style={{
                color: props.primaryColor,
                marginRight: 5,
                marginTop: 1,
              }}
              icon={faCopy}
            />
            <span style={{ cursor: "pointer", marginLeft: 5 }}>
              <b>Copy My Card URL</b>
            </span>
          </div>
        </CopyToClipboard>
        <div
          style={{
            backgroundColor: props.transparentColor,
            cursor: "pointer",
            marginLeft: 10,
          }}
          className="card-business-link-small-container"
          id="cardBusinessLinkSmallContainerExternalLink"
        >
          <FontAwesomeIcon
            style={{ color: props.primaryColor, marginRight: 5, marginTop: 1 }}
            icon={faExternalLinkAlt}
          />
          <a
            style={{
              color: props.primaryColor,
              cursor: "pointer",
              marginLeft: 5,
            }}
            className="card-business-link-text"
            href={`https://hustlr.cards/${pathState}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go To My Card URL
          </a>
        </div>
      </div>
      <div
        style={{ backgroundColor: props.transparentColor }}
        className="card-business-link-container"
      >
        <span className="card-business-link">{`https://hustlr.cards/${pathState}`}</span>
      </div>
    </Fragment>
  );
};

export default CardLink;
