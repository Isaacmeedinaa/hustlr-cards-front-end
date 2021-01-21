import React, { Component, Fragment } from "react";
import Select from "react-select";
import Loader from "react-loader-spinner";

import { createLink, deleteLink, setLink, updateLinks } from "../../../../store/actions/card";
import { hideLinkSavedNotification, hideLinkDeletedNotification } from "../../../../store/actions/notifications/socialMediaLinkNotifications";

import { showToast } from "../../Toasts";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    let selectedLabel = null;

    await this.setState({
      selectValue: null
    });

    if (event !== null && event !== undefined) {

      selectedId = parseInt(event.value);
      selectedLabel = event.label;

      console.log(selectedId, selectedLabel);
      this.props.createLink(selectedId);
    }
  };

  onCardSocialMediaLinkChangeHandler = (event, idx) => {
    this.props.setLink(idx, event.target.value);
  }

  onDeleteLinkHandler = (link) => {
    this.props.deleteLink(link.id);
  }

  onSaveLinksHandler = () => {
    this.props.updateLinks();
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
            placeholder={<div className="card-form-social-media-placeholder-color">Add Link</div>}
            options={this.selectOptions()}
            onChange={this.onSelectChangeHandler}
            value={this.state.selectValue}
          />
      </div>

         { this.props.links.length > 0 ?
          <Fragment>
            <div className="card-form-social-media-inputs-container">
                {this.props.links.map((link, idx) => {
                  return (
                    <div key={link.id} className="card-form-social-media-input-group">
                      <span className="card-form-social-media-icon-wrapper" >
                        <FontAwesomeIcon 
                          icon={[link.type.iconPrefix, link.type.icon]}
                          transform="grow-4"/>
                      </span>
                      <input
                        className="card-form-social-media-input"
                        placeholder={link.type.placeholder}
                        value={link.url}
                        name="social-media-link"
                        onChange={(event) => this.onCardSocialMediaLinkChangeHandler(event, idx)}
                      />
                      <div
                        onClick={() => this.onDeleteLinkHandler(link)}
                        > 
                          <button className="primary-color card-form-delete-link">
                          { this.props.deletingLoader && this.props.deletingLinkId === link.id ? 
                            <Loader type="TailSpin" color="#2ecc71" width={22} height={22} /> :
                            <span>Delete link</span>
                          }
                          </button>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className="card-form-social-media-modal-footer">
              <div  className="card-form-social-media-save"
                    onClick={this.onSaveLinksHandler}>
                {
                 this.props.updatingLoader ? 
                 <Loader type="TailSpin" color="#ffffff" width={22} height={22} /> 
                 : <span>Save</span>
                }
              </div>
            </div>
          </Fragment>
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
    deletingLinkId: state.linkLoader.deletingLinkId,
    linkNotifications: state.linkNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLink: (typeId) => dispatch(createLink(typeId)),
    updateLinks: () => dispatch(updateLinks()),
    deleteLink: (linkId) => dispatch(deleteLink(linkId)),
    setLink: (linkIdx, url) => dispatch(setLink(linkIdx, url)),
    hideLinkSavedNotification: () => dispatch(hideLinkSavedNotification()),
    hideLinkDeletedNotification: () => dispatch(hideLinkDeletedNotification())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormSocialMediaInputs);
