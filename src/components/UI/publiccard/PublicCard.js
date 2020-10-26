import React, { Component } from "react";
import { connect } from "react-redux";

import { Animated } from "react-animated-css";

import "../../../constants/colors.css";
import "../UI.css";

class PublicCard extends Component {
  state = {};

  render() {
    if (!this.props.publicCard) {
      return null;
    }
    if (!this.props.publicCard.isPublic) {
      return (
        <Animated
          animationIn="bounceIn"
          animationOut="fadeOut"
          isVisible={true}
        >
          <div className="primary-light-bg public-card-container">
            <h1>This card is not public!</h1>
          </div>
        </Animated>
      );
    }
    return (
      <Animated animationIn="bounceIn" animationOut="fadeOut" isVisible={true}>
        <div
          className="primary-light-bg public-card-container"
          style={{}}
        ></div>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    publicCard: state.publicCard,
  };
};

export default connect(mapStateToProps)(PublicCard);
