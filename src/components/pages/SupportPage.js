import React, { Component, Fragment } from "react";

import SideToolbar from "../UI/SideToolbar";
import BottomToolbar from "../UI/BottomToolbar";
import SupportForm from "../UI/support/SupportForm";
import SupportFAQ from "../UI/support/SupportFAQ";

import Loader from "react-loader-spinner";

import "./pages.css";
import "../../constants/colors.css";
import { connect } from "react-redux";

class SupportPage extends Component {
  render() {
    if (!this.props.user) {
      return (
        <div className="page-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        </div>
      );
    }

    return (
      <Fragment>
        <div className="grid-container-support">
          <SideToolbar
            pathname={this.props.location.pathname}
            history={this.props.history}
          />
          <div className="secondary-light-bg support-form-col-wrapper">
            <div className="support-form-col-container">
              <SupportForm />
            </div>
          </div>

          <div className="secondary-light-bg support-faq-col-wrapper">
            <div className="support-faq-col-container">
              <SupportFAQ />
            </div>
          </div>
        </div>
        <BottomToolbar
          pathname={this.props.location.pathname}
          history={this.props.history}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(SupportPage);
