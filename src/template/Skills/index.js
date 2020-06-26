import React from "react";

import "./../../style/Skill/style.scss";
import Experience from "./../../component/molecules/Experience";
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

export default function index() {
  return (
    <section id="skill-container">
      <h1 data-aos="fade-right" data-aos-duration="200">
        Create and implement design into a website that looks good from the
        client side
      </h1>

      {/* different com */}

      <article className="skill-list">
        <section className="design">
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
        </section>

        <section className="develop">
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
        </section>
      </article>

      {/* another com */}
      <Experience
        Bs={Bs}
        Gql={Gql}
        Html={Html}
        Css={Css}
        Sass={Sass}
        ReactJs={ReactJs}
        VsCode={VsCode}
        Figma={Figma}
        Js={Js}
      />

      {/* another com */}
    </section>
  );
}
