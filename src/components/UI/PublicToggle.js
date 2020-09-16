import React, { Component } from "react";
import ToggleButton from "react-toggle-button";

import "./UI.css";
import "../../constants/colors.css";

class PublicToggle extends Component {
  constructor() {
    super();

    this.state = {
      isPublic: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      isPublic: nextProps.isPublic,
    });
  }

  isPublicChangeHandler = async () => {
    await this.setState((prevState) => {
      return {
        isPublic: !prevState.isPublic,
      };
    });

    this.props.setIsPublicHandler(this.state.isPublic);
  };

  render() {
    return (
      <div className="public-toggle-container">
        <span className="public-toggle-label">
          {!this.state.isPublic ? "Private" : "Public"}
        </span>
        <ToggleButton
          styles={{ marginLeft: 10 }}
          inactiveLabel={""}
          activeLabel={""}
          value={this.state.isPublic}
          onToggle={this.isPublicChangeHandler}
          colors={{
            activeThumb: {
              base: "rgb(250,250,250)",
            },
            inactiveThumb: {
              base: "rgb(250,250,250)",
            },
            active: {
              base: "rgb(255,83,73)",
            },
            inactive: {
              base: "rgb(204,204,204)",
            },
          }}
        />
      </div>
    );
  }
}

export default PublicToggle;
