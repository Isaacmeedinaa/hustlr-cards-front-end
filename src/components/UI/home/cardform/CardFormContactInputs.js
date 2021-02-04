import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  setCardEmail,
  setCardPhoneNumber,
} from "../../../../store/actions/card";

import { formFields } from "../../../../constants/formFields";

import "../../../../constants/colors.css";
import "./CardFormUI.css";
import { Fragment } from "react";

const CardFormContactInputs = () => {
  const dispatch = useDispatch();

  const phoneNumberRedux = useSelector(
    (state) => state.card.cardData.phoneNumber
  );
  const emailRedux = useSelector((state) => state.card.cardData.email);
  const cardValidationErrors = useSelector(
    (state) => state.cardValidationErrors
  );

  const [phoneNumber, setPhoneNumber] = useState(phoneNumberRedux);
  const [email, setEmail] = useState(emailRedux);
  const [error, setError] = useState(null);

  useEffect(() => {
    const error = cardValidationErrors.find(
      (validationError) => validationError.field === formFields.cardEmail
    );

    if (error) {
      setError(error);
    } else {
      setError(error);
    }
  }, [cardValidationErrors]);

  useEffect(() => {
    dispatch(setCardPhoneNumber(phoneNumber));
    dispatch(setCardEmail(email));
  }, [phoneNumber, email, dispatch]);

  return (
    <Fragment>
      <div className="card-form-contact-fields">
        <input
          id="cardFormInputPhoneNumber"
          className="card-form-input-contact"
          name="phoneNumber"
          placeholder="+1 (773) 555-0000"
          maxLength={16}
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />
        <input
          id="cardFormInputEmail"
          className="card-form-input-contact"
          placeholder="youremail@email.com"
          style={{
            border: error ? "solid 1px red" : null,
          }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      {error ? (
        <p className="card-form-email-error-text">{error.message}</p>
      ) : null}
    </Fragment>
  );
};

export default CardFormContactInputs;
