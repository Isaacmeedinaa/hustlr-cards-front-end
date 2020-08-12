import React, { Component, Fragment } from "react";

import { connect } from "react-redux";
import { fetchCard } from "../../store/actions/card";

import SideToolbar from "../UI/SideToolbar";
import TopToolbar from "../UI/TopToolbar";
import CardForm from "../UI/CardForm";
import Card from "../UI/Card";

import "./pages.css";
import "../../constants/colors.css";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      const userId = localStorage.getItem("userId");
      this.props.fetchCard(parseInt(userId));
    } else {
      this.props.history.push("/login");
    }
  }

  componentWillUnmount() {
    // send fetch request to save current card state
  }

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
                <CardForm />
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCard: (userId) => dispatch(fetchCard(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
