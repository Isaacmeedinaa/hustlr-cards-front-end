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
    const icon = this.props.dropdownIndustries.find(
      (dropdown) => dropdown.label === event.label
    ).icon;

    await this.setState({
      industry: {
        id: parseInt(event.value),
        title: event.label,
        icon: icon,
      },
    });

    this.props.setCardIndustry(this.state.industry);
  };

  render() {
    return (
      <div className="card-form-dropdown-container">
        <Select
          className="card-form-dropdown"
          classNamePrefix="card-form-dropdown"
          styles={{
            control: (base, state) => ({
              ...base,
              background: "#f1f1f1",
              border: "none",
              boxShadow: null,
              fontWeight: 500,
            }),
            menu: (base) => ({
              ...base,
              color: "#000",
              boxShadow: "0px 5px 0px -1px #cdcdd2",
              borderRadius: 5,
              border: "1px solid #cdcdd2",
            }),
            option: (base, state) => ({
              ...base,
              color: state.isSelected ? "#2ecc71" : "black",
              backgroundColor: state.isSelected
                ? "rgba(46, 204, 113, 0.25)"
                : "white",
              "&:hover": {
                backgroundColor: "#f1f1f1",
                cursor: "pointer",
              },
              "&:active": {
                color: "#2ecc71",
                backgroundColor: "rgba(46, 204, 113, 0.25)",
              },
            }),
          }}
          placeholder={<div>Select an industry</div>}
          options={this.props.dropdownIndustries}
          value={
            !this.props.industry || this.props.industry.id === null
              ? null
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
