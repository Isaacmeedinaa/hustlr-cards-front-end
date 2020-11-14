import React, { Component } from "react";

import { connect } from "react-redux";
import { userLogout } from "../../store/actions/user";

import MdHome from "react-ionicons/lib/MdHome";
import MdSettings from "react-ionicons/lib/MdSettings";
import MdLogOut from "react-ionicons/lib/MdLogOut";
import MdInformationCircle from "react-ionicons/lib/MdInformationCircle";

import "../../constants/colors.css";
import "./UI.css";

class BottomToolbar extends Component {
  state = {
    pathname: this.props.pathname,
    primary: "#2ecc71",
    secondary: "#ccc",
  };

  componentDidMount() {
    this.setState({
      pathname: this.props.pathname,
    });
  }

  render() {
    return (
      <div className="primary-light-bg bottomtoolbar">
        <div className="bottomtoolbar-icons-container">
          {/* <div className="bottomtoolbar-icon-wrapper">
            <LogoCodepen
              className="bottomtoolbar-icon"
              onClick={() => {
                this.props.history.push("/");
              }}
              fontSize="40px"
              color={this.state.primary}
            />
          </div> */}
          <div
            className={
              this.state.pathname !== "/home"
                ? "bottomtoolbar-icon-wrapper"
                : "bottomtoolbar-icon-wrapper selected"
            }
          >
            <MdHome
              className="bottomtoolbar-icon"
              onClick={() => {
                this.props.history.push("/home");
              }}
              fontsize="26px"
              color={
                this.state.pathname !== "/home"
                  ? this.state.secondary
                  : this.state.primary
              }
            />
          </div>
          <div
            className={
              this.state.pathname !== "/settings"
                ? "bottomtoolbar-icon-wrapper"
                : "bottomtoolbar-icon-wrapper selected"
            }
          >
            <MdSettings
              className="bottomtoolbar-icon"
              onClick={() => {
                this.props.history.push("/settings");
              }}
              fontsize="26px"
              color={
                this.state.pathname !== "/settings"
                  ? this.state.secondary
                  : this.state.primary
              }
            />
          </div>
          <div className="bottomtoolbar-icon-wrapper">
            <MdLogOut
              className="bottomtoolbar-icon"
              onClick={() => {
                const history = this.props.history;
                this.props.userLogout(history);
              }}
              fontsize="26px"
              color={this.state.secondary}
            />
          </div>
          <div
            className={
              this.state.pathname !== "/support"
                ? "bottomtoolbar-icon-wrapper"
                : "bottomtoolbar-icon-wrapper selected"
            }
          >
            <MdInformationCircle
              className="bottomtoolbar-icon"
              onClick={() => {
                this.props.history.push("/support");
              }}
              fontsize="26px"
              color={
                this.state.pathname !== "/support"
                  ? this.state.secondary
                  : this.state.primary
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: (history) => dispatch(userLogout(history)),
  };
};

export default connect(null, mapDispatchToProps)(BottomToolbar);
