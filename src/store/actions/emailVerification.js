import { API_BASE_URL } from '../../constants/urls';

export const SET_EMAIL_VERIFICATION = "SET_EMAIL_VERIFICATION";

export const setEmailVerification = () => {
  return {
    type: SET_EMAIL_VERIFICATION,
  };
};

export const verifyEmail = (token) => {
  return (dispatch) => {

    const reqObj = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      }
    };

    fetch(`${API_BASE_URL}/verify-email/${token}`, reqObj)
      .then((resp) => resp.json())
      .then((verification) => {
        dispatch({ type: SET_EMAIL_VERIFICATION, emailVerification: verification });
      });
  };
};