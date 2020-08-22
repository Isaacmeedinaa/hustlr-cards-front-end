import React, { Component, Fragment } from "react";

import { connect } from "react-redux";

import SideToolbar from "../UI/SideToolbar";

import "./pages.css";
import "../../constants/colors.css";

class SettingsPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid h-100 no-padding">
          <div className="grid-container-settings">
            <SideToolbar
              pathname={this.props.location.pathname}
              history={this.props.history}
            />
            <div className="secondary-light-bg settings-wrapper">
              <div className="settings-container">
                <h1>col 1</h1>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cardData: state.card.cardData,
  };
};

export default connect(mapStateToProps)(SettingsPage);
