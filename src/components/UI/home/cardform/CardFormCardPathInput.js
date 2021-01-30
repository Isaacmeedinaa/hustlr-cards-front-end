import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCardPath } from "../../../../store/actions/card";

import { formFields } from "../../../../constants/formFields";

import "../../../../constants/colors.css";
import "./CardFormUI.css";
import { Fragment } from "react";

const CardFormCardPathInput = () => {
  const dispatch = useDispatch();

  const pathToCardRedux = useSelector(
    (state) => state.card.cardData.pathToCard
  );
  const formErrors = useSelector((state) => state.formErrors);

  const [pathToCard, setPathToCard] = useState(pathToCardRedux);
  const [error, setError] = useState(null);

  useEffect(() => {
    const error = formErrors.find(
      (formError) => formError.field === formFields.cardPath
    );

    if (error) {
      setError(error);
    } else {
      setError(error);
    }
  }, [formErrors]);

  useEffect(() => {
    dispatch(setCardPath(pathToCard));
  }, [pathToCard, dispatch]);

  return (
    <Fragment>
      <div className="card-form-path-to-card-container">
        <p className="primary-color card-form-path-to-card-url">
          https://www.hustlr.cards/
        </p>
        <input
          className="card-form-path-to-card-input"
          style={{
            border: error ? "solid 1px red" : null,
          }}
          placeholder="your-link-here"
          value={pathToCard}
          onChange={(event) => setPathToCard(event.target.value)}
        />
      </div>
      {error ? (
        <p className="card-form-path-error-text">{error.message}</p>
      ) : null}
    </Fragment>
  );
};

export default CardFormCardPathInput;
