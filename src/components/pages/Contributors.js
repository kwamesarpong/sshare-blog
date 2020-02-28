import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Navbar from "./Navbar";
import { fetchAuthors } from "../../actions/AuthorAction";

// import { ReactComponent as ContributorsSvg } from "../../assets/SISTAZSHARE-CONTRIBUTE-4.svg";

import commPerson from "./../../assets/comm-person.png";
import ProfileCard from "../utils/ProfileCard";

class Contributors extends Component {
  componentDidMount() {
    this.props.fetchAuthors();
  }

  renderContributors = authors => {
    // array of N elements, where N is the number of rows needed
    const rows = [...Array(Math.ceil(authors.length / 4))];

    // chunk the products into the array of rows
    const authorRows = rows.map((row, index) =>
      authors.slice(index * 4, index * 4 + 4)
    );

    // map the rows as div.row
    const content = authorRows.map((row, index) => (
      <Link to="/articles" className="row" key={index}>
        {row.map(author => (
          <ProfileCard
            className="col-md-3"
            key={author.id}
            commPerson={commPerson}
            name="Amina Able"
            country="Ghana"
          />
        ))}
      </Link>
    ));

    return <div>{content}</div>;
  };

  render() {
    const { authors } = this.props;
    return (
      <div className="contributors">
        <Navbar whitePage={true} />

        <div className="container">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search People ..."
            className="mb-5"
          />

          {authors ? this.renderContributors(authors) : null}

          {/* <div className="col-md-3">
              <ContributorsSvg className="img-fluid pb-5 ml-2" />
              <Link
                to="/register"
                className="button button__black mb-3 ml-2 mr-5"
              >
                JOIN US
              </Link>
              <Link to="/share" className="button button__black ml-2 mr-5 mb-5">
                TELL A FRIEND
              </Link>
            </div>
          </div>  */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors.authors
  };
};

export default connect(mapStateToProps, { fetchAuthors })(Contributors);
