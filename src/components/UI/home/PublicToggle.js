import React, { Component } from "react";
import ToggleButton from "react-toggle-button";

import { connect } from "react-redux";
import { setIsPublic } from "../../../store/actions/card";

import "../../../constants/colors.css";
import "./HomeUI.css";

class PublicToggle extends Component {
  state = {
    isPublic: this.props.isPublic,
  };

  isPublicChangeHandler = async () => {
    await this.setState((prevState) => {
      return {
        isPublic: !prevState.isPublic,
      };
    });

    this.props.setIsPublic(this.state.isPublic);
  };

  render() {
    return (
      <div className="public-toggle-container">
        <span className="public-toggle-label">
          {!this.state.isPublic ? "Private" : "Public"}
        </span>
        <ToggleButton
          styles={{ marginLeft: 10 }}
          inactiveLabel={""}
          activeLabel={""}
          value={this.state.isPublic}
          onToggle={this.isPublicChangeHandler}
          colors={{
            activeThumb: {
              base: "rgb(250,250,250)",
            },
            inactiveThumb: {
              base: "rgb(250,250,250)",
            },
            active: {
              base: "rgb(46, 204, 113)",
            },
            inactive: {
              base: "rgb(204,204,204)",
            },
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isPublic: state.card.cardData.isPublic,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsPublic: (isPublic) => dispatch(setIsPublic(isPublic)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicToggle);
