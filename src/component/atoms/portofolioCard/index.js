import React from "react";

import "./style.scss";

export default function index(props) {
  return (
    <div className="portofolio-container">
      <img src={props.img} alt={props.alt} />
    </div>
  );
}
