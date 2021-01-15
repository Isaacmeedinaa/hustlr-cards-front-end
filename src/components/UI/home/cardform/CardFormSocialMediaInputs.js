import React, { Component, Fragment } from "react";
import Select from "react-select";

import { connect } from "react-redux";
import { setCardSocialMediaLinks } from "../../../../store/actions/card";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSnapchatGhost, faTwitter, faTwitch } from "@fortawesome/free-brands-svg-icons";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormSocialMediaInputs extends Component {
  state = {
    facebookLink: this.props.facebookLink,
    instagramLink: this.props.instagramLink,
    snapchatLink: this.props.snapchatLink,
    twitterLink: this.props.twitterLink,
    links: []
  };

  options = [
    { value: "instagram", label: <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={faInstagram} transform="grow-4" /> <span style={{marginLeft: '15px'}}>Instagram</span></span>},
    { value: "snapchat", label: <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={faSnapchatGhost} transform="grow-4"/> <span style={{marginLeft: '15px'}}>Snapchat</span></span>},
    { value: "twitch", label: <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={faTwitch} transform="grow-4"/> <span style={{marginLeft: '15px'}}>Twitch</span></span>},
    { value: "twitter", label: <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={faTwitter} transform="grow-4"/> <span style={{marginLeft: '15px'}}>Twitter</span></span> }
  ];

  onCardSocialMediaLinkChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });

    this.props.setCardSocialMediaLinks(
      this.state.facebookLink,
      this.state.instagramLink,
      this.state.twitterLink,
      this.state.snapchatLink
    );
  };

  render() {
    return (
      <Fragment>
        <div className="card-form-dropdown-container">
          <Select
            className="card-form-dropdown"
            classNamePrefix="card-form-dropdown"
            isClearable={true}
            styles={{
              control: (base, state) => ({
                ...base,
                background: "#f1f1f1",
                border: "none",
                boxShadow: null,
                fontWeight: 500,
              }),
              menu: (base) => ({
                ...base,
                color: "#000",
                boxShadow: "0px 5px 0px -1px #cdcdd2",
                borderRadius: 5,
                border: "1px solid #cdcdd2",
              }),
              option: (base, state) => ({
                ...base,
                color: state.isSelected ? "#2ecc71" : "black",
                backgroundColor: state.isSelected
                  ? "rgba(46, 204, 113, 0.25)"
                  : "white",
                "&:hover": {
                  backgroundColor: "#f1f1f1",
                  cursor: "pointer",
                },
                "&:active": {
                  color: "#2ecc71",
                  backgroundColor: "rgba(46, 204, 113, 0.25)",
                },
              }),
            }}
            placeholder={<div className="card-form-placeholder-color">Select link type</div>}
            options={this.options}
            value={this.options.value}
            onChange={this.onCardIndustryChangeHandler}
          />
      </div>

        {/* <div className="card-form-social-media-inputs-container">
          <input
            className="card-form-social-media-input"
            name="facebookLink"
            placeholder="Facebook Username"
            value={this.state.facebookLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
          <input
            className="card-form-social-media-input"
            name="instagramLink"
            placeholder="Instagram Username"
            value={this.state.instagramLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
          <input
            className="card-form-social-media-input"
            name="twitterLink"
            placeholder="Twitter Handle"
            value={this.state.twitterLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
          <input
            className="card-form-social-media-input"
            name="snapchatLink"
            placeholder="Snapchat Username"
            value={this.state.snapchatLink}
            onChange={this.onCardSocialMediaLinkChangeHandler}
          />
        </div> */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    facebookLink: state.card.cardData.facebookLink,
    instagramLink: state.card.cardData.instagramLink,
    snapchatLink: state.card.cardData.snapchatLink,
    twitterLink: state.card.cardData.twitterLink,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardSocialMediaLinks: (
      facebookLink,
      instagramLink,
      twitterLink,
      snapchatLink
    ) =>
      dispatch(
        setCardSocialMediaLinks(
          facebookLink,
          instagramLink,
          twitterLink,
          snapchatLink
        )
      ),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormSocialMediaInputs);
