import React, { Component, Fragment } from "react";
import Select from "react-select";
import Loader from "react-loader-spinner";

import { createLink, deleteLink } from "../../../../store/actions/card";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormSocialMediaInputs extends Component {
  state = {
    links: []
  };

  selectOptions() {
    return this.props.dropdownLinkTypes.map(linkType => {
      return { 
        value: linkType.value,
        label: <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={[linkType.iconPrefix, linkType.icon]} transform="grow-4" /> <span style={{marginLeft: '15px'}}>{linkType.label}</span></span>
      }
    })
  }

  onCardIndustryChangeHandler = async (event) => {

    let selectedId = null;
    let selectedLabel = null;

    if (event !== null && event !== undefined) {

      selectedId = parseInt(event.value);
      selectedLabel = event.label;

      console.log(selectedId, selectedLabel);
      this.props.createLink(selectedId);
    }
  };

  onDeleteLinkHandler = (link) => {
    this.props.deleteLink(link.id);
  }

  render() {
    console.log(this.props.links);
    return (
      <Fragment>
        <div className="card-form-dropdown-container">
          <Select
            className="card-form-dropdown"
            classNamePrefix="card-form-dropdown"
            isSearchable={false}
            isClearable={true}
            isLoading={this.props.creatingLoader}
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
            options={this.selectOptions()}
            onChange={this.onCardIndustryChangeHandler}
          />
      </div>

         { this.props.links.length > 0 ?
          <div className="card-form-social-media-inputs-container">
              {this.props.links.map((link) => {
                return (
                  <div key={link.id} className="card-form-social-media-input-group">
                    <span style={{position: 'relative', float: 'left', top: 30, left: 10}} >
                      <FontAwesomeIcon 
                        icon={[link.type.iconPrefix, link.type.icon]}
                        transform="grow-4"/>
                    </span>
                    <input
                      className="card-form-social-media-input"
                      placeholder={link.type.placeholder}
                      value={link.description}
                      onChange={this.onCardSocialMediaLinkChangeHandler}
                    />
                    <span 
                      className="card-form-delete-link"
                      onClick={() => this.onDeleteLinkHandler(link)}
                      > 
                      { this.props.deletingLoader && this.props.deletingLinkId == link.id ? 
                        <Loader type="TailSpin" color="#2ecc71" width={22} height={22} /> :
                        <FontAwesomeIcon 
                          icon={["fas", "minus-circle"]}
                          transform="grow-4"/>
                      }
                    </span>
                  </div>
                )
              })}
          </div>
        : null }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dropdownLinkTypes: state.dropdowns.dropdownLinkTypes,
    links: state.card.cardData.links,
    creatingLoader: state.linkLoader.creatingLoader,
    updatingLoader: state.linkLoader.updatingLoader,
    deletingLoader: state.linkLoader.deletingLoader,
    deletingLinkId: state.linkLoader.deletingLinkId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLink: (typeId) => dispatch(createLink(typeId)),
    deleteLink: (linkId) => dispatch(deleteLink(linkId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormSocialMediaInputs);
