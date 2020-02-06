import React from "react";
import Navbar from "../pages/Navbar";
import { Link } from "react-router-dom";

const SharePost = ({ text }) => {
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
              {/* <label htmlFor="weblink">
                Share Weblink to a Previous Blog Post ( text, audio, podcast,
                video, image )
              </label> */}
              <input
                type="url"
                name="weblink"
                id="weblink"
                placeholder="Share Weblink to a Previous Blog Post ( text, audio, podcast, video, image )"
              />
            </div>
            <Link className="nav-link button button__black text-center" to="/">
              post
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SharePost;
