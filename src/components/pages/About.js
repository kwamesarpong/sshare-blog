import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCategories } from "../../actions/categoriesAction";

import Navbar from "./Navbar";

import { ReactComponent as PhoneImg } from "../../assets/PHONE/PHONE.svg";
import { ReactComponent as About2Img } from "../../assets/SISTAZSHARE-ABOUT-PAGE-2.svg";
import ImageMiniCard from "../utils/ImageMiniCard";
import AboutImg from "./../../assets/about.jpg";
import commPerson from "./../../assets/comm-person.png";
import CommunityCard from "../utils/CommunityCard";

import { getCategoryTitle, getCategoriesTitle } from "../utils/utilsfunctions";

class About extends Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  state = {
    name: "Amina Able",
    country: "Ghana",
    message: `Sistaz Share spotlights the everyday modern woman, narrating
    the savvy patterns that make up the complexities of her
    life. We introduce you to a digital sphere of telling the
    timeless chronicles of women’s lives, in real time.`
  };

  render() {
    const { categories } = this.props;

    return (
      <div className="about">
        <Navbar whitePage={true} />

        <div className="container mt-4">
          <h1 className="heading heading__secondary">
            Welcome to Sistaz Share...
          </h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <img
                src={AboutImg}
                alt="about"
                className="about-img-1 about about__img mt-4"
              />
            </div>
          </div>
        </div>

        <div className="category text-center">
          <div className="container">
            <h3 className="heading heading__secondary-2">
              We pool articles & stories for women ...
            </h3>
            <p>
              Sistaz Share acknowledges the everyday modern woman, narrating the
              savvy patterns that make up the complexities of her life. We
              introduce you to a digital sphere of telling the timeless
              chronicles of women’s lives, in real time.
            </p>
          </div>

          <div className="container">
            <div className="row">
              {/* {categories ? this.renderImageCards(categories) : null} */}

              <ImageMiniCard title="Mind & Body" imgNum="1" />
              <ImageMiniCard title="Feminism" imgNum="2" />
              <ImageMiniCard title="Lifestyle" imgNum="3" />
              <ImageMiniCard title="Motivation" imgNum="4" />
              <ImageMiniCard title="Love & Relationships" imgNum="5" />
              <ImageMiniCard title="Money" imgNum="6" />
            </div>
          </div>
        </div>

        <div className="settee container text-center">
          <h3 className="heading heading__secondary-2 mx-2 mb-5">
            On the settee of engaging ...
          </h3>
          <div className="row">
            <div className="col-md-6 text-right vertical">
              <p>insightful outlooks on life</p>
              <p>expert opinions</p>
              <p>embracing diversity</p>
              <p>building capacity</p>
              <p className="hori">collaborating mutual perspectives</p>
            </div>
            <div className="text-left col-md-6 pad-left">
              <p>educational modules</p>
              <p>daring voices</p>
              <p>acknowledging differences</p>
              <p>harnessing growth</p>
              <p>exploring strengths & opportunities</p>
            </div>
          </div>
        </div>

        <div className="enlighten">
          <div className="container">
            <div className="row">
              <div className="col-md-6 vertical text-right cent">
                <PhoneImg className="about-img-1" />
              </div>
              <div className="col-md-6 text-left pad-left mt-4 cent">
                <h3 className="heading heading__secondary-2 mb-5">
                  Enlightenment on the go!
                </h3>
                <p className="">
                  Harnessing the convenience of digital technology, we’re the
                  ideal hub for exploring women’s discourses, while offering
                  everyone from around the world the chance to contribute their
                  knowledge, skills and experience to help make the world of
                  women better.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="community">
          <div className="container">
            <h3 className="heading heading__secondary mb-5 text-center">
              From the Community ...
            </h3>
            <div className="row">
              <CommunityCard
                name={this.state.name}
                country={this.state.country}
                message={this.state.message}
                img={commPerson}
              />
              <CommunityCard
                name={this.state.name}
                country={this.state.country}
                message={this.state.message}
                img={commPerson}
              />
              <CommunityCard
                name={this.state.name}
                country={this.state.country}
                message={this.state.message}
                img={commPerson}
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="learn">
            <div className="container">
              <h3 className="heading heading__secondary ml-4 mb-5">
                Learn + Connect
              </h3>

              <div className="row">
                <div className="col-md-4">
                  <div>
                    <Link
                      to="/explore"
                      className="button button__black mb-3 ml-4"
                    >
                      Explore
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/contribute"
                      className="button button__black ml-4"
                    >
                      Contribute
                    </Link>
                  </div>
                </div>
                <div className="col-md-8">
                  <About2Img className="about-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.categories
  };
};

export default connect(mapStateToProps, { fetchCategories })(About);
