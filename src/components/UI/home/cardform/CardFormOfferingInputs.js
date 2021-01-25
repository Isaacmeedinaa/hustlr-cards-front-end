import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { openOfferingModal } from "../../../../store/actions/modals/offeringModal";

import scrollToComponent from "react-scroll-to-component";

import { hideOfferingCreatedNotification } from "../../../../store/actions/notifications/offeringNotifications";

import MdCreate from "react-ionicons/lib/MdCreate";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormOfferingInputs extends Component {
  state = {
    showDeleteModal: false,
    showPhotos: false,
    title: this.props.offering.title,
    price: this.props.offering.price,
    description: this.props.offering.description,
    id: this.props.offering.id,
    offerings: this.props.offerings,
    photos: this.props.photos,
    showOffering: false,
  };

  componentDidUpdate() {
    // this checks if this is a new offering that was added via the "Add Products/Services button"
    if (
      this.props.offeringAddedNotification.show &&
      this.props.offeringAddedNotification.success &&
      this.props.offering.id ===
        this.props.offerings[this.props.offerings.length - 1].id
    ) {
      this.props.hideOfferingCreatedNotification(); // need this, don't delete unless you know why you are deleting it
      this.onNewOfferingAdded();
    }
  }

  onNewOfferingAdded = async () => {
    if (!this.state.showOffering) {
      await this.props.openOfferingHandler(this.state.id);
    }
    this.setState({ showOffering: !this.state.showOffering });
    scrollToComponent(this.ScrollTo, {
      offset: 0,
      align: "middle",
      duration: 500,
      ease: "out-circ",
    });
  };

  onOpenOfferingModalClick = () => {
    this.props.openOfferingModal(this.props.offering, this.props.index);
  };

  render() {
    return (
      <Fragment>
        <div
          className="card-form-offerings-header-btn-container"
          onClick={this.onOpenOfferingModalClick}
          ref={(section) => {
            this.ScrollTo = section;
          }}
        >
          <h6 className="card-form-offering-title-header">
            {!this.props.offering.title || this.props.offering.title === "" ? (
              <span className="card-form-empty-offering-title-placeholder">
                Click To Edit Offering
              </span>
            ) : (
              this.props.offering.title
            )}
          </h6>
          <div className="card-form-accordion-icon-container">
            <MdCreate color="#2ecc71" fontSize={18} />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    offeringAddedNotification: state.offeringNotifications.created,
    offeringImageLoader: state.offeringImageLoader,
    offeringLoader: state.offeringLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideOfferingCreatedNotification: () =>
      dispatch(hideOfferingCreatedNotification()),
    openOfferingModal: (offering, offeringIndex) =>
      dispatch(openOfferingModal(offering, offeringIndex)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormOfferingInputs);
