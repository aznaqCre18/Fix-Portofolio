import React from "react";

import { DescribeSelf, ListProject, Connect, Skill } from "./../../template";
import "./../../style/_PageLanding/style.scss";
import {
  Medium,
  Github,
  Dribble,
  Sandbox,
  LinkedIn,
} from "./../../assets/icon/media";
import Footer from "./../../component/molecules/Footer";

export default function index() {
  return (
    <>
      <DescribeSelf />
      <ListProject />
      <Connect />
      <Skill />
      <Footer
        Medium={Medium}
        Github={Github}
        Sandbox={Sandbox}
        Dribble={Dribble}
        LinkedIn={LinkedIn}
      />
    </>
  );
}
