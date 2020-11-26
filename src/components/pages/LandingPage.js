import React, { Component } from "react";

import Toolbar from "../UI/landing/Toolbar";
import LandingLeftSide from "../UI/landing/LandingLeftSide";
import LandingRightSide from "../UI/landing/LandingRightSide";
import Footer from "../UI/landing/Footer";

import "./pages.css";

class LandingPage extends Component {
  state = {
    showMenu: false,
  };

  openMenu = () => {
    this.setState({ showMenu: true });
  };

  closeMenu = () => {
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <div className="landing-page-wrapper">
        <Toolbar
          showMenu={this.state.showMenu}
          openMenu={this.openMenu}
          closeMenu={this.closeMenu}
        />
        <div className="landing-page-content-container">
          <LandingLeftSide />
          <LandingRightSide />
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
