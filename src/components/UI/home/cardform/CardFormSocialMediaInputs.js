import React, { Component, Fragment } from "react";
import Select from "react-select";

import { createLink, deleteLink, setLink, updateLink } from "../../../../store/actions/card";
import { hideLinkSavedNotification, hideLinkDeletedNotification } from "../../../../store/actions/notifications/socialMediaLinkNotifications";

import { showToast } from "../../Toasts";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardFormSocialMediaLink from './CardFormSocialMediaLink'

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormSocialMediaInputs extends Component {
  state = {
    links: [],
    selectValue: null
  };

  componentDidUpdate() {
    if (this.props.linkNotifications.saved.show) {
      this.displayNotification(
        this.props.linkNotifications.saved.success,
        this.props.linkNotifications.saved.message
      );
      this.props.hideLinkSavedNotification();
    }

    if (this.props.linkNotifications.deleted.show) {
      this.displayNotification(
        this.props.linkNotifications.deleted.success,
        this.props.linkNotifications.deleted.message
      );
      this.props.hideLinkDeletedNotification();
    }
  }

  displayNotification(success, message) {
    showToast(success, message);
  }

  selectOptions() {
    let usedLinkTypes = this.props.links.map(link => link.typeId);

    return this.props.dropdownLinkTypes
      .filter(linkType => {
        return !usedLinkTypes.includes(linkType.value);
      })
      .map(linkType => {
        return { 
          value: linkType.value,
          label: <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={[linkType.iconPrefix, linkType.icon]} transform="grow-4" /> <span style={{marginLeft: '15px'}}>{linkType.label}</span></span>
        }
      })
  }

  onSelectChangeHandler = async (event) => {

    let selectedId = null;

    await this.setState({
      selectValue: null
    });

    if (event !== null && event !== undefined) {

      selectedId = parseInt(event.value);
      this.props.createLink(selectedId);
    }
  };

  onCardSocialMediaLinkChangeHandler = (event, link) => {
    const linkToUpdate = {...link};
    linkToUpdate.url = event.target.value;

    this.props.setLink(linkToUpdate);
  }

  onDeleteLinkHandler = (link) => {
    this.props.deleteLink(link.id);
  }

  onSaveLinksHandler = (link) => {
    this.props.updateLink(link);
  }

  renderSocialMediaLinks(links) {
    links = [...this.props.links];

    // sort from largest id to smallest id (newest to oldest)
    links.sort((a, b) => b.id - a.id);

    return links.map((link, index) => {
      return <CardFormSocialMediaLink key={link.id} link={link} index={index} />
    });
  }

  render() {
    return (
      <Fragment>
        <div className="card-form-dropdown-container">
          <Select
            className="card-form-dropdown card-form-social-media-dropdown"
            classNamePrefix="card-form-dropdown"
            isSearchable={false}
            isClearable={false}
            isLoading={this.props.creatingLoader}
            menuPortalTarget={document.body}
            styles={{
              loadingIndicator: (base, state) => ({
                ...base,
                color: 'white'
              }),
              indicatorSeparator: (base, state) => ({
                ...base,
                backgroundColor: 'white'
              }),
              dropdownIndicator: (base, state) => ({
                ...base,
                color: 'white',
                "&:hover": {
                  color: "white",
                  cursor: "pointer",
                }
              }),
              control: (base, state) => ({
                ...base,
                background: "#2ecc71",
                border: "none",
                boxShadow: null,
                fontWeight: 500,
              }),
              menu: (base) => ({
                ...base,
                color: "#000",
                boxShadow: "0px 5px 0px -1px #cdcdd2",
                borderRadius: 5,
                border: "1px solid #cdcdd2"
              }),
              menuPortal: (base) => ({
                ...base,
                zIndex: 3000 
              }),
              option: (base, state) => ({
                ...base,
                color: state.isSelected ? "#2ecc71" : "black",
                fontSize: "16px",
                paddingTop: "10px",
                paddingBottom: "10px",
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
            placeholder={<div className="card-form-social-media-placeholder-color">Add Link</div>}
            options={this.selectOptions()}
            onChange={this.onSelectChangeHandler}
            value={this.state.selectValue}
          />
      </div>

         { this.props.links.length > 0 ?
          <Fragment>
            <div className="card-form-social-media-inputs-container">
                {this.renderSocialMediaLinks()}
            </div>
          </Fragment>
        : 
        <div className="card-form-no-social-media-links">
          { "No Links Added Yet" }
        </div> }
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
    deletingLinkId: state.linkLoader.deletingLinkId,
    updatingLinkId: state.linkLoader.updatingLinkId,
    linkNotifications: state.linkNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLink: (typeId) => dispatch(createLink(typeId)),
    updateLink: (linkId) => dispatch(updateLink(linkId)),
    deleteLink: (linkId) => dispatch(deleteLink(linkId)),
    setLink: (link) => dispatch(setLink(link)),
    hideLinkSavedNotification: () => dispatch(hideLinkSavedNotification()),
    hideLinkDeletedNotification: () => dispatch(hideLinkDeletedNotification())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormSocialMediaInputs);
