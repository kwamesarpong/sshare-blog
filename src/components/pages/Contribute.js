import React, { Component } from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import ContributeCard from "../utils/ContributeCard";

// import peopleFlowerImg from "../../assets/contribute-flower.jpg";
// import peopleFlowerImg1 from "../../assets/contribute-2.jpg";

import { ReactComponent as ContributeImg1 } from "../../assets/SISTAZSHARE-CONTRIBUTE.svg";
import { ReactComponent as ContributeImg2 } from "../../assets/SISTAZSHARE-CONTRIBUTE-2.svg";
import { ReactComponent as ContributeBadge } from "../../assets/SISTAZSHARE-BADGE.svg";
import { ReactComponent as ContributeImg3 } from "../../assets/SISTAZSHARE-CONTRIBUTE-3.svg";
import Footer from "../utils/Footer";

class Contribute extends Component {
  state = {
    num: {
      num1: "1",
      num2: "2",
      num3: "3",
    },
    title: {
      title1: "Have something ...",
      title2: "Post it here ...",
      title3: "Share it ...",
    },
    text: {
      text1: `Your contributions towards women matter. Put your thoughts into – articles,
        podcasts, videos, photos, illustrations, memes or request some Facebook
        or Twitter time with us.`,
      text2: `Your profile on Sistaz Share lets you publish all your digital
      media content for women to the world. Own a documentary of all your works
      in one place, especially made for empowering women.`,
      text3: `Sistaz Share pushes all every thing you post to all social media
      platforms from your profile ! Imagine the number of women’s lives you transform
      as your content reaches the world over. Readily accessible, clicks and swipes away`,
    },
  };
  render() {
    return (
      <div className="contribute">
        <Navbar whitePage={true} />

        <div className="container pb-5">
          <div className="row">
            <div className="col-md-6">
              {/* // svg image  */}
              <ContributeImg1 />
            </div>
            <div className="col-md-6 align-self-end">
              <div className="contribute__header">
                <h3 className="heading heading__secondary-2 p-4">
                  Empower women, digitally ...
                </h3>

                <p className="p-4">
                  Sistaz Share invites you to enlighten millions of young girls
                  & women around the world with your knowledge, skills and life
                  experiences. We’re open to all women and men passionate about
                  sharing their insightful resources aimed to yield deeper
                  perspectives and revealing facts for women folk, to the world.
                </p>
              </div>
              {/* <div className="vertical-left">
                <span>&nbsp;</span>
              </div> */}
            </div>
          </div>
        </div>

        <hr />

        <div className="container">
          <h3 className="heading heading__secondary-2 pt-5 text-center">
            AllerVite !
          </h3>
          <div className="contribute__section-2 pb-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <ContributeImg2 />
              </div>
            </div>

            <div className="row pb-5">
              <ContributeCard
                num={this.state.num.num1}
                title={this.state.title.title1}
                text={this.state.text.text1}
              />
              <ContributeCard
                num={this.state.num.num2}
                title={this.state.title.title2}
                text={this.state.text.text2}
              />
              <ContributeCard
                num={this.state.num.num3}
                title={this.state.title.title3}
                text={this.state.text.text3}
              />
            </div>
          </div>
        </div>

        <div className="contribute__badge py-4">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <ContributeBadge className="contribute__badge-image py-5" />
              </div>
              <div className="col-md-9">
                <h3 className="heading heading__secondary-2 pt-5">
                  Earn a badge ...
                </h3>
                <p>
                  We award you a loyalty badge to display on your profile for
                  the world to honor acknowledge your efforts at helping to the
                  society to be better. We let the our world audience of women
                  judge, by analyzing their comments shares and impacts you are
                  making in their lives. Women and men who are already involved
                  in women’s empowerment actives earn a badge directly at sign
                  up, as we review your profile.
                </p>
              </div>
            </div>

            <div className="row py-3">
              <div className="col-md-4 mar-lar">
                <h4 className="heading heading__tertiary pt-5 pb-3">Ready ?</h4>
                <Link className="nav-link button button__black " to="/signup">
                  JOIN US
                </Link>
                <p className="contribute__badge--text">
                  Tell Your Friends About Sistaz Share
                </p>
              </div>

              <div className="col-md-5">
                <ContributeImg3 className="text-center" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contribute;
