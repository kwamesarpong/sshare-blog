import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, ...rest }) => (

  <Route
    {...rest}
    render={(props) =>
      auth.author.tokenDetail.accessToken === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signup" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  auth: state.authors,
});

export default connect(mapStateToProps)(PrivateRoute);
