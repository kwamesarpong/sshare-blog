import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="container">
        <ul className="nav footer__links ">
          <li className="nav-item">
            <Link to="" className="nav-link text-white">
              TEAM
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link text-white">
              CONTACT
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link text-white">
              LEGAL
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link text-white">
              TELL A FRIEND
            </Link>
          </li>
          <li className="nav-item ml-auto">
            &copy; <span className="mx-2">SISTAZSHARE</span>
            <span>{new Date().getFullYear()}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
