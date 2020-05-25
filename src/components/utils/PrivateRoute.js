import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const authorID = localStorage.getItem("sisterShareAuth");

console.log(authorID);

const PrivateRoute = ({ component: Component, author, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.sisterShareAuth && authorID ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signup" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  author: state.authors.author,
});

export default connect(mapStateToProps)(PrivateRoute);
