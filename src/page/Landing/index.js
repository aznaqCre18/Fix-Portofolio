import React from "react";

import { DescribeSelf, ListProject, Connect, Skill } from "./../../template";
import "./../../style/_PageLanding/style.scss";

export default function index() {
  return (
    <div>
      <DescribeSelf />
      <ListProject />
      <Connect />
      <Skill />
    </div>
  );
}
