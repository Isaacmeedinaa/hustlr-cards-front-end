import React, { Component } from "react";

import { connect } from "react-redux";
import { setCardIndustry } from "../../../store/actions/card";

import Select from "react-select";

import "../../../constants/colors.css";
import "../UI.css";

class CardFormIndustrySelect extends Component {
  state = {
    industry: { ...this.props.industry },
  };

  onCardIndustryChangeHandler = async (event) => {
    const icon = this.props.dropdownIndustries.find(dropdown => dropdown.label === event.label).icon;
    
    await this.setState({
      industry: {
        id: parseInt(event.value),
        title: event.label,
        icon: icon
      },
    });

    this.props.setCardIndustry(this.state.industry);
  };

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
          value={
            !this.props.industry || this.props.industry.id === null
              ? this.props.dropdownIndustries[0]
              : this.props.dropdownIndustries.filter(
                  (industry) => industry.label === this.props.industry.title
                )
          }
          onChange={this.onCardIndustryChangeHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    industry: state.card.cardData.industry,
    dropdownIndustries: state.industries.dropdownIndustries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCardIndustry: (industry) => dispatch(setCardIndustry(industry)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardFormIndustrySelect);
