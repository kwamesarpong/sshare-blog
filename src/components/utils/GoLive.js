import React from "react";
import Navbar from "../pages/Navbar";
import { Link } from "react-router-dom";

const Golive = ({ text }) => {
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
                <label className="label" htmlFor="uploadPDF">
                  Upload PDF
                </label>
                <input
                  type="file"
                  name="pdf"
                  id="uploadPDF"
                  placeholder="Upload PDF"
                />
              </div>
              <div className="pb-3">
                <input
                  type="text"
                  name="topic"
                  id="topic"
                  placeholder="Topic"
                />
              </div>
              <div className="pb-3">
                <input
                  type="text"
                  name="summary"
                  id="summary"
                  placeholder="Summary"
                />
              </div>
              <div>
                <input type="checkbox" name="facebook" id="facebook" />
                <label htmlFor="facebook">Facebook live | Discussion</label>
              </div>
              <div className="pb-3">
                <input type="checkbox" name="twitter" id="twitter" />
                <label className="social__label" htmlFor="twitter">
                  Twitter Discussion
                </label>
              </div>
              <div className="pb-5">
                <input
                  type="text"
                  name="details"
                  id="details"
                  placeholder="Email | Phone Number | Chat | Direct Message Link"
                />
              </div>
            </div>
            <div className="text-center pt-5">
              <Link className="nav-link button button__black" to="/">
                Request
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Golive;
