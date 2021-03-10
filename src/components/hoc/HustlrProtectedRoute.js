import React from "react";
import { Route, Redirect } from "react-router-dom";

const HustlrProtectedRoute = ({ component: Component, isAuthenticated, isHustlr, redirectPath, ...rest }) => {

  const renderRoutes = (props) => {
    if (isAuthenticated) {
      console.log(isHustlr)
      if (isHustlr) {
        return <Component {...props} />
      }
      else {
        return (<Redirect
        to={{
          pathname: redirectPath,
          state: { from: props.location },
        }}
      />);
      }
    }
    else {
      return (<Redirect
        to={{
          pathname: "/login",
          state: { from: props.location },
        }}
      />);
    }
  }

  return (<Route
    {...rest}
    render={(props) =>
      renderRoutes(props)
    }
  />);
  };

export default HustlrProtectedRoute;
