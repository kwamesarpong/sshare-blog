import React, { Component } from "react";
import Navbar from "./Navbar";

import ImageMiniCard from "../utils/ImageMiniCard";
import AboutImg from "./../../assets/about.jpg";
import phoneImg from "./../../assets/Delivery-Cristina.jpg";

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

        <div className="settee container text-center">
          <h3 className="heading heading__secondary-2 mb-5">
            on the settee of engaging ...
          </h3>
          <div className="row">
            <div className="col-md-6 text-right vertical">
              <p>insightful outlooks on life</p>
              <p>expert opinions</p>
              <p>embracing diversity</p>
              <p>building capacity</p>
              <p>collaborating mutual perspectives</p>
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

        <div className="enlighten container">
          <div className="row">
            <div className="col-md-6 vertical">
              <img src={phoneImg} alt="phone" className="img-fluid" />
            </div>
            <div className="col-md-6 text-left pad-left">
              <h3 className="heading heading__secondary-2 mb-5">
                Enlightenment on the go !
              </h3>
              <p>
                Harnessing the convenience of digital technology, we’re the
                ideal hub for exploring women’s discourses, while offering
                everyone from around the world the chance to contribute their
                knowledge, skills and experience to help make the world of women
                better.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
