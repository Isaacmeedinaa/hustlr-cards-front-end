import React, { Component, Fragment } from "react";

import SideToolbar from "../UI/SideToolbar";

import "./pages.css";
import "../../constants/colors.css";

class SupportPage extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid h-100 no-padding">
          <div className="grid-container-support">
            <SideToolbar
              pathname={this.props.location.pathname}
              history={this.props.history}
            />
            <div className="secondary-light-bg support-wrapper">
              <div className="support-container">
                <h1>col 1</h1>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SupportPage;
