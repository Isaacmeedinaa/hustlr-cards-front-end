import React, { Component, Fragment } from "react";

import { Animated } from "react-animated-css";
import Select from "react-select";

import { connect } from "react-redux";
import {
  setCard,
  addProductService,
  deleteProductService,
} from "../../store/actions/card";

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
      services: "",
      productsServices: [],
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
      services: nextProps.cardData.services,
      productsServices: nextProps.cardData.productsServices,
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
      this.state.services,
      this.state.productsServices,
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

  renderServiceProductInputs = () => {
    return this.state.productsServices.map((productService, index) => {
      return (
        <div key={index} className="card-form-products-services-container">
          <div className="card-form-product-service-inputs-container">
            <input
              className="card-form-product-service-title-input"
              placeholder="Product or Service Title"
              value={productService.title}
              onChange={(event) =>
                this.cardFormProductServiceTitleChangeHandler(index, event)
              }
            />
            <p className="primary-color card-form-product-service-text">$</p>
            <input
              className="card-form-product-service-price-input"
              placeholder="0.00"
              value={productService.price}
              onChange={(event) =>
                this.cardFormProductServicePriceChangeHandler(index, event)
              }
            />
          </div>
          <div className="card-form-product-service-buttons-container">
            <button
              className="primary-color card-form-produdct-service-button"
              id="cardFormProductServiceDeleteBtn"
              onClick={() =>
                this.props.deleteProductService(productService.id, index)
              }
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  };

  cardFormProductServiceTitleChangeHandler = async (index, event) => {
    const productsServices = [...this.state.productsServices];

    const productService = productsServices[index];

    productService.title = event.target.value;

    await this.setState({
      productsServices: productsServices,
    });

    this.setCardHandler();
  };

  cardFormProductServicePriceChangeHandler = async (index, event) => {
    const productsServices = [...this.state.productsServices];

    const productService = productsServices[index];

    productService.price = event.target.value;

    await this.setState({
      productsServices: productsServices,
    });

    this.setCardHandler();
  };

  render() {
    console.log(this.props.cardData.productsServices);
    if (this.props.loader) {
      return null;
    }
    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div className="primary-light-bg card-form-wrapper">
          <div className="card-form-container">
            <div className="primary-color-bg card-form-business-img-container">
              <img className="card-form-business-img" src={this.state.imgUrl} />
            </div>
            <div
              className="card-form-button"
              onClick={this.handleImageSelectorClick}
            >
              <span className="primary-color card-form-button-text">
                Choose New Photo
              </span>
            </div>
            <input
              className="card-form-input"
              name="title"
              placeholder="Business Name"
              value={this.state.title}
              onChange={this.cardFormInputChangeHandler}
            />
            <div className="card-form-location-fields">
              <input
                className="card-form-input-location"
                name="city"
                placeholder="City"
                value={this.state.city}
                onChange={this.cardFormInputChangeHandler}
              />
              <input
                id="cardFormInputState"
                className="card-form-input-location"
                name="state"
                placeholder="State"
                value={this.state.state}
                onChange={this.cardFormInputChangeHandler}
              />
            </div>
            <div className="card-form-dropdown-container">
              <Select
                classNamePrefix="card-form-dropdown"
                theme={(theme) => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary25: "#f1f1f1",
                    primary: "rgba(255, 83, 73, 0.3)",
                  },
                })}
                options={this.props.dropdownIndustries}
                value={this.props.dropdownIndustries.filter(
                  (industry) =>
                    industry.label === this.props.cardData.industry.title
                )}
                onChange={this.cardFormSelectorChangeHandler}
              />
            </div>
            <textarea
              className="card-form-input-large"
              name="services"
              placeholder="Business Bio"
              value={this.state.services}
              onChange={this.cardFormInputChangeHandler}
            />
            <div
              className="card-form-button"
              onClick={() => this.props.addProductService()}
            >
              <span className="primary-color card-form-button-text">
                + Add Products or Services
              </span>
            </div>
            {this.renderServiceProductInputs()}
            <div className="card-form-contact-fields">
              <input
                id="cardFormInputPhoneNumber"
                className="card-form-input-contact"
                name="phoneNumber"
                placeholder="+1 (773) 555-0000"
                maxLength={16}
                value={this.state.phoneNumber}
                onChange={this.cardFormInputChangeHandler}
              />
              <input
                id="cardFormInputEmail"
                className="card-form-input-contact"
                name="email"
                placeholder="youremail@email.com"
                value={this.state.email}
                onChange={this.cardFormInputChangeHandler}
              />
            </div>
            <div
              className="card-form-button"
              onClick={this.showSocialMediaLinks}
            >
              <span className="primary-color card-form-button-text">
                {this.state.isHidden ? "Edit Social Media Links" : "Close"}
              </span>
            </div>
            {this.state.isHidden ? null : (
              <Animated
                className="card-form-social-media-inputs-animation-wrapper"
                animationIn="bounceIn"
                animationOut="fadeOut"
                isVisible={true}
              >
                <div className="card-form-social-media-inputs-container">
                  <input
                    className="card-form-social-media-input"
                    name="facebookLink"
                    placeholder="https://www.facebook.com/your_username"
                    value={this.state.facebookLink}
                    onChange={this.cardFormInputChangeHandler}
                  />
                  <input
                    className="card-form-social-media-input"
                    name="instagramLink"
                    placeholder="https://www.instagram.com/your_username"
                    value={this.state.instagramLink}
                    onChange={this.cardFormInputChangeHandler}
                  />
                  <input
                    className="card-form-social-media-input"
                    name="twitterLink"
                    placeholder="https://www.twitter.com/your_username"
                    value={this.state.twitterLink}
                    onChange={this.cardFormInputChangeHandler}
                  />
                  <input
                    className="card-form-social-media-input"
                    name="snapchatLink"
                    placeholder="https://www.snapchat.com/add/your_username"
                    value={this.state.snapchatLink}
                    onChange={this.cardFormInputChangeHandler}
                  />
                </div>
              </Animated>
            )}
            <div className="card-form-path-to-card-container">
              <div>
                <p className="primary-color card-form-path-to-card-url">
                  https://www.hustlr.cards/
                </p>
              </div>
              <input
                className="card-form-path-to-card-input"
                placeholder="Business Username"
                name="pathToCard"
                value={this.state.pathToCard}
                onChange={this.cardFormInputChangeHandler}
              />
            </div>
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
      services,
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
          services,
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
    addProductService: () => dispatch(addProductService()),
    deleteProductService: (id, index) =>
      dispatch(deleteProductService(id, index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
