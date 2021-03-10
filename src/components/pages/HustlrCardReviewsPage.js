import React, { Fragment, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchPublicCard } from "../../store/actions/hustlrCard/publicCard";

import Loader from "react-loader-spinner";

import { FETCH_REVIEWS_BY } from "../../constants/urls";

import PrivateCard from "../UI/publiccard/PrivateCard";
import HustlrCardReviews from "../UI/reviews/HustlrCardReviews";
import HusltrCardReviewModal from "../UI/reviews/modals/HustlrCardReviewModal";
import AuthModal from "./Auth Pages/modals/AuthModal";

import "./pages.css";

const HustlrCardReviewsPage = (props) => {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const publicCard = useSelector((state) => state.publicCard);

  useEffect(() => {
    const pathname = props.match.params.pathToCard;
    const history = props.history;

    dispatch(fetchPublicCard(pathname, history));
  }, [dispatch, props.match.params.pathToCard, props.history]);

  if (!publicCard) {
    return (
      <div className="page-loader-container">
        <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
      </div>
    );
  }

  return (
    <Fragment>
      {!auth.isAuthenticated || !user ? (
        <AuthModal />
      ) : (
        <HusltrCardReviewModal />
      )}
      {!publicCard.isPublic ? (
        <PrivateCard />
      ) : (
        <div
          className="hustlr-card-reviews-page-wrapper"
          style={{ backgroundColor: publicCard.primaryColor }}
        >
          <HustlrCardReviews title="Reviews"
           fetchReviewsBy={FETCH_REVIEWS_BY.cardPath}
           publicReviews={true}/>
        </div>
      )}
    </Fragment>
  );
};

export default HustlrCardReviewsPage;
