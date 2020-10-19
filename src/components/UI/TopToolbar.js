import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import MdBrush from "react-ionicons/lib/MdBrush";
import MdCloseCircle from "react-ionicons/lib/MdCloseCircle";

import ThemePicker from "./ThemePicker";
import PublicToggle from "./PublicToggle";
import SaveCardButton from "./SaveCardButton";

import "./UI.css";

class TopToolbar extends Component {
  state = {
    themePickerIsOpen: false,
  };

  openCloseThemePickerHandler = () => {
    this.setState((prevState) => {
      return {
        themePickerIsOpen: !prevState.themePickerIsOpen,
      };
    });
  };

  render() {
    if (this.props.cardLoader) {
      return null;
    }
    return (
      <Fragment>
        <div className="primary-light-bg toptoolbar">
          {/* {this.props.cardLoader ? null : ( */}
          <div className="toptoolbar-container">
            <div
              className="toptoolbar-theme-icon-container"
              onClick={this.openCloseThemePickerHandler}
            >
              {!this.state.themePickerIsOpen ? (
                <MdBrush
                  className="toptoolbar-theme-icon"
                  fontSize="18px"
                  color="#2ecc71"
                />
              ) : (
                <MdCloseCircle
                  className="toptoolbar-theme-icon"
                  fontSize="18px"
                  color="#2ecc71"
                />
              )}
            </div>
            <PublicToggle />
            <SaveCardButton />
          </div>
          {/* )} */}
        </div>
        {!this.state.themePickerIsOpen ? null : <ThemePicker />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardData: state.card.cardData,
    cardLoader: state.cardLoader,
  };
};

export default connect(mapStateToProps)(TopToolbar);
