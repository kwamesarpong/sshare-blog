import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

// 3 levels ternary
// var variable = (condition) ? (true block) : ((condition2) ? (true block2) : (else block2))

const authorID = localStorage.getItem("sisterShareAuth");

console.log(authorID);

const PrivateRoute = ({ component: Component, author, ...rest }) => (
  <Route
    {...rest}
    render={
      (props) =>
        localStorage.sisterShareAuth && authorID ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signup" />
        )
      // authorProfile ? (
      //   <Component {...props} />
      // ) : author.tokenDetail ? (
      //   <Redirect to="/create-profile" />
      // ) : (
      //   <Redirect to="/signup" />
      // )
    }
  />
);

const mapStateToProps = (state) => ({
  author: state.authors.author,
});

export default connect(mapStateToProps)(PrivateRoute);
