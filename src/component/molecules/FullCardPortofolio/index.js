import React from "react";

import CardImage from "./../../atoms/portofolioCard";

export default function index(props) {
  return (
    <div className="container-full-card">
      <CardImage img={props.img} alt={props.title} />
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.type}</p>
        <p>{props.stack}</p>
      </div>
    </div>
  );
}
