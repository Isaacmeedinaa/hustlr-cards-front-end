import React, { Component } from "react";

import { connect } from "react-redux";
import { fetchPublicCard } from "../../store/actions/publicCard";

import Loader from "react-loader-spinner";

import PublicCard from "../UI/publiccard/PublicCard";

import "./pages.css";

class PublicCardPage extends Component {
  componentWillMount() {
    const pathname = this.props.location.pathname.slice(1);
    const history = this.props.history;
    this.props.fetchPublicCard(pathname, history);
  }

  render() {
    if (!this.props.publicCard) {
      return (
        <div className="page-loader-container">
          <Loader type="TailSpin" color="#2ecc71" width={48} height={48} />
        </div>
      );
    }

    return (
      <div
        className="public-card-page-wrapper"
        style={{ backgroundColor: this.props.publicCard.primaryColor }}
      >
        <PublicCard />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    publicCardLoader: state.publicCardLoader,
    publicCard: state.publicCard,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPublicCard: (pathname, history) =>
      dispatch(fetchPublicCard(pathname, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicCardPage);
