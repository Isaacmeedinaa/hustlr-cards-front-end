import React, { Component } from "react";

import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";
import LogoTwitter from "react-ionicons/lib/LogoTwitter";

import "../../../constants/colors.css";
import "./landingUI.css";

class Footer extends Component {
  render() {
    return (
      <div className="landing-page-footer-wrapper">
        <div className="landing-page-footer-container">
          <a
            className="landing-page-footer-link"
            href="https://www.facebook.com/hustlr_cards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LogoFacebook color="#2ecc71" fontSize="30px" />
          </a>
          <a
            className="landing-page-footer-link"
            href="https://www.instagram.com/hustlr_cards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LogoInstagram color="#2ecc71" fontSize="30px" />
          </a>
          <a
            className="landing-page-footer-link"
            href="https://www.twitter.com/hustlr_cards"
            rel="noopener noreferrer"
            target="_blank"
          >
            <LogoTwitter color="#2ecc71" fontSize="30px" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
