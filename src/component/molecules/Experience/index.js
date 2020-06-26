import React from "react";

function Experience({ Bs, Html, Sass, Css, Gql, ReactJs, VsCode, Figma, Js }) {
  return (
    <article className="experience">
      <h5 data-aos="fade-right" data-aos-duration="1000">
        I EXPERIENCE IN
      </h5>
      <figure className="logo-list">
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
        <img src={Html} alt="html" data-aos="fade-left" data-aos-delay="1100" />
        <img src={Css} alt="css" data-aos="fade-left" data-aos-delay="1200" />
        <img src={Sass} alt="sass" data-aos="fade-left" data-aos-delay="1300" />
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
      </figure>
    </article>
  );
}

export default Experience;
