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
    <div className="wrapper">
      <div className="list-connect">
        <ContentConnect
          icon={Medium}
          content="to see articles about what I have learned"
          link={Link}
          delay="0"
        />

        <ContentConnect
          icon={Sandbox}
          content="To see my experiment program about frontend"
          link={Link}
          delay="200"
        />

        <ContentConnect
          icon={Linkedin}
          content="To see my profile and all about me"
          link={Link}
          delay="400"
        />

        <ContentConnect
          icon={Dribble}
          content="To see all my Design Web or Mobile Application"
          link={Link}
          delay="600"
        />
      </div>
    </div>
  );
}
