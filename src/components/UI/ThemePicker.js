import React, { Component } from "react";

import { connect } from "react-redux";
import { setCardThemeId } from "../../store/actions/card";

import { Animated } from "react-animated-css";

import "../../constants/colors.css";
import "./UI.css";

const Colors = (props) => {
  return (
    <div className="theme-picker-grid-container">
      <div
        style={{ backgroundColor: props.themes[0].primaryColor }}
        className={
          props.themeId !== 1
            ? "theme-picker-color-one theme-picker-color"
            : "theme-picker-color-one theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(1)}
      ></div>
      <div
        style={{ backgroundColor: props.themes[1].primaryColor }}
        className={
          props.themeId !== 2
            ? "theme-picker-color-two theme-picker-color"
            : "theme-picker-color-two theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(2)}
      ></div>
      <div
        style={{
          backgroundColor: props.themes[2].primaryColor,
        }}
        className={
          props.themeId !== 3
            ? "theme-picker-color-three theme-picker-color"
            : "theme-picker-color-three theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(3)}
      ></div>
      <div
        style={{
          backgroundColor: props.themes[3].primaryColor,
        }}
        className={
          props.themeId !== 4
            ? "theme-picker-color-four theme-picker-color"
            : "theme-picker-color-four theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(4)}
      ></div>
      <div
        style={{
          backgroundColor: props.themes[4].primaryColor,
        }}
        className={
          props.themeId !== 5
            ? "theme-picker-color-five theme-picker-color"
            : "theme-picker-color-five theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(5)}
      ></div>
      <div
        style={{ backgroundColor: props.themes[5].primaryColor }}
        className={
          props.themeId !== 6
            ? "theme-picker-color-six theme-picker-color"
            : "theme-picker-color-six theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(6)}
      ></div>
      <div
        style={{
          backgroundColor: props.themes[6].primaryColor,
        }}
        className={
          props.themeId !== 7
            ? "theme-picker-color-seven theme-picker-color"
            : "theme-picker-color-seven theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(7)}
      ></div>
      <div
        style={{
          backgroundColor: props.themes[7].primaryColor,
        }}
        className={
          props.themeId !== 8
            ? "theme-picker-color-eight theme-picker-color"
            : "theme-picker-color-eight theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(8)}
      ></div>
      <div
        style={{
          backgroundColor: props.themes[8].primaryColor,
        }}
        className={
          props.themeId !== 9
            ? "theme-picker-color-nine theme-picker-color"
            : "theme-picker-color-nine theme-picker-color-selected"
        }
        onClick={() => props.pickColorClickHandler(9)}
      ></div>
    </div>
  );
};

class ThemePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themeId: props.themeId,
    };
  }

  pickColorClickHandler = async (themeId) => {
    await this.setState({
      themeId: themeId,
    });

    this.props.setThemeIdHandler(themeId);
  };

  render() {
    return (
      <Animated
        className="theme-picker-animation-wrapper"
        animationIn="bounceIn"
        animationOut="fadeOut"
        isVisible={true}
      >
        <div className="primary-light-bg theme-picker">
          <Colors
            themes={this.props.themes}
            pickColorClickHandler={this.pickColorClickHandler}
            themeId={this.state.themeId}
          />
        </div>
      </Animated>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themes: state.themes,
  };
};

export default connect(mapStateToProps)(ThemePicker);
