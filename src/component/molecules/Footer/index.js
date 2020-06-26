import React from "react";

import "./style.scss";

function Footer({ Medium, Github, LinkedIn, Dribble, Sandbox }) {
  return (
    <footer className="footer">
      <article className="container">
        <section className="logo-container">
          <p className="logo">aznaqCre.</p>
          <p>azizaqibs@gmail.com</p>
          <p>+62 899 777 5669</p>
        </section>
        <section className="media-social">
          <a href="https://medium.com/@azizaqibs">
            <img src={Medium} alt="medium" />
          </a>
          <a href="https://github.com/aznaqCre18/">
            <img src={Github} alt="github" />
          </a>
          <a href="https://dribbble.com/aznaq18">
            <img src={Dribble} alt="dribble" />
          </a>
          <a href="https://codesandbox.io/u/aznaqCre18">
            <img src={Sandbox} alt="codesandbox" />
          </a>
          <a href="https://www.linkedin.com/in/aziz-aznaq-cre/">
            <img src={LinkedIn} alt="linkedin" />
          </a>
        </section>
      </article>
    </footer>
  );
}

export default Footer;
