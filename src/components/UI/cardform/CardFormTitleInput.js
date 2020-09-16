import React, { Component } from "react";

import { connect } from "react-redux";
import { setCardTitle } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormTitleInput extends Component {
  state = {
    title: this.props.title,
  };

  onCardTitleChangeHandler = async (event) => {
    await this.setState({
      title: event.target.value,
    });

    this.props.setCardTitle(this.state.title);
  };

  render() {
    return (
      <input
        className="card-form-input"
        name="title"
        placeholder="Business Name"
        value={this.state.title}
        onChange={this.onCardTitleChangeHandler}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.card.cardData.title,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardTitle: (title) => dispatch(setCardTitle(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardFormTitleInput);
