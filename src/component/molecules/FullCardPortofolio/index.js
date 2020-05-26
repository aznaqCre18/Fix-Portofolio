import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import CardImage from "./../../atoms/portofolioCard";

const CardComp = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div className="container-full-card" data-aos={props.aos}>
      <CardImage img={props.img} alt={props.title} />
      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.type}</p>
        <p>{props.stack}</p>
      </div>
    </div>
  );
};

export default CardComp;
