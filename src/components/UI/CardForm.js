import React, { Component, Fragment } from "react";

import { Animated } from "react-animated-css";

import { connect } from "react-redux";
import { setCard, addOffering, deleteOffering } from "../../store/actions/card";

import CardFormImageSelector from "./cardform/CardFormImageSelector";
import CardFormTitleInput from "./cardform/CardFormTitleInput";
import CardFormLocationInputs from "./cardform/CardFormLocationInputs";
import CardFormIndustrySelect from "./cardform/CardFormIndustrySelect";
import CardFormBioInput from "./cardform/CardFormBioInput";
import CardFormAddOfferingButton from "./cardform/CardFormAddOfferingButton";
import CardFormOfferingInput from "./cardform/CardFormOfferingInput";
import CardFormContactInputs from "./cardform/CardFormContactInputs";
import CardFormShowSocialMediasButton from "./cardform/CardFormShowSocialMediasButton";
import CardFormSocialMediaInputs from "./cardform/CardFormSocialMediaInputs";
import CardFormCardPathInput from "./cardform/CardFormCardPathInput";

import "../../constants/colors.css";
import "./UI.css";

function buildFileSelector() {
  const fileSelector = document.createElement("input");
  fileSelector.setAttribute("type", "file");
  return fileSelector;
}

class CardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: true,
      id: "",
      title: "",
      offerings: [],
      city: "",
      state: "",
      email: "",
      phoneNumber: "",
      imgUrl: "",
      pathToCard: "",
      isPublic: "",
      facebookLink: "",
      instagramLink: "",
      twitterLink: "",
      snapchatLink: "",
      themeId: "",
      industry: null,
      industryTitle: "",
      userId: "",
      photos: "",
    };
  }

  componentDidMount() {
    this.fileSelector = buildFileSelector();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      themeId: nextProps.cardData.themeId,
      id: nextProps.cardData.id,
      title: nextProps.cardData.title,
      offerings: nextProps.cardData.offerings,
      city: nextProps.cardData.city,
      state: nextProps.cardData.state,
      email: nextProps.cardData.email,
      phoneNumber: nextProps.cardData.phoneNumber,
      imgUrl: nextProps.cardData.imgUrl,
      pathToCard: nextProps.cardData.pathToCard,
      isPublic: nextProps.isPublic,
      facebookLink: nextProps.cardData.facebookLink,
      instagramLink: nextProps.cardData.instagramLink,
      twitterLink: nextProps.cardData.twitterLink,
      snapchatLink: nextProps.cardData.snapchatLink,
      themeId: nextProps.cardData.themeId,
      industry: nextProps.cardData.industry,
      industryTitle: nextProps.cardData.industry.title,
      userId: nextProps.cardData.userId,
      photos: nextProps.cardData.photos,
    });
  }

  handleImageSelectorClick = (event) => {
    event.preventDefault();
    this.fileSelector.click();
  };

  setCardHandler = () => {
    this.props.setCard(
      this.state.id,
      this.state.title,
      this.state.offerings,
      this.state.city,
      this.state.state,
      this.state.email,
      this.state.phoneNumber,
      this.state.imgUrl,
      this.state.pathToCard,
      this.state.isPublic,
      this.state.facebookLink,
      this.state.instagramLink,
      this.state.twitterLink,
      this.state.snapchatLink,
      this.state.themeId,
      this.state.industry,
      this.state.userId,
      this.state.photos
    );
  };

  cardFormInputChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });

    this.setCardHandler();
  };

  cardFormSelectorChangeHandler = async (event) => {
    await this.setState({
      ...this.state,
      industry: {
        id: parseInt(event.value),
        title: event.label,
      },
    });

    this.setCardHandler();
  };

  showSocialMediaLinks = () => {
    this.setState((prevState) => {
      return {
        isHidden: !prevState.isHidden,
      };
    });
  };

  renderOfferingsInputs = () => {
    return this.state.offerings.map((offering, index) => {
      return (
        <CardFormOfferingInput
          key={index}
          id={offering.id}
          title={offering.title}
          price={offering.price}
          index={index}
          cardFormOfferingTitleChangeHandler={
            this.cardFormOfferingTitleChangeHandler
          }
          cardFormOfferingPriceChangeHandler={
            this.cardFormOfferingPriceChangeHandler
          }
          deleteOffering={this.props.deleteOffering}
        />
      );
    });
  };

  cardFormOfferingTitleChangeHandler = async (index, event) => {
    const offerings = [...this.state.offerings];
    const offering = offerings[index];

    if (event.target.name === "offeringTitle") {
      offering.title = event.target.value;
    }

    await this.setState({
      offerings: offerings,
    });

    this.setCardHandler();
  };

  cardFormOfferingPriceChangeHandler = async (index, event) => {
    const offerings = [...this.state.offerings];
    const offering = offerings[index];

    if (event.target.name === "offeringPrice") {
      offering.price = event.target.value;
    }

    await this.setState({
      offerings: offerings,
    });

    this.setCardHandler();
  };

  render() {
    console.log(this.state.offerings);
    if (this.props.loader) {
      return null;
    }
    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg card-form-wrapper">
          <div className="card-form-container">
            <CardFormImageSelector
              imgUrl={this.state.imgUrl}
              handleImageSelectorClick={this.handleImageSelectorClick}
            />
            <CardFormTitleInput
              title={this.state.title}
              cardFormInputChangeHandler={this.cardFormInputChangeHandler}
            />
            <CardFormLocationInputs
              city={this.state.city}
              state={this.state.state}
              cardFormInputChangeHandler={this.cardFormInputChangeHandler}
            />
            <CardFormIndustrySelect
              dropdownIndustries={this.props.dropdownIndustries}
              industry={this.props.dropdownIndustries.filter(
                (industry) =>
                  industry.label === this.props.cardData.industry.title
              )}
              cardFormSelectorChangeHandler={this.cardFormSelectorChangeHandler}
            />
            <CardFormBioInput
              services={this.state.services}
              cardFormInputChangeHandler={this.cardFormInputChangeHandler}
            />
            <CardFormAddOfferingButton addOffering={this.props.addOffering} />
            {this.renderOfferingsInputs()}
            <CardFormContactInputs
              phoneNumber={this.state.phoneNumber}
              email={this.state.email}
              cardFormInputChangeHandler={this.cardFormInputChangeHandler}
            />
            <CardFormShowSocialMediasButton
              showSocialMediaLinks={this.showSocialMediaLinks}
              isHidden={this.state.isHidden}
            />
            {this.state.isHidden ? null : (
              <CardFormSocialMediaInputs
                facebookLink={this.state.facebookLink}
                instagramLink={this.state.instagramLink}
                twitterLink={this.state.twitterLink}
                snapchatLink={this.state.snapchatLink}
                cardFormInputChangeHandler={this.cardFormInputChangeHandler}
              />
            )}
            <CardFormCardPathInput
              pathToCard={this.state.pathToCard}
              cardFormInputChangeHandler={this.cardFormInputChangeHandler}
            />
          </div>
        </div>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
    cardData: state.card.cardData,
    cardTheme: state.card.cardTheme,
    originalIndustries: state.industries.originalIndustries,
    dropdownIndustries: state.industries.dropdownIndustries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCard: (
      id,
      title,
      offerings,
      city,
      state,
      email,
      phoneNumber,
      imgUrl,
      pathToCard,
      isPublic,
      facebookLink,
      instagramLink,
      twitterLink,
      snapchatLink,
      themeId,
      industry,
      userId,
      photos
    ) =>
      dispatch(
        setCard(
          id,
          title,
          offerings,
          city,
          state,
          email,
          phoneNumber,
          imgUrl,
          pathToCard,
          isPublic,
          facebookLink,
          instagramLink,
          twitterLink,
          snapchatLink,
          themeId,
          industry,
          userId,
          photos
        )
      ),
    addOffering: () => dispatch(addOffering()),
    deleteOffering: (id, index) => dispatch(deleteOffering(id, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
