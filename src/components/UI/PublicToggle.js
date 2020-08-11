import React, { Component, Fragment } from "react";
import ToggleButton from "react-toggle-button";

import { connect } from "react-redux";
import { setIsPublic } from "../../store/actions/card";

import "./UI.css";
import "../../constants/colors.css";

class PublicToggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPublic: props.cardData.isPublic,
    };
  }

  isPublicChangeHandler = async () => {
    await this.setState((prevState) => {
      return {
        isPublic: !prevState.isPublic,
      };
    });

    console.log("state function:", this.state.isPublic);

    this.props.setIsPublic(this.state.isPublic);
  };

  render() {
    console.log("redux state:", this.props.cardData);
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
              base: "rgb(255,83,73)",
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
    cardData: state.card.cardData,
    cardTheme: state.card.cardTheme,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsPublic: (isPublic) => dispatch(setIsPublic(isPublic)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicToggle);
