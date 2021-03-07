import React, { Fragment } from "react";

import { useSelector } from "react-redux";

import SideToolbar from "../UI/SideToolbar";
import StandardTopToolbar from "../UI/StandardTopToolbar";
import BottomToolbar from "../UI/BottomToolbar";
import Reviews from "../UI/reviews/HustlrCardReviews";
import EditReviewModal from "../UI/reviews/modals/HustlrCardReviewModal";

import { FETCH_REVIEWS_BY } from "../../constants/urls";
import { GIVEN_REVIEWS } from "../../store/actions/tabs/reviewsTabs";

import "./pages.css";
import "../../constants/colors.css";

const ReviewsPage = (props) => {

  const cardData = useSelector(state => state.card.cardData)
  const userIsHustlr = useSelector(state => state.user.isHustlr)
  const selectedTab = useSelector((state) => state.reviewsTabs);

  return (
    <Fragment>
      <EditReviewModal />
      { !userIsHustlr ? <StandardTopToolbar history={props.history}/> : null }
      <div className="grid-container-reviews">
        <SideToolbar
          pathname={props.location.pathname}
          history={props.history}
        />
        <div className="secondary-light-bg reviews-col-wrapper">

          <div className={userIsHustlr ? "reviews-col-container-less-padding" : "reviews-col-container-more-padding"}>
          {
              userIsHustlr ?
              selectedTab === GIVEN_REVIEWS ? 
                <Reviews title="Reviews you have given" 
                  fetchReviewsBy={ FETCH_REVIEWS_BY.userId }
                  publicReviews={false}/> : 
                (!cardData || cardData.pathToCard === "") ? null : 
                <Reviews title="Reviews you have received" 
                  fetchReviewsBy={ FETCH_REVIEWS_BY.cardPath }
                  publicReviews={false}/> 
              :
              <Reviews title="Your Reviews" 
                fetchReviewsBy={ FETCH_REVIEWS_BY.userId }
                publicReviews={false}/> 

            }
          </div>
        </div>
      </div>
        <BottomToolbar
          pathname={props.location.pathname}
          history={props.history}
        />
      </Fragment>
    );
}

export default ReviewsPage;
