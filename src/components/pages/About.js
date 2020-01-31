import React, { Component } from "react";
import Navbar from "./Navbar";

import AboutImg from "./../../assets/about.jpg";
import ImageMiniCard from "../utils/ImageMiniCard";

class About extends Component {
  render() {
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
                className="img-fluid about about__img"
              />
            </div>
          </div>
        </div>

        <div className="category text-center pt-5">
          {/* <div className="container"> */}
          <h3 className="heading heading__secondary-2">
            we pool articles & stories for women ...
          </h3>
          <p>
            Sistaz Share acknowledges the everyday modern woman, narrating the
            savvy patterns that make up the complexities of her life. We
            introduce you to a digital sphere of telling the timeless chronicles
            of women’s lives, in real time.
          </p>
          {/* </div> */}

          <div className="container">
            <div className="row">
              <ImageMiniCard title="Mind & Body" imgNum="1" />
              <ImageMiniCard title="Feminism" imgNum="2" />
              <ImageMiniCard title="Lifestyle" imgNum="3" />
              <ImageMiniCard title="Motivation" imgNum="4" />
              <ImageMiniCard title="Love & Relationships" imgNum="5" />
              <ImageMiniCard title="Money" imgNum="6" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
