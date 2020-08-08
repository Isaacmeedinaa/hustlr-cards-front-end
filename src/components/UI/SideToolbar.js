import React, { Component } from "react";

import MdHome from "react-ionicons/lib/MdHome";
import MdSettings from "react-ionicons/lib/MdSettings";
import MdLogOut from "react-ionicons/lib/MdLogOut";
import MdInformationCircle from "react-ionicons/lib/MdInformationCircle";
import LogoCodepen from "react-ionicons/lib/LogoCodepen";

import "../../constants/colors.css";
import "./UI.css";

class SideToolbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pathname: props.pathname,
      primary: "#ff5349",
      secondary: "#ccc",
    };
  }

  componentDidMount() {
    this.setState({
      pathname: this.props.pathname,
    });
  }

  render() {
    return (
      <div className="primary-light-bg sidetoolbar">
        <div className="sidetoolbar-icons-container">
          <div className="sidetoolbar-icon-wrapper">
            <LogoCodepen
              className="sidetoolbar-icon"
              onClick={() => {
                this.props.history.push("/");
              }}
              fontSize="40px"
              color={this.state.primary}
            />
          </div>
          <div
            className={
              this.state.pathname !== "/home"
                ? "sidetoolbar-icon-wrapper"
                : "sidetoolbar-icon-wrapper selected"
            }
          >
            <MdHome
              className="sidetoolbar-icon"
              onClick={() => {
                this.props.history.push("/home");
              }}
              fontSize="30px"
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
                ? "sidetoolbar-icon-wrapper"
                : "sidetoolbar-icon-wrapper selected"
            }
          >
            <MdSettings
              className="sidetoolbar-icon"
              onClick={() => {
                this.props.history.push("/settings");
              }}
              fontSize="30px"
              color={
                this.state.pathname !== "/settings"
                  ? this.state.secondary
                  : this.state.primary
              }
            />
          </div>
          <div className="sidetoolbar-icon-wrapper">
            <MdLogOut
              className="sidetoolbar-icon"
              onClick={() => {
                this.props.history.push("/login");
                localStorage.removeItem("card");
                console.log("dispatch logout action");
              }}
              fontSize="30px"
              color={this.state.secondary}
            />
          </div>
          <div
            className={
              this.state.pathname !== "/support"
                ? "sidetoolbar-icon-wrapper"
                : "sidetoolbar-icon-wrapper selected"
            }
          >
            <MdInformationCircle
              className="sidetoolbar-icon"
              onClick={() => {
                this.props.history.push("/support");
              }}
              fontSize="30px"
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

export default SideToolbar;
