import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { setCardLocation } from "../../../store/actions/card";
import Select from "react-select";
import dropdownStates from "../../../data/usa-states";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormLocationInputs extends Component {
  state = {
    city: this.props.city,
    state: this.props.state,
  };

  dropdownStates = dropdownStates;

  onCardCityChangeHandler = async (event) => {
    await this.setState({
      city: event.target.value,
    });

    this.props.setCardLocation(this.state.city, this.state.state);
  };

  onCardStateChangeHandler = async (selectedOption) => {
    await this.setState({
      state: selectedOption.value,
    });

    this.props.setCardLocation(this.state.city, this.state.state);
  };

  render() {
    return (
      <Fragment>
        <div className="card-form-location-fields">
          <input
            className="card-form-input-location"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.onCardCityChangeHandler}
          />
          <div className="card-form-state-dropdown-container">
            <Select
              classNamePrefix="card-form-dropdown"
              placeholder={<div>State</div>}
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
        </div>
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
