import { IS_LOADING, IS_NOT_LOADING } from "./loader";

export const FETCH_CARD = "FETCH_CARD";
export const SET_CARD = "SET_CARD";

export const fetchCard = () => {
  return (dispatch) => {
    dispatch({ type: IS_LOADING });
    fetch(`http://localhost:4000/cards/1`)
      .then((resp) => resp.json())
      .then((card) => {
        dispatch({ type: SET_CARD, card: card });
        localStorage.setItem("card", JSON.stringify(card));
        dispatch({ type: IS_NOT_LOADING });
      });
  };
};

export const setCard = (
  id,
  businessName,
  businessIndustry,
  businessServices,
  businessPhoneNumber,
  businessEmail,
  businessFBLink,
  businessIGLInk,
  businessTwitterLink,
  businessSCLink
) => {
  return {
    type: SET_CARD,
    card: {
      id,
      businessName,
      businessIndustry,
      businessServices,
      businessPhoneNumber,
      businessEmail,
      businessFBLink,
      businessIGLInk,
      businessTwitterLink,
      businessSCLink,
    },
  };
};

// export const setCard = (
//   businessName,
//   businessIndustry,
//   businessServices,
//   businessPhoneNumber,
//   businessEmail
// ) => {
//   return (dispatch) => {
//     dispatch({
//       type: SET_CARD,
//       card: {
//         businessName,
//         businessIndustry,
//         businessServices,
//         businessPhoneNumber,
//         businessEmail,
//       },
//     });

//     dispatch({
//       type: REHYDRATE,
//       card: {
//         businessName,
//         businessIndustry,
//         businessServices,
//         businessPhoneNumber,
//         businessEmail,
//       },
//     });
//   };
// };
