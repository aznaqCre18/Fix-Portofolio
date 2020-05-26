import React from "react";

import "./../../style/Skill/style.scss";
import {
  Bs,
  Html,
  Css,
  Sass,
  ReactJs,
  Gql,
  VsCode,
  Figma,
  Js,
} from "./../../assets/icon/exprience";
import {
  Medium,
  Github,
  Dribble,
  Sandbox,
  LinkedIn,
} from "./../../assets/icon/media";

export default function index() {
  return (
    <div id="skill-container">
      <h1 data-aos="fade-right" data-aos-duration="200">
        Create and implement design into a website that looks good from the
        client side
      </h1>

      {/* different com */}

      <div className="skill-list">
        <div className="design">
          <h3 data-aos="fade-left" data-aos-delay="200">
            design
          </h3>
          <ul>
            <li data-aos="fade-left" data-aos-delay="250">
              UI Design
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              web design
            </li>
            <li data-aos="fade-left" data-aos-delay="350">
              mobile design
            </li>
          </ul>
        </div>

        <div className="develop">
          <h3 data-aos="fade-left" data-aos-delay="200">
            development
          </h3>
          <ul>
            <li data-aos="fade-left" data-aos-delay="250">
              React.js
            </li>
            <li data-aos="fade-left" data-aos-delay="300">
              React Native
            </li>
            <li data-aos="fade-left" data-aos-delay="350">
              HTML/CSS/JS
            </li>
            <li data-aos="fade-left" data-aos-delay="400">
              SASS
            </li>
            <li data-aos="fade-left" data-aos-delay="450">
              GraphQL ( Client Size )
            </li>
          </ul>
        </div>
      </div>

      {/* another com */}

      <div className="experience">
        <h5 data-aos="fade-right" data-aos-duration="1000">
          I EXPERIENCE IN
        </h5>
        <div className="logo-list">
          <img
            src={VsCode}
            alt="vs-code"
            data-aos="fade-left"
            data-aos-delay="800"
          />
          <img
            src={ReactJs}
            alt="react-js"
            data-aos="fade-left"
            data-aos-delay="900"
          />
          <img
            src={Js}
            alt="java-script"
            data-aos="fade-left"
            data-aos-delay="1000"
          />
          <img
            src={Html}
            alt="html"
            data-aos="fade-left"
            data-aos-delay="1100"
          />
          <img src={Css} alt="css" data-aos="fade-left" data-aos-delay="1200" />
          <img
            src={Sass}
            alt="sass"
            data-aos="fade-left"
            data-aos-delay="1300"
          />
          <img
            src={Bs}
            alt="bootstrap"
            data-aos="fade-left"
            data-aos-delay="1400"
          />
          <img
            src={Gql}
            alt="graphql"
            data-aos="fade-left"
            data-aos-delay="1500"
          />
          <img
            src={Figma}
            alt="figma"
            data-aos="fade-left"
            data-aos-delay="1600"
          />
        </div>
      </div>

      {/* another com */}

      <div className="footer">
        <div className="container">
          <div
            className="logo-container"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            <div className="logo">aznaqCre.</div>
            <p>azizaqibs@gmail.com</p>
            <p>+62 899 777 5669</p>
          </div>
          <div
            className="media-social"
            data-aos="fade-left"
            data-aos-duration="900"
          >
            <img src={Medium} alt="medium" />
            <img src={Github} alt="github" />
            <img src={Dribble} alt="dribble" />
            <img src={Sandbox} alt="codesandbox" />
            <img src={LinkedIn} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
}
