import React from "react";

export default function index(props) {
  const goingTo = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="icon-container"
      data-aos="fade-up"
      data-aos-delay={props.delay}
      onClick={() => goingTo(props.href)}
    >
      <figure className="bg-image">
        <img src={props.link} alt="icon link" />
      </figure>
      <figure className="inner">
        <img src={props.icon} alt="icon media" />
      </figure>
      <p>{props.content}</p>
    </div>
  );
}
