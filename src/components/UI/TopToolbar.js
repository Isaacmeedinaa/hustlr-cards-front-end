import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import MdBrush from "react-ionicons/lib/MdBrush";

import ThemePicker from "./ThemePicker";

import "./UI.css";

class TopToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showThemePicker: false,
      primary: "#ff5349",
      title: props.cardData.title,
    };
  }

  openCloseThemePickerHandler = () => {
    this.setState((prevState) => {
      return {
        showThemePicker: !prevState.showThemePicker,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <div className="primary-light-bg toptoolbar">
          <div className="toptoolbar-container">
            <div
              className="toptoolbar-theme-icon-container"
              onClick={this.openCloseThemePickerHandler}
            >
              <MdBrush
                className="toptoolbar-theme-icon"
                fontSize="18px"
                color={this.state.primary}
              />
            </div>
          </div>
        </div>
        {!this.state.showThemePicker ? null : <ThemePicker />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardData: state.card.cardData,
    themes: state.themes,
  };
};

export default connect(mapStateToProps)(TopToolbar);
