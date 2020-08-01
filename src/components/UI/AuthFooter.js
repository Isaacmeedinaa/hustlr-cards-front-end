import React, { Component } from "react";

import "./UI.css";
import "../../constants/colors.css";

class AuthFooter extends Component {
  render() {
    return (
      <div className="secondary-light-bg auth-footer">
        <a href="/support" className="primary-color auth-footer-link">
          Support
        </a>

        <a href="/" className="primary-color auth-footer-link">
          Legal
        </a>
        <a
          href="https://www.zenyx.io/"
          target="_blank"
          className="primary-color auth-footer-link"
        >
          Zenyx LLC
        </a>
      </div>
    );
  }
}

export default AuthFooter;
