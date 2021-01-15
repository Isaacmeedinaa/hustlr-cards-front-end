import React, { Component } from "react";
import { Link } from "react-router-dom";

import AuthCard from "../../pages/Auth Pages/AuthCard";

import "../../pages/pages.css";

class PrivateCard extends Component {

  render() {
    return (
      <div className="secondary-light-bg auth-container">
        <div className="mobile-full-width">
          <AuthCard>
          <div className="email-verification-info">
            <h1 className="primary-color">Card is Private</h1>
          </div>
          <h5 className="email-verification-text">
            <span>
              It looks like this card is private.
            </span>
          </h5>
          <div className="question-link-container-one">
              <p className="email-question-one">Return to</p>
              <Link className="primary-color email-link-one" to="/">
                hustlr.cards
              </Link>
            </div>
          <div>
          </div>
          </AuthCard>
        </div>
      </div>
    );
  }
}

export default PrivateCard;