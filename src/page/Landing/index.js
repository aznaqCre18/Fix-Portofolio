import React from "react";

import { DescribeSelf, ListProject, Connect, Skill } from "./../../template";

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
