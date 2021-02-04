import React, { Fragment, useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setCardDescription } from "../../../../store/actions/card";

import { formFields } from "../../../../constants/formFields";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

const CardFormDescriptionInput = () => {
  const dispatch = useDispatch();

  const descriptionRedux = useSelector(
    (state) => state.card.cardData.description
  );
  const cardValidationErrors = useSelector(
    (state) => state.cardValidationErrors
  );

  const [description, setDescription] = useState(descriptionRedux);
  const [error, setError] = useState(null);

  useEffect(() => {
    const error = cardValidationErrors.find(
      (validationErrors) =>
        validationErrors.field === formFields.cardDescription
    );

    if (error) {
      setError(error);
    } else {
      setError(error);
    }
  }, [cardValidationErrors]);

  useEffect(() => {
    dispatch(setCardDescription(description));
  }, [description, dispatch]);

  return (
    <Fragment>
      <textarea
        className="card-form-input-large"
        style={{
          border: error ? "solid 1px red" : null,
        }}
        placeholder="Write your hook here!"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="card-form-description-text-container">
        {error ? (
          <p className="card-form-description-error-text">{error.message}</p>
        ) : null}
        <p
          className="card-form-description-count"
          style={{
            color: description.length > 500 ? "red" : null,
            width: error ? "20%" : "100%",
          }}
        >
          {description.length > 500
            ? `${500 - description.length}`
            : description.length}{" "}
          / 500
        </p>
      </div>
    </Fragment>
  );
};

export default CardFormDescriptionInput;
