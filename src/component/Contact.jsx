import React from "react";
import { FaSquareInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>Contact Me</h1>
        
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/ravindermatti/" className="items">
            <FaSquareInstagram className="icons" />
          </a>
          <a href="https://www.facebook.com/ravinder.matti/" className="items">
            <CiFacebook className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/ravinder-singh-799b86248/."
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
          <a href="https://www.twitter.com" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a
            href="https://github.com/ravindermatti/"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:ravindermatti123@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
