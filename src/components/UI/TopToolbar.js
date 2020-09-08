import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { setIsPublic } from "../../store/actions/card";

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
      themePickerIsOpen: false,
      isPublic: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      isPublic: nextProps.cardData.isPublic,
    });
  }

  openCloseThemePickerHandler = () => {
    this.setState((prevState) => {
      return {
        themePickerIsOpen: !prevState.themePickerIsOpen,
      };
    });
  };

  setIsPublicHandler = (isPublic) => {
    this.props.setIsPublic(isPublic);
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
              {!this.state.themePickerIsOpen ? (
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
            <PublicToggle
              isPublic={this.state.isPublic}
              setIsPublicHandler={this.setIsPublicHandler}
            />
          </div>
        </div>
        {!this.state.themePickerIsOpen ? null : <ThemePicker />}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardData: state.card.cardData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsPublic: (isPublic) => dispatch(setIsPublic(isPublic)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopToolbar);
