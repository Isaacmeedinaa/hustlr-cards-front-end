import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import {
  openThemePicker,
  closeThemePicker,
} from "../../store/actions/themePicker";

import MdBrush from "react-ionicons/lib/MdBrush";
import MdCloseCircle from "react-ionicons/lib/MdCloseCircle";

import ThemePicker from "./ThemePicker";
import PublicToggle from "./PublicToggle";

import "./UI.css";

class TopToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: "#ff5349",
    };
  }

  openCloseThemePickerHandler = () => {
    if (!this.props.themePicker) {
      this.props.openThemePicker();
    } else {
      this.props.closeThemePicker();
    }
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
              {!this.props.themePicker ? (
                <MdBrush
                  className="toptoolbar-theme-icon"
                  fontSize="18px"
                  color={this.state.primary}
                />
              ) : (
                <MdCloseCircle
                  className="toptoolbar-theme-icon"
                  fontSize="18px"
                  color={this.state.primary}
                />
              )}
            </div>
            <PublicToggle />
          </div>
        </div>
        {!this.props.themePicker ? null : <ThemePicker />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themePicker: state.themePicker,
    themes: state.themes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openThemePicker: () => dispatch(openThemePicker()),
    closeThemePicker: () => dispatch(closeThemePicker()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopToolbar);
