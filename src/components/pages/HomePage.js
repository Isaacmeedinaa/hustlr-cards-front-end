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
      modalIsClosed: true,
    };
  }

  componentDidMount() {}

  toggleModal = () => {
    this.setState((prevState) => {
      return {
        modalIsClosed: !prevState.modalIsClosed,
      };
    });
  };

  render() {
    if (this.props.loader) {
      return null;
    }

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
                <CardForm toggleModal={this.toggleModal} />
              </div>
            </div>
            <div className="secondary-light-bg card-show-col-wrapper">
              <div className="card-show-col-container">
                <Card />
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default HomeContainer;
