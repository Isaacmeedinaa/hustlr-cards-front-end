import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { userAutoLogin } from "../../store/actions/user";
import { cardIsSaved, cardIsNotSaved } from "../../store/actions/cardSaved";
import { fetchIndustries } from "../../store/actions/industries";

import CardFormImageCropperModal from "../UI/home/cardform/CardFormImageCropperModal";
import SideToolbar from "../UI/SideToolbar";
import TopToolbar from "../UI/home/TopToolbar";
import BottomToolbar from "../UI/BottomToolbar";
import CardForm from "../UI/home/cardform/CardForm";
import Card from "../UI/home/card/Card";

import Loader from "react-loader-spinner";

import "../../constants/colors.css";
import "./pages.css";

class HomeContainer extends Component {
  componentDidMount() {
    if (this.props.industries.length === 0) {
      this.props.fetchIndustries();
    }
  }

  componentDidUpdate() {
    const keysToCompare = [
      "title",
      "description",
      "city",
      "state",
      "email",
      "phoneNumber",
      "pathToCard",
      "isPublic",
      "facebookLink",
      "instagramLink",
      "snapchatLink",
      "twitterLink",
      "themeId",
      "industryId",
    ];
    const localStorageCard = JSON.parse(localStorage.getItem("card"));

    if (this.props.cardData.id === null) return;

    for (const key in localStorageCard) {
      if (localStorageCard.hasOwnProperty(key)) {
        if (
          Array.isArray(localStorageCard[key]) ||
          typeof localStorageCard[key] === "object"
        ) {
          if (key === "location") {
            if (
              localStorageCard[key]?.googlePlaceId !==
              this.props.cardData[key]?.googlePlaceId
            ) {
              this.props.cardIsNotSaved();
              return;
            }
          } else if (key === "industry") {
            if (localStorageCard[key]?.id !== this.props.cardData[key]?.id) {
              this.props.cardIsNotSaved();
              return;
            }
          } else if (key === "offerings") {
            for (let i = 0; i < localStorageCard.offerings.length; i++) {
              let foundChanges = false;
              this.props.cardData.offerings.forEach((offeringRedux) => {
                if (
                  offeringRedux.id === localStorageCard.offerings[i].id &&
                  (offeringRedux.title !==
                    localStorageCard.offerings[i].title ||
                    offeringRedux.price !==
                      localStorageCard.offerings[i].price ||
                    offeringRedux.description !==
                      localStorageCard.offerings[i].description)
                ) {
                  this.props.cardIsNotSaved();
                  foundChanges = true;
                  return; // this only breaks from forEach loop, that's why we need the boolean
                }
              });
              if (foundChanges) return;
            }
          } else {
            continue;
          }
        } else if (
          localStorageCard[key] !== this.props.cardData[key] &&
          keysToCompare.indexOf(key) > -1
        ) {
          this.props.cardIsNotSaved();
          return;
        }
      }
    }
    this.props.cardIsSaved();
  }

  render() {
    if (this.props.cardLoader || this.props.industriesLoader) {
      return (
        <div className="page-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        </div>
      );
    }

    return (
      <Fragment>
        {this.props.imageCropperModal.openModal ? (
          <CardFormImageCropperModal />
        ) : null}
        <TopToolbar />
        <div className="grid-container-home">
          <SideToolbar
            pathname={this.props.location.pathname}
            history={this.props.history}
          />
          <Fragment>
            <div className="secondary-light-bg card-form-col-wrapper">
              <div className="card-form-col-container">
                <CardForm />
              </div>
            </div>
            <div className="secondary-light-bg card-show-col-wrapper">
              <div className="card-show-col-container">
                <Card />
              </div>
            </div>
          </Fragment>
        </div>
        <BottomToolbar
          pathname={this.props.location.pathname}
          history={this.props.history}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cardData: state.card.cardData,
    cardLoader: state.cardLoader,
    industries: state.industries.dropdownIndustries,
    industriesLoader: state.industriesLoader,
    imageCropperModal: state.imageCropperModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAutoLogin: (history) => dispatch(userAutoLogin(history)),
    cardIsSaved: () => dispatch(cardIsSaved()),
    cardIsNotSaved: () => dispatch(cardIsNotSaved()),
    fetchIndustries: () => dispatch(fetchIndustries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
