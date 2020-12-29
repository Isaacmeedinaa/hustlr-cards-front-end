import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { setCardLocation } from "../../../../store/actions/card";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

import "../../../../constants/colors.css";
import "./CardFormUI.css";

class CardFormLocationInputs extends Component {
  state = {
    city: this.props.city,
    state: this.props.state
  };

  componentDidMount() {
    if(this.state.city && this.state.city.length > 0) {
      this.setState({
        city : { label: this.state.city, value: this.state.city }
      })
      console.log(this.state.city);
    }
  }

  onCardLocationChangeHandler = async (location) => {
    await this.setState({
      city: location,
    });

    let updatedLocation = this.state.city === null ? "" : this.state.city.label;
    let updatedGooglePlaceId = this.state.city === null ? "" : this.state.city.value.place_id;
    
    this.props.setCardLocation(updatedLocation, updatedGooglePlaceId);
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
            value: this.state.city,
            onChange: this.onCardLocationChangeHandler,
            placeholder:<div className="card-form-placeholder-color">Location (city, state, or address, e.g.)</div>,
            styles:{
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
            })
            }
          }}
           />
      </div>
        {/* <div className="card-form-location-fields">
          <input
            className="card-form-input-location"
            name="city"
            placeholder="Location"
            value={this.state.city}
            onChange={this.onCardCityChangeHandler}
          />
          
           <div className="card-form-state-dropdown-container">
            <Select
              classNamePrefix="card-form-dropdown"
              placeholder={<div className="card-form-placeholder-color">State</div>}
              styles={{
                control: (base, state) => ({
                  ...base,
                  background: "#f1f1f1",
                  border: "none",
                  boxShadow: null,
                  fontWeight: 500,
                  height: 40,
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
              options={this.dropdownStates}
              value={
                !this.props.state
                  ? null
                  : this.dropdownStates.filter(
                      (currState) => currState.value === this.state.state
                    )
              }
              onChange={this.onCardStateChangeHandler}
            />
          </div> 
        </div> */}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    city: state.card.cardData.city,
    state: state.card.cardData.state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardLocation: (city, state) => dispatch(setCardLocation(city, state)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormLocationInputs);
