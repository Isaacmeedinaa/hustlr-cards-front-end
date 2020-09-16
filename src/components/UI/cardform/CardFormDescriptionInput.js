import React, { Component } from "react";

import { connect } from "react-redux";
import { setCardDescription } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormDescriptionInput extends Component {
  state = {
    description: this.props.description,
  };

  onCardDescriptionChangeHandler = async (event) => {
    await this.setState({
      description: event.target.value,
    });

    this.props.setCardDescription(this.state.description);
  };
  render() {
    return (
      <textarea
        className="card-form-input-large"
        name="description"
        placeholder="Business Description"
        value={this.state.description}
        onChange={this.onCardDescriptionChangeHandler}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    description: state.card.cardData.description,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardDescription: (description) =>
      dispatch(setCardDescription(description)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormDescriptionInput);
