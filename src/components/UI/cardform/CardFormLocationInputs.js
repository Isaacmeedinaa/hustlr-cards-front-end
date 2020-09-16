import React, { Component } from "react";

import { connect } from "react-redux";
import { setCardLocation } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormLocationInputs extends Component {
  state = {
    city: this.props.city,
    state: this.props.state,
  };

  onCardLocationChangeHandler = async (event) => {
    await this.setState({
      [event.target.name]: event.target.value,
    });

    this.props.setCardLocation(this.state.city, this.state.state);
  };

  render() {
    return (
      <div className="card-form-location-fields">
        <input
          className="card-form-input-location"
          name="city"
          placeholder="City"
          value={this.state.city}
          onChange={this.onCardLocationChangeHandler}
        />
        <input
          id="cardFormInputState"
          className="card-form-input-location"
          name="state"
          placeholder="State"
          value={this.state.state}
          onChange={this.onCardLocationChangeHandler}
        />
      </div>
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
