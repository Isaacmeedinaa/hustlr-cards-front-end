import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { setCardLocation } from "../../../store/actions/card";
import Select from 'react-select';
import dropdownStates from '../../../data/usa-states';

import "../../../constants/colors.css";
import "../UI.css";

class CardFormLocationInputs extends Component {
  state = {
    city: this.props.city,
    state: this.props.state
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
      state: selectedOption.value
    });

    this.props.setCardLocation(this.state.city, this.state.state);
  }

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
          placeholder={<div>City</div>}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#f1f1f1",
              primary: "rgba(255, 83, 73, 0.3)",
            },
          })}
          options={this.dropdownStates}
          value={!this.props.state? null : this.dropdownStates.filter((currState) => currState.value === this.state.state)}
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
