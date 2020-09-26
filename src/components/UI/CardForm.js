import React, { Component } from "react";

import { Animated } from "react-animated-css";

import { connect } from "react-redux";
import { uploadBusinessProfilePicture } from "../../store/actions/card";

import CardFormImageSelector from "./cardform/CardFormImageSelector";
import CardFormTitleInput from "./cardform/CardFormTitleInput";
import CardFormLocationInputs from "./cardform/CardFormLocationInputs";
import CardFormIndustrySelect from "./cardform/CardFormIndustrySelect";
import CardFormDescriptionInput from "./cardform/CardFormDescriptionInput";
import CardFormAddOfferingButton from "./cardform/CardFormAddOfferingButton";
import CardFormOfferingInputs from "./cardform/CardFormOfferingInputs";
import CardFormContactInputs from "./cardform/CardFormContactInputs";
import CardFormShowSocialMediasButton from "./cardform/CardFormShowSocialMediasButton";
import CardFormSocialMediaInputs from "./cardform/CardFormSocialMediaInputs";
import CardFormCardPathInput from "./cardform/CardFormCardPathInput";

import "../../constants/colors.css";
import "./UI.css";

class CardForm extends Component {
  state = {
    isHidden: true,
    deleteModalShown: false,
    offerings: [],
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      offerings: nextProps.cardData.offerings,
    });
  }

  handleImageSelectorClick = (event) => {
    const reqImgData = event.target.files[0];
    const cardId = this.state.id;

    let reader = new FileReader();
    reader.readAsDataURL(reqImgData);

    this.props.uploadBusinessProfilePicture(reqImgData, cardId);
  };

  showSocialMediaLinks = async () => {
    await this.setState((prevState) => {
      return {
        isHidden: !prevState.isHidden,
      };
    });
  };

  renderOfferingsInputs = () => {
    return this.state.offerings.map((offering, index) => {
      return (
        <CardFormOfferingInputs
          key={offering.id}
          offering={offering}
          index={index}
          id={offering.id}
          title={offering.title}
          price={offering.price}
          cardId={offering.cardId}
        />
      );
    });
  };

  render() {
    console.log(this.props.cardErrors);
    if (this.props.cardLoader) {
      return null;
    }

    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg card-form-wrapper">
          <div className="card-form-container">
            {this.props.cardErrors.map((error, index) => (
              <p key={index} className="primary-color card-form-error-text">
                {error.message}
              </p>
            ))}
            <CardFormImageSelector />
            <CardFormTitleInput />
            <CardFormLocationInputs />
            <CardFormIndustrySelect />
            <CardFormDescriptionInput />
            <CardFormAddOfferingButton />
            {this.renderOfferingsInputs()}
            <CardFormContactInputs />
            <CardFormShowSocialMediasButton
              showSocialMediaLinks={this.showSocialMediaLinks}
              isHidden={this.state.isHidden}
            />
            {this.state.isHidden ? null : <CardFormSocialMediaInputs />}
            <CardFormCardPathInput />
          </div>
        </div>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardLoader: state.cardLoader,
    cardData: state.card.cardData,
    cardErrors: state.cardErrors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uploadBusinessProfilePicture: (imgData, cardId) =>
      dispatch(uploadBusinessProfilePicture(imgData, cardId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
