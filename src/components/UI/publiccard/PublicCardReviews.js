import React, { Fragment, useRef, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";

// import { openViewImagesModal } from "../../../store/actions/modals/viewImagesModal";
import { showToast } from "../Toasts";

import {
  hideHustlrCardReviewSavedNotification,
  hideHustlrCardReviewDeletedNotification,
} from "../../../store/actions/notifications/hustlrCardReviewNotifications";

// import Carousel from "react-bootstrap/Carousel";
// import { addWidthToImgUrl } from "../../../services/ImgUrlParser";
import HustlrCardReview from "../reviews/HustlrCardReview";

import "../../../constants/colors.css";
import "./PublicCardUI.css";

const PublicCardReviews = (props) => {
  const dispatch = useDispatch();
  const reviewsContainer = useRef();

  const hustlrCardReviewNotifications = useSelector(
    (state) => state.hustlrCardReviewNotifications
  );

  useEffect(() => {
    if (hustlrCardReviewNotifications.saved.show) {
      showToast(
        hustlrCardReviewNotifications.saved.success,
        hustlrCardReviewNotifications.saved.message
      );
      dispatch(hideHustlrCardReviewSavedNotification());
    }
    if (hustlrCardReviewNotifications.deleted.show) {
      showToast(
        hustlrCardReviewNotifications.deleted.success,
        hustlrCardReviewNotifications.deleted.message
      );
      dispatch(hideHustlrCardReviewDeletedNotification());
    }
  }, [dispatch, hustlrCardReviewNotifications]);

  useEffect(() => {
    if (reviewsContainer.current !== undefined) {
      reviewsContainer.current.addEventListener(
        "wheel",
        onReviewsContainerWheel,
        {
          passive: false,
        }
      );
    }
  }, [reviewsContainer]); 

  if (!props.reviews || props.reviews.length === 0) {
    return null;
  }

  const onReviewsContainerWheel = (event) => {
    event.preventDefault();

    const container = document.getElementById(
      "public-card-reviews"
    );

    const containerScrollPosition = document.getElementById(
      "public-card-reviews"
    ).scrollLeft;

    container.scrollTo({
      top: 0,
      left: containerScrollPosition + event.deltaY,
      behaviour: "smooth",
    });
  };

  // const onReviewImageClick = (images, currentImgUrl, currentImgIndex) => {
  //   props.setImagesData(images, currentImgUrl, currentImgIndex);
  //   dispatch(openViewImagesModal());
  // };

  // const renderReviewSliderImages = (review) => {
  //   return review.photos.map((photo, index) => (
  //     <Carousel.Item key={photo.id}>
  //       <img
  //         style={{
  //           objectFit: "cover",
  //           height: 250,
  //           width: "100%",
  //           borderTopLeftRadius: 10,
  //           borderTopRightRadius: 10,
  //           backgroundRepeat: "no-repeat",
  //           backgroundPosition: "center",
  //         }}
  //         srcSet={`${addWidthToImgUrl(photo.url, 320)} 320w, ${addWidthToImgUrl(
  //           photo.url,
  //           640
  //         )} 640w, ${addWidthToImgUrl(photo.url, 1280)} 1280w`}
  //         sizes={"(max-width: 650px) 67vw, (min-width: 651px) 412px, 412px"}
  //         onClick={() =>
  //           onReviewImageClick(review.photos, photo.url, index)
  //         }
  //         alt="img"
  //       />
  //     </Carousel.Item>
  //   ));
  // };

  const renderReviews = () => {
    return props.reviews.map((review) => (
      <HustlrCardReview
        key={review.id}
        hustlrCardReview={review}
        primaryColor={props.primaryColor}
        transparentColor={props.transparentColor}
      />
    ));
  };

  return (
    <Fragment>
      { !props.reviews ||
        props.reviews.length === 0 ? null : (
          <div className="public-card-products-services-title-container">
            <h4 className="ui horizontal divider header">
              <span className="public-card-products-services-title-text">
                Reviews
              </span>
            </h4>
          </div>
        )}
      <div className="public-card-reviews"
        id="public-card-reviews"
        ref={reviewsContainer}
        onWheel={onReviewsContainerWheel}>
        {props.reviews.length === 0 ? null : renderReviews()}
      </div>
    </Fragment>
  );
}

export default PublicCardReviews;