import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const CreateProfileGuard = ({ component: Component, author, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      author.profile ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = (state) => ({
  author: state.authors.author,
});

export default connect(mapStateToProps)(CreateProfileGuard);
