import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { verifyEmail } from "../../../store/actions/emailVerification";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faExclamationCircle} from '@fortawesome/free-solid-svg-icons'

import Loader from "react-loader-spinner";

import AuthCard from "./AuthCard";

import "./AuthPages.css";
import "../../../constants/colors.css";

class VerifyEmailPage extends Component {

  componentDidMount() {
    const token = this.props.location.pathname.split("/")[2];
    this.props.verifyEmail(token);
  }

  render() {
    return (
      <div className="secondary-light-bg auth-container">
        <div className="mobile-full-width">
          <AuthCard>
          <div className="email-verification-info">
            <h1 className="primary-color">Email Verification</h1>
            {this.props.emailVerification.success === undefined 
              ? <Loader type="TailSpin" style={{marginTop: '20px'}} color="#2bc16b" width={32} height={32} />
              : (<h5 className="email-verification-text">
                  { this.props.emailVerification?.success 
                    ? <span>
                        <FontAwesomeIcon 
                          icon={faCheck} 
                          transform="shrink-2"
                          style={{ color: '#2bc16b', marginRight: '8px' }}/>
                        {this.props.emailVerification?.email} has been verified!
                      </span>
                    : <span>
                        <FontAwesomeIcon 
                          icon={faExclamationCircle} 
                          transform="grow-1"
                          style={{ color: 'red', marginRight: '6px' }}/>
                        It looks like that link is broken. Are you sure you entered the correct link?
                      </span>
                  }
                </h5>)
            }
          </div>
          <div className="question-link-container-one">
              <p className="email-question-one">Return to</p>
              <Link className="primary-color email-link-one" to="/login">
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

const mapStateToProps = (state) => {
  return {
    emailVerification: state.emailVerification
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    verifyEmail: (token) => dispatch(verifyEmail(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmailPage);
