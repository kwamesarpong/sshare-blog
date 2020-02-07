import React from "react";
import Navbar from "../pages/Navbar";
import { Link } from "react-router-dom";

const ShareArticle = ({ text }) => {
  return (
    <div>
      <div className="contribute__cont--share">
        <hr />
        <Navbar whitePage={true} />

        <div className="container">
          <h4 className="heading heading__tertiary pt-5 pb-4 font-weight-bold">
            {text}
          </h4>

          <form className="mb-5">
            <div className="contribute__cont--border">
              <div className="pb-5">
                <select>
                  <option>Select Tags</option>
                  <option>Mind & Body</option>
                  <option>Feminism</option>
                  <option>Lifestyle</option>
                  <option>Motivation</option>
                  <option>Love & Relationships</option>
                  <option>Money</option>
                </select>
              </div>
              <div className="pb-5">
                <label htmlFor="uploadPDF">Upload PDF</label>
                <input
                  type="file"
                  name="pdf"
                  id="uploadPDF"
                  placeholder="Upload PDF"
                />
              </div>
              <div className="pb-5">
                <input
                  type="url"
                  name="weblink"
                  id="weblink"
                  placeholder="Share Weblink to a Previous BlArticle ( text, audio, podcast, video, image )"
                />
              </div>
            </div>
            <div className="text-center pt-5">
              <Link className="nav-link button button__black" to="/">
                post
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShareArticle;
