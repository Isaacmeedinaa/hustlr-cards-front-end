import React, { Component } from "react";

import { Animated } from "react-animated-css";
import Select from "react-select";

import { connect } from "react-redux";
import { setCard } from "../../store/actions/card";

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
      industry: "",
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
      userId: nextProps.cardData.userId,
      photos: nextProps.cardData.photos,
    });
  }

  handleImageSelectorClick = (event) => {
    event.preventDefault();
    this.fileSelector.click();
  };

  renderIndustryOptions = () => {
    return this.props.industries.map((industry) => (
      <option key={industry.id} value={industry.id}>
        {industry.name}
      </option>
    ));
  };

  setCardHandler = () => {
    this.props.setCard(
      this.state.id,
      this.state.title,
      this.state.services,
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
        name: event.label,
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

  render() {
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
            <form className="card-form" onSubmit={() => {}}>
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
                    (option) => option.label === this.state.industry.name
                  )}
                  onChange={this.cardFormSelectorChangeHandler}
                />
              </div>
              <textarea
                className="card-form-input-large"
                name="services"
                placeholder="Business Services"
                value={this.state.services}
                onChange={this.cardFormInputChangeHandler}
              />
              <div className="card-form-contact-fields">
                <input
                  id="cardFormInputPhoneNumber"
                  className="card-form-input-contact"
                  name="phoneNumber"
                  placeholder="+1 (773) 555-0000"
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
                  {this.state.isHidden ? "+ Edit Social Media Links" : "Close"}
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
              <input
                className="card-form-input"
                placeholder="https://your_username.hngr.co/"
                name="pathToCard"
                value={this.state.pathToCard}
                onChange={this.cardFormInputChangeHandler}
              />
            </form>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardForm);
