import React, { Component } from "react";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormLocationInputs extends Component {
  render() {
    return (
      <div className="card-form-location-fields">
        <input
          className="card-form-input-location"
          name="city"
          placeholder="City"
          value={this.props.city}
          onChange={(event) => this.props.cardFormInputChangeHandler(event)}
        />
        <input
          id="cardFormInputState"
          className="card-form-input-location"
          name="state"
          placeholder="State"
          value={this.props.state}
          onChange={(event) => this.props.cardFormInputChangeHandler(event)}
        />
      </div>
    );
  }
}

export default CardFormLocationInputs;
