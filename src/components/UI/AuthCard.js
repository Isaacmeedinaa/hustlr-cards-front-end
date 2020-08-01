import React, { Component } from "react";

import "./UI.css";
import "../../constants/colors.css";

class AuthCard extends Component {
  render() {
    return (
      <div className="primary-light-bg auth-card">{this.props.children}</div>
    );
  }
}

export default AuthCard;
