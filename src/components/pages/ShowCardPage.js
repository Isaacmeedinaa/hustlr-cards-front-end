import React, { Component } from "react";
import "./pages.css";

import { connect } from "react-redux";
import { fetchPublicCard } from "../../store/actions/publicCard";

class ShowCardPage extends Component {
  componentWillMount() {
    const pathname = this.props.location.pathname.slice(1);
    const history = this.props.history;
    this.props.fetchPublicCard(pathname, history);
  }

  render() {
    if (this.props.cardLoader) {
      return null;
    }

    return <div>ShowCardPage.js</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    cardLoader: state.cardLoader,
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
