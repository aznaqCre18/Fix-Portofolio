import React from "react";

import ContentConnect from "./../../atoms/ContentConnect";
import "./../../../style/Connect/style.scss";
import {
  Dribble,
  Medium,
  Sandbox,
  Linkedin,
  Link,
} from "./../../../assets/icon/connect";

export default function index() {
  return (
    <article className="wrapper">
      <section className="list-connect">
        <ContentConnect
          icon={Medium}
          content="to see articles about what I have learned"
          link={Link}
          delay="0"
          href="https://medium.com/@azizaqibs"
        />

        <ContentConnect
          icon={Sandbox}
          content="To see my experiment program about frontend"
          link={Link}
          delay="200"
          href="https://codesandbox.io/u/aznaqCre18"
        />

        <ContentConnect
          icon={Linkedin}
          content="To see my profile and all about me"
          link={Link}
          delay="400"
          href="https://www.linkedin.com/in/aziz-aznaq-cre/"
        />

        <ContentConnect
          icon={Dribble}
          content="To see all my Design Web or Mobile Application"
          link={Link}
          delay="600"
          href="https://dribbble.com/aznaq18"
        />
      </section>
    </article>
  );
}
