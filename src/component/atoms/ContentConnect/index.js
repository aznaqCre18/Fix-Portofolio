import React from "react";

export default function index(props) {
  return (
    <div
      className="icon-container"
      data-aos="fade-up"
      data-aos-delay={props.delay}
    >
      <div className="bg-image">
        <img src={props.link} alt="icon link" />
      </div>
      <div className="inner">
        <img src={props.icon} alt="icon media" />
      </div>
      <p>{props.content}</p>
    </div>
  );
}
