import React, { Component } from "react";
import "./pages.css";

import { connect } from "react-redux";
import { fetchCards } from "../../store/actions/cards";

class ShowCardPage extends Component {
  componentDidMount() {
    const username = this.props.location.pathname.slice(1);
    const history = this.props.history;
    this.props.fetchCards(username, history);
  }

  render() {
    if (this.props.loader) {
      return null;
    }

    return <div>ShowCardPage.js</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    loader: state.loader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCards: (pathname, history) => dispatch(fetchCards(pathname, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCardPage);
