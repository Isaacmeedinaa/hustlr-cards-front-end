import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { setCardDescription } from "../../../../store/actions/card";

import "../../../../constants/colors.css";
import "./CardFormUI.css";

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
      <Fragment>
        <textarea
          className="card-form-input-large"
          name="description"
          placeholder="Write your hook here!"
          value={this.state.description}
          onChange={this.onCardDescriptionChangeHandler}
        />
        <p
          className="card-form-description-count"
          style={{ color: this.state.description.length > 250 ? "red" : null }}
        >
          {this.state.description.length > 250
            ? `${250 - this.state.description.length}`
            : this.state.description.length}{" "}
          / 500
        </p>
      </Fragment>
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
