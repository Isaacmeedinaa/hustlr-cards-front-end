import React, { Component, Fragment } from "react";
import Select from "react-select";

import { createPaymentMethod, deletePaymentMethod } from "../../../../store/actions/card";
import { hidePaymentMethodCreatedNotification, hidePaymentMethodDeletedNotification} from "../../../../store/actions/notifications/paymentMethodsNotifications";

import { showToast } from "../../Toasts";

import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardFormPaymentMethod from './CardFormPaymentMethod'

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormPaymentInputs extends Component {
  state = {
    paymentMethods: [],
    selectValue: null
  };

  componentDidUpdate() {
    if (this.props.paymentMethodsNotifications.created.show) {
      this.displayNotification(
        this.props.paymentMethodsNotifications.created.success,
        this.props.paymentMethodsNotifications.created.message
      );
      this.props.hidePaymentMethodCreatedNotification();
    }

    if (this.props.paymentMethodsNotifications.deleted.show) {
      this.displayNotification(
        this.props.paymentMethodsNotifications.deleted.success,
        this.props.paymentMethodsNotifications.deleted.message
      );
      this.props.hidePaymentMethodDeletedNotification();
    }
  }

  displayNotification(success, message) {
    showToast(success, message);
  }

  selectOptions() {
    let usedPaymentMethodTypes = this.props.paymentMethods.map(paymentMethods => paymentMethods.paymentMethodTypeId);

    return this.props.dropdownPaymentMethodTypes
      .filter(paymentMethodType => {
        return !usedPaymentMethodTypes.includes(paymentMethodType.value);
      })
      .map(paymentMethodType => {
        return { 
          value: paymentMethodType.value,
          label: <span style={{marginLeft: '5px'}}><FontAwesomeIcon icon={[paymentMethodType.iconPrefix, paymentMethodType.icon]} transform="grow-4" /> <span style={{marginLeft: '15px'}}>{paymentMethodType.label}</span></span>
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
      this.props.createPaymentMethod(selectedId);
    }
  };

  onDeletePaymentMethodHandler = (paymentMethod) => {
    this.props.deletePaymentMethod(paymentMethod.id);
  }

  renderPaymentMethods(paymentMethods) {
    paymentMethods = [...this.props.paymentMethods];

    // sort from largest id to smallest id (newest to oldest)
    paymentMethods.sort((a, b) => b.id - a.id);

    return paymentMethods.map((paymentMethod, index) => {
      return <CardFormPaymentMethod key={paymentMethod.id} paymentMethod={paymentMethod} index={index} />
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
            placeholder={<div className="card-form-social-media-placeholder-color">Add Payment Method</div>}
            options={this.selectOptions()}
            onChange={this.onSelectChangeHandler}
            value={this.state.selectValue}
          />
      </div>

         { this.props.paymentMethods.length > 0 ?
          <Fragment>
            <div className="card-form-social-media-inputs-container">
                {this.renderPaymentMethods()}
            </div>
          </Fragment>
        : 
        <div className="card-form-no-social-media-links">
          {"No Payment Methods Added Yet"}
        </div> }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dropdownPaymentMethodTypes: state.dropdowns.dropdownPaymentTypes,
    paymentMethods: state.card.cardData.paymentMethods,
    creatingLoader: state.paymentMethodsLoader.creatingLoader,
    deletingLoader: state.paymentMethodsLoader.deletingLoader,
    deletingLinkId: state.paymentMethodsLoader.deletingLinkId,
    paymentMethodsNotifications: state.paymentMethodsNotifications
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPaymentMethod: (typeId) => dispatch(createPaymentMethod(typeId)),
    deletePaymentMethod: (paymentMethodId) => dispatch(deletePaymentMethod(paymentMethodId)),
    hidePaymentMethodCreatedNotification: () => dispatch(hidePaymentMethodCreatedNotification()),
    hidePaymentMethodDeletedNotification: () => dispatch(hidePaymentMethodDeletedNotification())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormPaymentInputs);
