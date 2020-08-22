import React, { Component } from "react";

import Select from "react-select";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormIndustrySelect extends Component {
  render() {
    return (
      <div className="card-form-dropdown-container">
        <Select
          classNamePrefix="card-form-dropdown"
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "#f1f1f1",
              primary: "rgba(255, 83, 73, 0.3)",
            },
          })}
          options={this.props.dropdownIndustries}
          value={this.props.industry}
          onChange={(event) => this.props.cardFormSelectorChangeHandler(event)}
        />
      </div>
    );
  }
}

export default CardFormIndustrySelect;
