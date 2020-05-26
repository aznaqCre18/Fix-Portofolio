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
      <h1>
        Create and implement design into a website that looks good from the
        client side
      </h1>

      {/* different com */}

      <div className="skill-list">
        <div className="design">
          <h3>design</h3>
          <ul>
            <li>UI Design</li>
            <li>web design</li>
            <li>mobile design</li>
          </ul>
        </div>

        <div className="develop">
          <h3>development</h3>
          <ul>
            <li>React.js</li>
            <li>React Native</li>
            <li>HTML/CSS/JS</li>
            <li>SASS</li>
            <li>GraphQL ( Client Size )</li>
          </ul>
        </div>
      </div>

      {/* another com */}

      <div className="experience">
        <h5>I EXPERIENCE IN</h5>
        <div className="logo-list">
          <img src={VsCode} alt="vs-code" />
          <img src={ReactJs} alt="react-js" />
          <img src={Js} alt="java-script" />
          <img src={Html} alt="html" />
          <img src={Css} alt="css" />
          <img src={Sass} alt="sass" />
          <img src={Bs} alt="bootstrap" />
          <img src={Gql} alt="graphql" />
          <img src={Figma} alt="figma" />
        </div>
      </div>

      {/* another com */}

      <div className="footer">
        <div className="container">
          <div className="logo-container">
            <div className="logo">aznaqCre.</div>
            <p>azizaqibs@gmail.com</p>
            <p>+62 899 777 5669</p>
          </div>
          <div className="media-social">
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
