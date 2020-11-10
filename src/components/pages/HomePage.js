import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { userAutoLogin } from "../../store/actions/user";

import SideToolbar from "../UI/SideToolbar";
import TopToolbar from "../UI/TopToolbar";
import BottomToolbar from "../UI/BottomToolbar";
import CardForm from "../UI/CardForm";
import Card from "../UI/Card";

import "./pages.css";
import "../../constants/colors.css";

class HomeContainer extends Component {
  componentDidMount() {}

  render() {
    return (
      <Fragment>
        <TopToolbar />
        <div className="grid-container-home">
          <SideToolbar
            pathname={this.props.location.pathname}
            history={this.props.history}
          />
          <Fragment>
            <div className="secondary-light-bg card-form-col-wrapper">
              <div className="card-form-col-container">
                <CardForm />
              </div>
            </div>
            <div className="secondary-light-bg card-show-col-wrapper">
              <div className="card-show-col-container">
                <Card />
              </div>
            </div>
          </Fragment>
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
    cardData: state.card.cardData,
    cardLoader: state.cardLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAutoLogin: (history) => dispatch(userAutoLogin(history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
