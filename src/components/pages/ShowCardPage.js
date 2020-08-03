import React, { Component } from "react";
import "./pages.css";

import { connect } from "react-redux";
import { fetchPublicCard } from "../../store/actions/publicCard";

class ShowCardPage extends Component {
  componentDidMount() {
    const username = this.props.location.pathname.slice(1);
    const history = this.props.history;
    this.props.fetchPublicCard(username, history);
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
    publicCard: state.publicCard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPublicCard: (pathname, history) =>
      dispatch(fetchPublicCard(pathname, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCardPage);
