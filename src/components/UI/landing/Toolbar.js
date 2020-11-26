import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MdMenu from "react-ionicons/lib/MdMenu";
import IosClose from "react-ionicons/lib/IosClose";

import "../../../constants/colors.css";
import "./landingUI.css";

class Toolbar extends Component {
  render() {
    return (
      <div className="landing-page-toolbar-wrapper">
        <div className="landing-page-toolbar-container">
          <div className="landing-page-toolbar-links-container">
            <Link
              to="/"
              className="primary-color-hover landing-page-toolbar-app-name"
            >
              Hustlr Cards
            </Link>
            <Link to="/contact-us" className="landing-page-toolbar-link">
              Contact Us
            </Link>
            <a
              href="https://www.zenyx.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="landing-page-toolbar-link"
            >
              Zenyx LLC
            </a>
          </div>
          <div className="landing-page-toolbar-buttons-container">
            {this.props.auth.isAuthenticated ? (
              <Fragment>
                <Link to="/home" className="landing-page-toolbar-home-button">
                  Home
                </Link>
                {!this.props.showMenu ? (
                  <div
                    onClick={() => this.props.openMenu()}
                    className="lading-page-toolbar-icon-container"
                  >
                    <MdMenu
                      className="landing-page-toolbar-menu-button"
                      fontSize="28px"
                      color="#2ecc71"
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => this.props.closeMenu()}
                    className="lading-page-toolbar-icon-container"
                  >
                    <IosClose
                      className="landing-page-toolbar-menu-button"
                      fontSize="28px"
                      color="#2ecc71"
                    />
                  </div>
                )}
              </Fragment>
            ) : (
              <Fragment>
                <Link to="/login" className="landing-page-toolbar-login-button">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="landing-page-toolbar-register-button"
                >
                  Register
                </Link>
                {!this.props.showMenu ? (
                  <div
                    onClick={() => this.props.openMenu()}
                    className="lading-page-toolbar-icon-container"
                  >
                    <MdMenu
                      className="landing-page-toolbar-menu-button"
                      fontSize="28px"
                      color="#2ecc71"
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => this.props.closeMenu()}
                    className="lading-page-toolbar-icon-container"
                  >
                    <IosClose
                      className="landing-page-toolbar-menu-button"
                      fontSize="28px"
                      color="#2ecc71"
                    />
                  </div>
                )}
              </Fragment>
            )}
          </div>
        </div>
        {this.props.showMenu ? (
          <div className="landing-page-menu-links-container">
            <ul className="landing-page-toolbar-menu-list">
              <li className="landing-page-toolbar-menu-list-item">
                <Link
                  to="/contact-us"
                  className="landing-page-toolbar-menu-link"
                >
                  Contact Us
                </Link>
              </li>
              <li className="landing-page-toolbar-menu-list-item">
                <a
                  href="https://www.zenyx.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="landing-page-toolbar-menu-link"
                >
                  Zenyx LLC
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Toolbar);
