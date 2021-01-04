import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { setCardLocation } from "../../../../store/actions/card";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormLocationInputs extends Component {
  state = {
    locationDropdown: null,
    location: this.props.location,
  };

  componentDidMount() {
    // As soon as the component mounts, set the dropdown value to the existing location
    if (
      this.props.location?.description &&
      this.props.location?.description.trim().length > 0
    ) {
      this.setState({
        locationDropdown: {
          label: this.props.location.description,
          value: this.props.location.googlePlaceId,
        },
      });
    }
  }

  onCardLocationChangeHandler = async (selectedLocation) => {
    await this.setState({
      locationDropdown: selectedLocation,
    });

    // React Select component returns a null object when it is cleared, so set description and googlePlaceId to empty string in that case
    let updatedLocationDescription =
      selectedLocation === null ? "" : selectedLocation.label;
    let updatedGooglePlaceId =
      selectedLocation === null ? "" : selectedLocation.value.place_id;

    this.props.setCardLocation(
      updatedLocationDescription,
      updatedGooglePlaceId
    );
  };

  render() {
    return (
      <Fragment>
        <div className="card-form-dropdown-container">
          <GooglePlacesAutocomplete
            className="card-form-dropdown"
            classNamePrefix="card-form-dropdown"
            selectProps={{
              openMenuOnClick: false,
              isClearable: true,
              value: this.state.locationDropdown,
              onChange: this.onCardLocationChangeHandler,
              placeholder: (
                <div className="card-form-placeholder-color">
                  Location (city, state, or address, e.g.)
                </div>
              ),
              styles: {
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
              },
            }}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.card.cardData.location,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardLocation: (locationDescription, updatedGooglePlaceId) =>
      dispatch(setCardLocation(locationDescription, updatedGooglePlaceId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormLocationInputs);
