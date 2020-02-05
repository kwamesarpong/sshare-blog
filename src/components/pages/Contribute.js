import React, { Component } from "react";
import Navbar from "./Navbar";

// import peopleFlowerImg from "../../assets/contribute-flower.jpg";
// import peopleFlowerImg1 from "../../assets/contribute-2.jpg";

import { ReactComponent as ContributeImg1 } from "../../assets/SISTAZSHARE-CONTRIBUTE.svg";
import { ReactComponent as ContributeImg2 } from "../../assets/SISTAZSHARE-CONTRIBUTE-2.svg";
import ContributeCard from "../utils/ContributeCard";

class Contribute extends Component {
  state = {
    num: {
      num1: "1",
      num2: "2",
      num3: "3"
    },
    title: {
      title1: "Have something ...",
      title2: "Post it here ...",
      title3: "Share it ..."
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
      as your content reaches the world over. Readily accessible, clicks and swipes away`
    }
  };
  render() {
    return (
      <div className="contribute">
        <Navbar whitePage={true} />

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* // svg image  */}
              <ContributeImg1 className="img-fluid" />

              {/* jpg image  */}
              {/* <img
                src={peopleFlowerImg}
                alt="people Flower"
                className="img-fluid"
              /> */}
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

        <div className="container pt-5">
          <h3 className="heading heading__secondary-2 pt-5 text-center">
            AllerVite !
          </h3>

          <div className="contribute__section-2 pb-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <ContributeImg2 className="img-fluid" />
              </div>
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
    );
  }
}

export default Contribute;
