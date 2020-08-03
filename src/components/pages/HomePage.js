import React, { Component, Fragment } from "react";

import SideToolbar from "../UI/SideToolbar";
import TopToolbar from "../UI/TopToolbar";

import "./pages.css";
import "../../constants/colors.css";

class HomeContainer extends Component {
  render() {
    return (
      <Fragment>
        <div className="container-fluid h-100 no-padding">
          <div className="grid-container">
            <SideToolbar />
            <div className="secondary-light-bg card-form-container">
              <h1>col 1</h1>
            </div>
            <div className="secondary-light-bg card-show-container">
              <h1>col 2</h1>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeContainer;
