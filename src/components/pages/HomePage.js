import React, { Component, Fragment } from "react";

import SideToolbar from "../UI/SideToolbar";
import TopToolbar from "../UI/TopToolbar";
import CardForm from "../UI/CardForm";
import Card from "../UI/Card";

import "./pages.css";
import "../../constants/colors.css";

class HomeContainer extends Component {
  constructor() {
    super();

    this.state = {
      businessName: "",
      businessServices: "",
      businessPhoneNumber: "",
      businessEmail: "",
      modalIsClosed: true,
    };
  }

  componentWillUnmount() {
    alert("hi");
  }

  cardFormInputChangeHandler = (field, value) => {
    this.setState({
      [field]: value,
    });
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        modalIsClosed: !prevState.modalIsClosed,
      };
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container-fluid h-100 no-padding">
          <div className="grid-container-home">
            <SideToolbar
              pathname={this.props.location.pathname}
              history={this.props.history}
            />
            <div className="secondary-light-bg card-form-col-wrapper">
              <TopToolbar />
              <div className="card-form-col-container">
                <CardForm
                  businessName={this.state.businessName}
                  businessServices={this.state.businessServices}
                  businessPhoneNumber={this.state.businessPhoneNumber}
                  businessEmail={this.state.businessEmail}
                  cardFormInputChangeHandler={this.cardFormInputChangeHandler}
                  toggleModal={this.toggleModal}
                />
              </div>
            </div>
            <div className="secondary-light-bg card-show-col-wrapper">
              <div className="card-show-col-container">
                <Card
                  businessName={this.state.businessName}
                  businessServices={this.state.businessServices}
                  businessPhoneNumber={this.state.businessPhoneNumber}
                  businessEmail={this.state.businessEmail}
                />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeContainer;
